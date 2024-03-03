const express = require ("express");
const {
  listNewCar,
  getAllCar,
} = require("../controllers/listingController.js");

const router = express.Router();

router.route("/listNewCar").post(listNewCar);
router.route("/getAllCar").get(getAllCar);


module.exports=router;