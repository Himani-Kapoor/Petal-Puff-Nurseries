import express from 'express'
import authControllers from '../controllers/auth.controllers.js'

const router = express.Router()
//user
router.post('/user/register', authControllers.registerUser)
router.post('/user/login', authControllers.login)
router.get('/user/logout', authControllers.logout)
//Nursery Owner
router.post('/nursery-owner/register', authControllers.nurseryOwnerRegister)
router.post('/nursery-owner/login', authControllers.nurseryOwnerLogin)
router.get('/nursery-owner/logout', authControllers.nurseryOwnerLogout)



export default router