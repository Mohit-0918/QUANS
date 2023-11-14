
const express =require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const app=express();
const UserModel=require('./Model/User')

app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://mohitsharma2001rip:MohitSharma18@quans.jxpaaoa.mongodb.net/")

//Routing
app.post("/signup",(req,res)=>{
    UserModel.create(req.body)
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
})
app.post("/login",(req,res)=>{
    const{username,password}=req.body;
    UserModel.findOne({username:username})
    .then(result=>{
        if(result){
            if(result.password === password){
                res.json("Success")
            }else{
                res.json("Incorrect Password")
            }
        }else{
            res.json("invalid Username")
        }
    })
})

app.listen(3001,()=>{
    console.log("server is running")
})