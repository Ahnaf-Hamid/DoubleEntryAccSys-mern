import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const tokenAssign = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET_KEY)
}

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userExist = await userModel.findOne({ email });

    if (userExist) {
      return res.json({ success: false, msg: "user already exists" });
    }

    if (!validator.isEmail(email)) {
      return res.json({ success: false, msg: "please enter a valid email" });
    }

    if (password.length < 8) {
      return res.json({ success: false, msg: "please enter a strong password" });
    }

    const generateSalt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(password, generateSalt);

    const user = await userModel.create({ name, email, password: hashPass });

    const token = tokenAssign(user._id)

    res.json({success:true,token})
  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const {email,password} = req.body

    const userExist = await userModel.findOne({email})

    if(!userExist){
        return res.json({success:false,msg:'User do not exist'})
    }

    const comparePass = await bcrypt.compare(password,userExist.password)

    if(comparePass){
        const token = tokenAssign(userExist._id)
        res.json({success:true,token})
    } else {
        res.json({success:false,msg:"passwords dont match"})
    }

  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: error.message });
  }
};

export { registerUser, loginUser };
