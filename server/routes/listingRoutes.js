const express = require ("express");
const {
  listNewCar,
} = require("../controllers/listingController.js");

const router = express.Router();

router.route("/listNewCar").post(listNewCar);


module.exports=router;