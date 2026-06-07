// Starting server
import app from './src/app.js'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './src/db/db.js'

dotenv.config()

app.use(cors({
  origin: 'http://localhost:5173',  
  credentials: true
}));
connectDB();

app.listen( 5000,()=>{
    console.log("running on http://localhost:5000");
    
})