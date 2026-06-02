import productModel from "../models/product.model.js";
import storageService from "../services/storage.service.js";
import { v4 as uuid } from 'uuid'

async function addProduct(req, res) {
    console.log(req.nurseryOwner)
    console.log(req.body)
    console.log(req.file)

    if (!req.file) {
        return res.status(400).send({ error: 'No file uploaded' });
    }

    const fileUploadResult = await storageService.uploadFile(req.file.buffer, uuid());
    console.log(fileUploadResult);

    const { name, description, price } = req.body;
    const product = await productModel.create({
        name,
        nurseryOwner: req.nurseryOwner?._id,
        video: fileUploadResult.url,
        description,
        price,
    });
    // adding to DB
    await product.save();

    res.status(201).send({ message: 'Product uploaded successfully', product, upload: fileUploadResult });
}

async function getProduct(req,res){
    try {
        const products = await productModel.find({});
        res.status(200).json({
            message: "fetched successfully",
            products:products  
        });
    } catch (error) {
        res.status(500).json({
            message: "Error fetching products",
            error: error.message
        });
    }
}

export default { addProduct,
    getProduct

 }