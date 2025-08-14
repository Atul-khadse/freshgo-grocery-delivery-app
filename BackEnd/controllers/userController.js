import User from "../models/User";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

// register user

export const register = async (req, res) => {
    try {
        const { name, email, password} = req.body;

        if (!name|| !email || !password) {
            return res.json({success: false, message: "missing details"})
        }

        const existingUser = await User.findOne({email})

        if(existingUser){
            return res.json({success: false, message: "user already exist"})
            
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await User.create({naem, email, password: hashedPassword})

        const token = jwt.sign({id: user._id}, )
    } catch (error) {
        
    }
}