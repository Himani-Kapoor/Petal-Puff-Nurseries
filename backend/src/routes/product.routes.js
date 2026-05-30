import express from 'express'
import productControllers from '../controllers/product.controllers.js';
import authMiddleware from '../middleware/auth.middleware.js';
import multer from 'multer'

const upload=multer({
    storage:multer.memoryStorage()
})

const router=express.Router();

// post- api/product  {protected}
router.post('/',authMiddleware.authNurseryOwnerMiddleware,upload.single('video'),productControllers.addProduct)

export default router;