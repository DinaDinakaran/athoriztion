const userdata = require("../schema/schema")
const bcrypt = require("bcrypt")
exports.isAdmin=(req,res,next)=>{
    try {
        let payload=req.body
        
        userdata.findOne({email : payload.email },async (err,user)=>{
            const validateuser =  await bcrypt.compare(payload.password,user.hashedpassword)
            if(err || !user){
                return res.status(400).json({
                    err : "User with that email is not exist"
                })
            }
            if(user.role==="staff" && validateuser){
               return res.status(201).send(`hlo worker i feel you the best work on the company..🥰🤗`)
            }else{
                res.status(400).send("access denied")
            }
            next();
        })
    } catch (error) {
        res.status(500).send("internal server")
        console.log(error)
    }
}