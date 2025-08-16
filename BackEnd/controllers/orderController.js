import Order from "../models/Order.js";
import Product from "../models/Product.js";
import Stripe from "stripe";


// place Orde COD

export const placeOrderCOD = async (req ,res) =>{
    try {
        const { items, address } = req.body;
        const userId = req.userId;
        if(!address || items.length === 0){
            return res.json({success: false, message: "invalid data"})
        }
        // claculet amount using items
        let amount = await items.reduce(async (acc, item)=>{
            const product = await Product.findById(item.product);
            return (await acc) + product.offerPrice * item.quantity;
        }, 0)

        // add tax charge(2%)

        amount += Math.floor(amount *0.02);

        await Order.create({
            userId,
            items,
            amount,
            address,
            paymentType: "COD",
        })

        return res.json({ success: true, message: "Order Place successfully"})

    } catch (error) {
        return res.json({ success: false, message: error.message})
        
    }
}



// get orders by user id
export const getUserOrders = async (req, res) =>{
    try {
        const  userId  = req.userId;
        const orders = await Order.find({
            userId,
            $or: [{paymentType: "COD"}, {isPaid: true}]
        }).populate("items.product address").sort({createdAt: -1})
        res.json({ success: true, orders});
    } catch (error) {
        return res.json({ success: false, message: error.message})
        
    }
}



// get All orders for seller /admin

export const getAllOrders = async (req, res) =>{
    try {
        const orders = await Order.find({
            $or: [{paymentType: "COD"}, {isPaid: true}]
        }).populate("items.product address userId").sort({createdAt: -1})
        res.json({ success: true, orders});
    } catch (error) {
        return res.json({ success: false, message: error.message})
        
    }
}




// place order stripe
export const placeOrderStripe = async (req ,res) =>{
    try {
        const { items, address } = req.body;
        const userId = req.userId;

        const {origin} = req.headers;

        if(!address || items.length === 0){
            return res.json({success: false, message: "invalid data"})
        }


            let productData = [];

        // claculet amount using items
        let amount = await items.reduce(async (acc, item)=>{
            const product = await Product.findById(item.product);
            productData.push({
                name: product.name,
                price: product.offerPrice,
                quantity: product.quantity,
            })
            return (await acc) + product.offerPrice * item.quantity;
        }, 0)

        // add tax charge(2%)

        amount += Math.floor(amount *0.02);

       const order =  await Order.create({
            userId,
            items,
            amount,
            address,
            paymentType: "Online",
        });


        // stripe gateway initialize
        const stripeInstance = new Stripe(process.env.STRIPE-SECRETE_KEY);

        

        return res.json({ success: true, message: "Order Place successfully"})

    } catch (error) {
        return res.json({ success: false, message: error.message})
        
    }
}