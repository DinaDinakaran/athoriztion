const express = require("express");
const app= express()
var cors = require('cors')

require("dotenv").config()
const connect =require("./connection/Connection")
const router = require("./Routers/Routers")

//midelware
app.use(express.json())
app.use("/api",router)

app.use(cors())

const port = process.env.PORT

app.listen(port,()=>{
    console.log("connection is established")
    connect()
})