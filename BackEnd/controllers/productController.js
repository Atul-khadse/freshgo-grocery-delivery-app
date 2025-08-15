import {v2 as cloudinary} from 'cloudinary'
import Product from '../models/Product.js';


// Add produc
export const addProduct = async (req , res ) => {
    try {
        let productData = JSON.parse(req.body.productData);

        const images = req.files 

        let imageUrl = await Promise.all(
            images.map(async (item) =>{
                let result = await cloudinary.uploader.upload(item.path,
                    {resource_type: 'image'});
                    return result.secure_url
            })
        )

        await Product.create({...productData, image: imageUrl});

        res.json({ success: true, message: "Product Added"});

    } catch (error) {
        console.log(error.message);
        res.json({ success: false , message: error.message});
    }
}



// Get Product
export const productList = async (req , res ) => {
    try {
        const products = await Product.find({});
        req.json({ success: true , products});
    } catch (error) {
        console.log(error.message);
        res.json({ success: false , message: error.message});
    }
}



// get Single Product
export const productById = async (req , res ) => {
    
}


// Change Product inStock
 export const changeStock = async (req , res ) => {
    
}