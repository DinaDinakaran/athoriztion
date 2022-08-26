const express = require("express");
const app= express()

require("dotenv").config()
const connect =require("./connection/Connection")
const router = require("./Routers/Routers")

//midelware
app.use(express.json())
app.use("/api",router)
const port = process.env.PORT

app.listen(port,()=>{
    console.log("connection is established")
    connect()
})