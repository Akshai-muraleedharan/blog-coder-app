const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  
 
  // check json web token exists & is verified
  if (token) {
    jwt.verify(token, process.env.TOKEN, (err,) => {
      if (err) {
       res.status(404).json("no token")
      } else {
        next();
      }
    });
  } else {   
    res.redirect('/login');
  }
};  

// check current user
const checkUser = (req, res, next) => {  
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.TOKEN, async (err, decodedToken) => {
      if (err) {
        res.locals.user = null; 
        next();
      } else {
        let user = await User.findById(decodedToken.id);
        res.locals.user = user;
     
        
        next(); 
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};


module.exports = { requireAuth, checkUser };