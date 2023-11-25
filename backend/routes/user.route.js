const express=require("express")
const {JsonWebToken} = require("jsonwebtoken")
const UserModel=require("../models/user")
const {blacklist}=require("../models/blacklist")
const userRouter=express.Router()
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")

//user register-->
userRouter.post("/register",async(req,res)=>{
    const {username,password,role}=req.body
    try{
        bcrypt.hash(password,5,async(err, hash)=> {
            if(err) res.send({"msg":"Something went wrong","error":err.message})
            else{
                const user=new UserModel({username,password:hash,role})
                await user.save()
                res.send({"msg":"New Users has been registred"})
           }
        });
       
    }catch(err){
        res.send({"msg":"Something went wrong","error":err.message})
    }
    
})


//user login-->
userRouter.post("/login", async(req,res)=>{
    const {username,password}=(req.body)
    try{
        const user=await UserModel.find({username})
        console.log(user);
        if(user.length>0){
        bcrypt.compare(password, user[0].password,(err, result)=>{
            if(result){
                let token=jwt.sign({userID:user[0]._id},"masai")
                res.send({"msg":"Logged in","token":token})
            }else{
                res.send({"msg":"wrong inform"})
            }
        });

    }else{
            res.send({"msg":"wrong credentials"})
        }
     }catch(err){
         res.send({"msg":"Something went wrong","error":err.message})
     }
})


//user logout-->
userRouter.get("/logout",(req,res)=>{
    blacklist.push(req.headers?.authorization?.split(" ")[1])

    res.send({msg:"logout successful"})
    })

module.exports={
    userRouter
}
