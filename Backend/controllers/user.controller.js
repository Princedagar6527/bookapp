import User from '../models/usermodal.js';
import bcryptjs from 'bcryptjs'
export const signup=async(req,res)=>{
   try {
   const {fullname,email,password}=req.body;
   const user=await User.findOne({email});
   if(user){
      return res.status(400).json({message:"user already exist"});
   }
   const hashpassword= await bcryptjs.hash(password,10)
   const createduser=new User({
     fullname:fullname,
     email:email,
     password:hashpassword,
   });
   await createduser.save();
   res.status(201).json({
    message:"user created successfully",
    user:{
        _id:createduser._id,
        fullname:createduser.fullname,
        email:createduser.email
    }
   });
   } catch (error) {
 console.log("error:" +error.message);
 res.status(500).json({message:"Internal error"});
   }
}

export const login=async (req,res)=>{
  try {
    const {email,password}=req.body;
    const user=await User.findOne({email});
    const isMatch= await bcryptjs.compare(password,user.password);
    if(!user || !isMatch){
      return res.status(400).json({message:"invalid user name or password"})
    }else{
        res.status(200).json({
                message: "Login successful",
                user: {
                    _id: user._id,
                    fullname: user.fullname,
                    email: user.email,
                },
            });
    }
  } catch (error) {
    console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
  }
}