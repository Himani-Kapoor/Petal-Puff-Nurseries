import mongoose from "mongoose";
// plant product
const productSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    
    },
    nurseryOwner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"nurseryOwner",
        required:true
    },
    video:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
})
export const productModel=mongoose.model("product",productSchema)
export default productModel;