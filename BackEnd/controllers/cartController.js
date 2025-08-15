
import User from "../models/User.js";




// Update User CartData

export const updateCart = async (req , res) => {
    try {
        const { userId, cartItem } = req.body;
        await User.findByIdAndUpdate(userId, {cartItem});
        res.json({ success: true, message: "Cate Updatec"});
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message})
        
        
    }
}