import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userExist = await userModel.findOne({ email });

    if (userExist) {
      res.json({ success: false, msg: "user already exists" });
    }

    if (!validator.isEmail(email)) {
      res.json({ success: false, msg: "please enter a valid email" });
    }

    if (password.length < 8) {
      res.json({ success: false, msg: "please enter a strong password" });
    }

    const generateSalt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(password, generateSalt);

    const user = await userModel.create({ name, email, password: hashPass });
    
  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: error.message });
  }
};

const loginUser = (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: error.message });
  }
};

export { registerUser, loginUser };
