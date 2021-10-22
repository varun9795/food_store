const mongoose=require('mongoose');
const validator=require('validator');
// const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"please enter name"],
        maxlength:[30,"name cannot exceed 30 characters"],
        minlength:[4,"name should be greater than 4 character"]
    },
    email:{
        type:String,
        required:[true,"please enter your mail"],
        unique:true,
        validate:[validator.isEmail,"please enter a valid email"]
    },
    password:{
        type:String,
        required:[true,"please enter your password"],
        minlength:[8,"password should be greater than 8 characters"],
        select:false,
    },
});

// userSchema.pre("save",async function(next){
//     if(!this.isModified("password")){
//         next();
//     }
//     this.passsword=await bcrypt.hash(this.passsword,10);
// });

//JWT token
userSchema.methods.getJWTToken=function(){
    console.log("in jwt")
    return jwt.sign({id:this._id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRE
    }); 
}

//compare password
// userSchema.methods.comparePassword=async function(enteredPassword){
//     // return await bcrypt.compare(enteredPassword,this.password);
//     return true;
// }

module.exports=mongoose.model("User",userSchema);
