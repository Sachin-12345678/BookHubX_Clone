//user.js-->
const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    username:String,
    password:String,
    role:String, // 'reader', 'author', 'admin'
});

const UserModel=mongoose.model("User", userSchema);

module.exports=UserModel;