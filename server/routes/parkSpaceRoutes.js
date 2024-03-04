const express = require ("express");
const {
  addSlot,
  allSlot,
} = require("../controllers/parkSpaceController.js");

const router = express.Router();

router.route("/addSlot").post(addSlot);
router.route("/allSlot").get(allSlot);

module.exports=router;