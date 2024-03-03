const express = require ("express");
const {
  listNewCar,
  getAllCar,
  myCar,
  removeCar,
} = require("../controllers/listingController.js");

const router = express.Router();

router.route("/listNewCar").post(listNewCar);
router.route("/getAllCar").get(getAllCar);
router.route("/myCar").get(myCar);
router.route("/removeCar").post(removeCar);



module.exports=router;