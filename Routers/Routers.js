const express = require("express")
const Router = express.Router()
const userdata = require("../schema/schema")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const {isAdmin} =require("../uitilitys/autho")

Router.post("/signup",async(req,res)=>{
 try{
    let payload = req.body
    payload.hashedpassword = await bcrypt.hash(payload.password,10)
    const usersche = new userdata(req.body)
 usersche.save((err,data)=>{
    if(err){
            res.status(404).send("this is some error")
            console.log(err)
    }
    res.status(201).header("Access-Control-Allow-Origin").send(data)
 })
 }catch(err){
    console.log(err)
 }
})
Router.post("/signin", isAdmin,(req,res)=>{
   try {
         let payload = req.body
         console.log(payload)
         userdata.findOne({email : payload.email},async(err,user)=>{
            if(err || !user){
               return res.status(400).json({
                  err: "username and the email id is don't exist"
               })
            }
            const validateuser = await bcrypt.compare(payload.password,user.hashedpassword)
            if(validateuser){
               const token = jwt.sign({_id:user._id},"qwertyuiop")

               res.cookie("t",token,{expire: new Date() + 10000})
               const{_id,userName,email,role}=user
               return res.status(201).send(`hello HR sir i hope your doing well...☺😋`)
            }
         })
      
   } catch (error) {
      return err
   }

})

module.exports= Router;
