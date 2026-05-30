// Starting server
import app from './src/app.js'
import connectDB from './src/db/db.js'
connectDB();

app.listen(5000,()=>{
    console.log("running on http://localhost:5000");
    
})