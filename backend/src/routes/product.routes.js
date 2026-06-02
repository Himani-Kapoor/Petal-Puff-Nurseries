import express from 'express'
import productControllers from '../controllers/product.controllers.js';
import authMiddleware from '../middleware/auth.middleware.js';
import multer from 'multer'

// for Video Upload
const upload=multer({
    storage:multer.memoryStorage()
})

const router=express.Router();

// post- api/product  {protected}, using middleware and multer
router.post('/',
    authMiddleware.authNurseryOwnerMiddleware,
    upload.single('video'),
    productControllers.addProduct
);

//{/api/product for user} <-protected
router.get('/',)
export default router;