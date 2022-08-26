const userdata = require("../schema/schema")
exports.isAdmin=(req,res,next)=>{
    try {
        let payload=req.body
        userdata.findOne({email : payload.email },async (err,user)=>{
            if(err || !user){
                return res.status(400).json({
                    err : "User with that email is not exist"
                })
            }
            if(user.role==="staff"){
               return res.status(500).json({
                    err : "admin access denied"
                })
            }
            next();
        })
    } catch (error) {
        res.status(500).send("internal server")
    }
}