const { hashpassword, compare } = require("../middleware/helper");

const User = require("../models/usermodel");
const bcrypt = require("bcryptjs");

exports.register = async (req, res) => {
  const { name, email, password, phone, address, secretanswer } = req.body;
  if (!name || !email || !password || !phone || !address || !secretanswer) {
    res.status(400).send("all fields compulsory");
  }
  try {
    const emailcheck = await User.findOne({ email: email });
    if (emailcheck) {
      res.status(400).send("this email already exist");
    } else {
      const hash  = await hashpassword(password);

      const newuser = new User({ name, email, password: hash, phone, address, secretanswer });
      const usersave = await newuser.save();
      res.status(200).send(usersave);
    }
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).send("filled all your field");
  }
  try {
    const user = await User.findOne({ email: email });
    if (user) {
      const passwordcheck = await compare(password, user.password);
      if (passwordcheck) {
        const token = await user.generatetoken();
        console.log(token);
        res.status(200).send({ token, user });
      }
      else{
        return res.status(400).send({messsage: "invalid password"})
      }
    } else {
      res.status(400).send("this user does not exist");
    }
  } catch (error) {
    res.status(400).send(error);
  }
};



 
exports.forgotpassword =async (req,res)=>{
  try{
    const { email, secretanswer, newpassword } = req.body;
    if (!email || !secretanswer || !newpassword) {
      res.status(400).send("filled all your field");
    }
    const user = await User.findOne({ email: email, secretanswer: secretanswer });
    if (user) {
      const hash = hashpassword(newpassword);
      const updatepassword = await User.findByIdAndUpdate(user._id, {password:hash},{new:true})
      res.status(200).send({message:"password reset successfully!"});
    } else{
      return res.status(400).send({messsage: "user doesn't exit, pls signup"})
    }
  }
  catch(error){
    res.status(400).send({message:"forget password failed", error});
  }
}