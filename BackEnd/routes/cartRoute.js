import mongoose from "mongoose";
import authUser from "../middlewares/authUser";
import { updateCart } from "../controllers/cartController.js";


const cartRoute = mongoose.Router();

cartRoute.post('/update', authUser, updateCart)



export default cartRoute;

