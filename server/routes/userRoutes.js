const express = require ("express");
const {
  loginUser,
  registerUser,
  updatePassword,
  updateProfile,
  getUser,
} = require("../controllers/userController.js");

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/getUser").get(getUser);
router.route("/updatePassword").post(updatePassword);
router.route("/updateProfile").post(updateProfile);

module.exports=router;