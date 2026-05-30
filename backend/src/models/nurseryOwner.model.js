import mongoose from "mongoose";

const nurseryOwner= mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },

    phoneNumber:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },

})

const nurseryOwnerModel=mongoose.model("nurseryOwner",nurseryOwner)

export default nurseryOwnerModel;
