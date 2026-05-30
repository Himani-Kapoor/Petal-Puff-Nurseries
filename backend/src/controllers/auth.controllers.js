import userSchema from '../models/user.model.js'
import nurseryOwnerModel from '../models/nurseryOwner.model.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import 'dotenv/config'




async function registerUser(req, res){
    const {fullname,username,email,password,phoneNumber,address}=req.body;

    const isUserAlreadyExists= await userSchema.findOne({
        email
    })
    if (isUserAlreadyExists){
        return res.status(400).json({
            message:"User already exists"
        });
    }

    const hashedPassword= await bcrypt.hash(password,10);
    const user= await userSchema.create({
        fullname,username,email,password:hashedPassword,phoneNumber,address
    })

    const token=jwt.sign({
            id:user._id,
            role:user.role,
        },process.env.JWT_SECRET
    )

    res.cookie("token",token)
    res.status(201).json({
        message:"User registered successfully",
        user:{
            id:user._id,
            fullname:user.fullname,
            username:user.username,
            email:user.email
        }
    })
}

async function login(req, res){
    const {email, password} = req.body;
    
    const user = await userSchema.findOne({email});
    if(!user){
        return res.status(400).json({
            message: "User not found"
        });
    }
    
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if(!isPasswordCorrect){
        return res.status(400).json({
            message: "Invalid password"
        });
    }
    
    const token = jwt.sign({
        id: user._id,
        role: user.role,
    }, process.env.JWT_SECRET);
    
    res.cookie("token", token);
    res.status(200).json({
        message: "User logged in successfully",
        user: {
            id: user._id,
            fullname: user.fullname,
            username: user.username,
            email: user.email
        }
    });
}

async function logout(req, res){
    res.clearCookie("token");
    res.status(200).json({
        message: "User logged out successfully"
    });
}


async function nurseryOwnerRegister(req, res){
    const {name,email,password,phoneNumber,address}=req.body;
    const isAccountAlreadyExists= await nurseryOwnerModel.findOne({
        email
    })
    if (isAccountAlreadyExists){
        return res.status(400).json({
            message:"Account already exists"
        });
    }
    const hashedPassword= await bcrypt.hash(password,10);
    const account= await nurseryOwnerModel.create({
        name,email,password:hashedPassword,phoneNumber,address
    })
    const token=jwt.sign({
            id:account._id,
            role:account.role,
        },process.env.JWT_SECRET
    )
    res.cookie("token",token)
    res.status(201).json({
        message:"Account registered successfully",
        account:{
            id:account._id,
            name:account.name,
            email:account.email
        }
    })
}
async function nurseryOwnerLogin(req, res){
    const {email, password} = req.body;
    const account = await nurseryOwnerModel.findOne({email});
    if(!account){
        return res.status(400).json({
            message: "Account not found"
        });
    }

    const isPasswordCorrect = await bcrypt.compare(password, account.password);
    if(!isPasswordCorrect){
        return res.status(400).json({
            message: "Invalid password"
        });
    }
    const token = jwt.sign({
        id: account._id,
        role: account.role,
    }, process.env.JWT_SECRET);
    res.cookie("token", token);
    res.status(200).json({
        message: "Account logged in successfully",
        account: {
            id: account._id,
            name: account.name,
            email: account.email
        }
        });

}

async function nurseryOwnerLogout(req, res){
    res.clearCookie("token");
    res.status(200).json({
        message: "Account logged out successfully"
        });
}

export default {registerUser, login, logout,nurseryOwnerRegister,nurseryOwnerLogin,nurseryOwnerLogout};
