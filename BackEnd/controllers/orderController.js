import Order from "../models/Order.js";
import Product from "../models/Product.js";
import User from '../models/User.js'
import Stripe from "stripe";


// place Orde COD

export const placeOrderCOD = async (req, res) => {
    try {
        const { items, address, userId } = req.body;
        if (!address || items.length === 0) {
            return res.json({ success: false, message: "invalid data" })
        }
        // claculet amount using items
        let amount = await items.reduce(async (acc, item) => {
            const product = await Product.findById(item.product);
            return (await acc) + product.offerPrice * item.quantity;
        }, 0)

        // add tax charge(2%)

        amount += Math.floor(amount * 0.02);

        await Order.create({
            userId,
            items,
            amount,
            address,
            paymentType: "COD",

        });

        await User.findByIdAndUpdate(userId, { cartItems: [] });

        return res.json({ success: true, message: "Order Place successfully" })

    } catch (error) {
        return res.json({ success: false, message: error.message })

    }
}




// stripe webhook to verify payment action
export const stripeWebhooks = async (request, response) => {
    const stripeInstance = new Stripe(process.env.STRIPE_SECRETE_KEY);

    const sig = request.headers["stripe-signature"];
    let event;

    try {
        event = stripeInstance.webhooks.constructEvent(
            request.body,
            sig,
            process.env.STRIPE_WEBHOOK_SECRET,
        );
    } catch (error) {
        return response.status(400).send(`webhook error: ${error.message}`)
    }

    // handel event
    switch (event.type) {
        case "payment_intent.succeeded": {
            const paymentIntent = event.data.object;
            const paymentIntentId = paymentIntent.id;

            const session = (await stripeInstance.checkout.sessions.list({
                payment_intent: paymentIntentId,

            })).data[0];


            if (!session) {
                console.error("No session found for this payment_intent:", paymentIntentId);
                return response.status(404).send("Session not found");
            }

            const { orderId, userId } = session.metadata;

            // mark payment as paid

            try {
                await Order.findByIdAndUpdate(orderId, { isPaid: true });
                // clear user cart
                await User.findByIdAndUpdate(userId, { cartItems: [] });
            } catch (err) {
                console.error("Failed to update order or user:", err);
            }


            // clear user cart


            break;
        }
        case "payment_intent.payment_failed": {
            const paymentIntent = event.data.object;
            const paymentIntentId = paymentIntent.id;

            const session = await stripeInstance.checkout.sessions.list({
                payment_intent: paymentIntentId,

            });

            const { orderId } = session.data[0].metadata;

            await Order.findByIdAndDelete(orderId);
            break;
        }



        default:
            console.error(`Unhandle event type ${event.type}`)
            break;
    }

    response.json({ received: true })

}





// get orders by user id
export const getUserOrders = async (req, res) => {
    try {
        const userId = req.userId;
        const orders = await Order.find({
            userId,
            $or: [{ paymentType: "COD" }, { isPaid: true }]
        }).populate("items.product address").sort({ createdAt: -1 })
        res.json({ success: true, orders });
    } catch (error) {
        return res.json({ success: false, message: error.message })

    }
}



// get All orders for seller /admin

export const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find({
            $or: [{ paymentType: "COD" }, { isPaid: true }]
        }).populate("items.product address userId").sort({ createdAt: -1 })
        res.json({ success: true, orders });
    } catch (error) {
        return res.json({ success: false, message: error.message })

    }
}




// place order stripe
export const placeOrderStripe = async (req, res) => {
    try {
        const { items, address } = req.body;
        const userId = req.userId;

        const { origin } = req.headers;

        if (!address || items.length === 0) {
            return res.json({ success: false, message: "invalid data" })
        }


        let productData = [];

        // claculet amount using items
        let amount = await items.reduce(async (acc, item) => {
            const product = await Product.findById(item.product);
            productData.push({
                name: product.name,
                price: product.offerPrice,
                quantity: item.quantity,
            })
            return (await acc) + product.offerPrice * item.quantity;
        }, 0)

        // add tax charge(2%)

        amount += Math.floor(amount * 0.02);

        const order = await Order.create({
            userId,
            items,
            amount,
            address,
            paymentType: "Online",
            isPaid: false,
        });


        // stripe gateway initialize
        const stripeInstance = new Stripe(process.env.STRIPE_SECRETE_KEY);

        // create line items for stripe
        const line_items = productData.map((item) => {
            return {
                price_data: {
                    currency: "usd",
                    product_data: {
                        name: item.name,
                    },
                    unit_amount: Math.floor(item.price + item.price * 0.02) * 100
                },
                quantity: item.quantity,
            }
        })


        // create session 
        const session = await stripeInstance.checkout.sessions.create({
            line_items,
            mode: "payment",
            success_url: `${origin}/loader?next=my-orders`,
            cancel_url: `${origin}/cart`,
            metadata: {
                orderId: order._id.toString(),
                userId,
            }
        })

        return res.json({ success: true, url: session.url })

    } catch (error) {
        return res.json({ success: false, message: error.message })

    }
}