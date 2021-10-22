const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors=require("../middleware/catchAsyncErrors");
const User=require('../models/userModel');
const sendToken=require('../utils/jwtToken')

//register a user

registerUser=catchAsyncErrors(async(req,res,next)=>{
    console.log(req.body)
    const {name,email,password}=req.body;
    console.log(name,email)
    console.log("hiiii")
    const user=await User.create({
        name,email,password
    });
    console.log("hellooooo")
    sendToken(user,201,res);
})

//login user
loginUser=catchAsyncErrors(async(req,res,next)=>{

    const {email,password}=req.body;

    //checking if user has given password and email both

    if(!email || !password){
        return next(new ErrorHandler("please enter email and password",400));
    }

    const user=await User.findOne({email}).select("+password");
    if(!user){
        return next(new ErrorHandler("invalid email or password",401));
    }

    if(user.password!==password){
        return next(new ErrorHandler("invalid email or password",401));
    }

    sendToken(user,200,res);
})

//logout User

logout=catchAsyncErrors(async(req,res,next)=>{

    res.cookie("token",null,{
        expires:new Date(Date.now()),
        httpOnly:true,
    });
    res.status(200).json({
        success:true,
        message:"logged out",
    });
})

module.exports={registerUser,loginUser,logout};