import productModel from "../models/product.model.js";

async function addProduct(req,res){
    console.log(req.nurseryOwner)
    res.send("Product added successfully")
    console.log(req.body)
    console.log(req.file)
}
export default {addProduct}