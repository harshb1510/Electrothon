const express = require ("express");
const {
  loginUser,
  registerUser,
  updatePassword,
  updateProfile,
} = require("../controllers/userController.js");

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/updatePassword").post(updatePassword);
router.route("/updateProfile").post(updateProfile);

module.exports=router;