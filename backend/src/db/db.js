import mongoose from 'mongoose'
function connectDB(){
    mongoose.connect("mongodb://localhost:27017/Petal-Puff-DB")
    .then(()=>
    console.log("DB Connected"))
    .catch((err)=>
    console.log("error is-",err))

}

export default connectDB;