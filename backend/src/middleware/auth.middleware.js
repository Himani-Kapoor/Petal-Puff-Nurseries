import nurseryOwnerModel from "../models/nurseryOwner.model.js";
import userModel from "../models/user.model.js";
import jwt from 'jsonwebtoken'

async function authNurseryOwnerMiddleware(req, res, next){
    const token=req.cookies.token;
    if(!token){
        res.status(401).json({
            message:"You are not logged in"      
        })
        return;
    }
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET)
        const nurseryOwner= await nurseryOwnerModel.findById(decoded.id);
        req.nurseryOwner=nurseryOwner;
        next();
    }
    catch(err){
        return res.status(401).json({
            message:"Invalid token"
        })
    }
}

async function authUserMiddleware(req, res, next){
    const token=req.cookies.token;
    if (!token){
        res.status(401).json({
            message:"You are not logged in"
        })
        return;
    
    }
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET)
        const user= await userModel.findById(decoded.id);
        req.user=user;
        next();
    }
    catch(err){
        return res.status(401).json({
            message:"Invalid token"
        })

    }
    

}

export default{
    authNurseryOwnerMiddleware,
    authUserMiddleware
}