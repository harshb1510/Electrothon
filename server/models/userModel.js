const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    default: "",
  },
  lastName: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  lender: {
    type: Boolean,
    default: false,
  },
  pic: {
    type: String,
    default:
      "https://res.cloudinary.com/dlnkiwqfa/image/upload/v1700890727/gdigsqfldk4vliwgzfhm.svg",
  },
  renter: {
    type: Boolean,
    default: false,
  },
  caronrent: {
    type: Boolean,
    default: false,
  },
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

module.exports = new mongoose.model("userDatas", userSchema);
