// Starting server
import app from './src/app.js'
import dotenv from 'dotenv'
dotenv.config()
import connectDB from './src/db/db.js'
import cors from 'cors'
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));
connectDB();

app.listen( 5000,()=>{
    console.log("running on http://localhost:5000");
    
})