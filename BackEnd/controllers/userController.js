import User from "../models/User";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { use } from "react";

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

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '7d'})

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 7 * 24 * 60 * 1000,
        })


                   return res.json({success: true, user: {email: user.email, name: user.naem}})

    } catch (error) {
        
    }
}