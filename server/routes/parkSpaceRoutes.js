const express = require ("express");
const {
  addSlot
} = require("../controllers/parkSpaceController.js");

const router = express.Router();

router.route("/addSlot").post(addSlot);

module.exports=router;