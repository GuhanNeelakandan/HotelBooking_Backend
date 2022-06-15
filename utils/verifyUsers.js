const {verifyToken} =require('./verifyToken')

module.exports.verifyUser=(req,res,next)=>{
    verifyToken(req, res, next, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
          next();
        } else {
          return next(createError(403, "You are not authorized!"));
        }
      });
}

module.exports.verifyAdmin = (req, res, next) => {
    verifyToken(req, res, next, () => {
      if (req.user.isAdmin) {
        next();
      } else {
        return next(createError(403, "You are not authorized!"));
      }
    });
  };