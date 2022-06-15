const jwt =require('jsonwebtoken')
const {createError}=require('./error')

module.exports.verifyToken=(req,res,next)=>{
    const token =req.headers.authorization;
    if(!token){
        return next(createError(401,"You are not authenticated!"))
    }
    jwt.verify(token,"myhotelapp",(err,user)=>{
        if(err)
        return next(createError(401,"Token is not valid!"))
        req.user=user;
        next()
    })
}