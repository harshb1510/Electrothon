const List = require("../models/listingModel.js");

const listNewCar = async (req, res) => {
  const {
    carName,
    image1,
    image2,
    location,
    kms,
    hourlyRate,
    dailyRate,
    available,
    carOwner,
    carOwnerEmail,
    availableTill,
  } = req.body;

  console.log(req.body);

  const car = await List.create({
    carName,
    image1,
    image2,
    location,
    kms,
    hourlyRate,
    dailyRate,
    available,
    carOwner,
    carOwnerEmail,
    availableTill,
  });

  if (car) {
    res.status(201).json({
      Success: "Car Listed Successfully!",
    });
  } else {
    res.status(400);
  }
};

const getAllCar = async (req, res) => {
  try {
    const cars = await List.find({ available: true });
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  listNewCar,
  getAllCar,
};
