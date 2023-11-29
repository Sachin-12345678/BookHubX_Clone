//book.js-->
const mongoose=require("mongoose");

const bookSchema=new mongoose.Schema({
    title:String,
    author:String,
    genre:String,
    description:String,
    price:String
});

const BookModel=mongoose.model("Book", bookSchema);

module.exports=BookModel;