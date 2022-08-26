const express = require("express");
const app= express()
const cors = require("cors")

require("dotenv").config()
const connect =require("./connection/Connection")
const router = require("./Routers/Routers")

//midelware
app.use(express.json())
app.use("/api",router)
app.use(cors({
    origin : "*",
}))

const port = process.env.PORT

app.listen(port,()=>{
    console.log("connection is established")
    connect()
})