const express=require("express");
const app=express();
const connection=require("./config/db");
const {authenticate}=require("./middlewares/authenticate.middleware");
const {userRouter}=require("./routes/user.route")
const {bookRouter}=require("./routes/book.route")
const {disrouter}=require("./routes/discussion.route")
const reviewrouter=require("./routes/review.route")
const Readingrouter=require("./routes/reading.route")
require("dotenv").config()
const cors=require("cors")

app.use(express.json());
app.use(cors())

app.get("/", (req,res)=>{
    res.send("Home page...")
})

app.use("/",userRouter)
app.use("/",bookRouter)
app.use("/",disrouter)
app.use("/",reviewrouter)
app.use("/",Readingrouter)
app.use(authenticate)


app.listen(process.env.port, async()=>{
    try {
        await connection
        console.log("Connected to DB");
    } catch (error) {
        console.log(error);
    }
    console.log(`Server is running on port ${process.env.port}`);
})