import Order from "../models/Order";
import Product from "../models/Product";

// place Orde COD

export const placeOrderCOD = async (req ,res) =>{
    try {
        const { userId, items, address } = req.body;
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