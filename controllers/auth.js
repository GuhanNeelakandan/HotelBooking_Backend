const bcrypt = require('bcryptjs')
const User =require('../model/User')
const {createError} =require('../utils/error')
const jwt =require('jsonwebtoken');

module.exports.register= async(req,res,next)=>{
    try {
      const { username, email, password,phone } = req.body;
      const usernameCheck = await User.findOne({ username });
      if (usernameCheck)
        return next(createError(404, "Already Registered"));
      const emailCheck = await User.findOne({ email })
      if (emailCheck)
        return next(createError(404, "Already Registered"));
      const hashpassword = await bcrypt.hash(password, 10);
      const user = await User.create({
        email,
        username,
        password: hashpassword,
        phone,
      });
      delete user.password;
      return res.json({ status: true, user });
    } catch (error) {
        console.log(error)
    }
}

module.exports.login= async(req,res,next)=>{
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) return next(createError(404, "User not found!"));
        //comparing the user password
        const isPasswordCorrect = await bcrypt.compare(
          req.body.password,
          user.password
        );
        if (!isPasswordCorrect)
          return next(createError(400, "Wrong password or username!"));
        //token
        const token = jwt.sign({id:user._id,isAdmin:user.isAdmin},"myhotelapp",{expiresIn:'1hr'})
        //hiding password and otherdetails
        const { password, isAdmin, ...otherDetails } = user._doc;
        res.status(200).json({details:{...otherDetails},isAdmin,token})
      } catch (err) {
        next(err);
      }
}