const User = require("../models/userModel.js");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateToken = (user) => {
  const payload = { id: user._id };
  const expiresInDuration = "1d";
  return jwt.sign(payload, process.env.SECRET_KEY, {
    expiresIn: expiresInDuration,
  });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    const token = generateToken(user);
    res.cookie("token", token);
    res.json({
      _id: user._id,
      userName: user.userName,
      role: user.role,
      token,
    });
  } else {
    res.status(401).json("Invalid Email or Password");
  }
};

const registerUser = async (req, res) => {
  const { userName, email, password } = req.body.formData;
  const { role } = req.body;
  const userExists = await User.findOne({ $or: [{ email }, { userName }] });
  if (userExists) {
    res.status(404).json({ messsage: "Username or Email Already Exist" });
  } else {
    const user = await User.create({ userName, email, password, role });
    if (user) {
      const token = generateToken(user);
      console.log(token);
      res.cookie("token", token);
      res.status(201).json({
        _id: user._id,
        userName: user.userName,
        role: user.role,
        token,
      });
    } else {
      res.status(400);
    }
  }
};

const updatePassword = async (req, res) => {
  const id = req.body.id;
  const { oldPassword, confirmnewPassword } = req.body.formData;
  try {
    const user = await User.findById(id);
    if (!user) {
      console.log("user not found");
      return res.status(404).json({ message: "User not found" });
    }
    const isPasswordValid = await user.matchPassword(oldPassword);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid old password" });
    }
    user.password = confirmnewPassword;
    await user.save();
    res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateProfile = async (req, res) => {
  try {
    const userId = req.user._id;
    if (userId) {
      const body = req.body.form;
      const updateResult = await User.updateOne({ _id: userId }, body);
      if (updateResult.modifiedCount > 0) {
        return res.status(200).send({ msg: "Record Updated...!" });
      } else {
        return res
          .status(404)
          .send({ error: "No matching record found or no changes made." });
      }
    } else {
      return res.status(401).send({ error: "User Not Found...!" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send({ error });
  }
};

module.exports = {
  loginUser,
  registerUser,
  updatePassword,
  updateProfile,
};
