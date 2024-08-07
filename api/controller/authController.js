const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

// handle errors
const handleErrors = (err) => {
  // console.log(err.message, err.code);
  let errors = { email: '', password: '',username: '' }; 

  // incorrect email
  
  if (err.message === 'incorrect email') {
    errors.email = 'That email is not registered';
  }

  // incorrect password
  if (err.message === 'incorrect password') {
    errors.password = 'That password is incorrect';
  }

 
   if (err.code === 11000) {
    errors.email = 'that email or username is already registered';
    return errors;
  }

  

  // duplicate email error  
  

 
  // validation errors
  if (err.message.includes('user validation failed')) {
    // console.log(err);
    Object.values(err.errors).forEach(({ properties }) => {
      // console.log(val);
      // console.log(properties);
      errors[properties.path] = properties.message;
    });
  }

  return errors;
}

// create json web token
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN, {
    expiresIn: maxAge
  });
};

let options = {
  maxAge: 1000 * 60 * 15, // expire after 15 minutes
  httpOnly: true, // Cookie will not be exposed to client side code
  sameSite: "none", // If client and server origins are different
  secure: true // use with HTTPS only
}


module.exports.signup_post = async (req, res) => {
  
  
  try {
    const { email, password ,username} = req.body;
    console.log(email,password,username)
    const user = await User.create({ email, password,username });
    
   
    const token = createToken(user._id);
    res.cookie('jwt', token,options );
    res.status(201).json({ user: user._id });
  }
  catch(err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
 
}
 
module.exports.login_post = async (req, res) => {
  const { email, password } = req.body;
 
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
   res.cookie('jwt-token', token,options );
   
   
    res.status(200).json({ user: user._id });
  } 
  catch (err) {
    const errors = handleErrors(err); 
    res.status(400).json({ errors });
  }

} 
  
module.exports.User_profile = async(req,res,next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.TOKEN, async (err, decodedToken) => {
         if(err){
          res.locals.user = null; 
        next();
         }else {
          let user = await User.findById(decodedToken.id).select("-password");
          res.status(200).json(user)
       
    } 
  }
)}
}
 
module.exports.logout_get = (req, res) => {
  res.cookie('jwt', '', { maxAge: 1 });
  
} 