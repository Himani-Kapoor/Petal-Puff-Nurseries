// server created
import express from 'express'
import cookieParser from 'cookie-parser'
import authRoutes from './routes/auth.routes.js'
import productRoutes from './routes/product.routes.js'

const app=express()


app.use(express.json());
app.use(cookieParser());

app.get('/',(req,res)=>{
    res.send('<h1><marquee>Hello</marquee></h1>')
})

app.use('/api/auth',authRoutes)
app.use('/api/product',productRoutes)


export default app
