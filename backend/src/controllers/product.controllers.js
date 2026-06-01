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

    res.send({ message: 'Product uploaded successfully', upload: fileUploadResult });
}
export default { addProduct }