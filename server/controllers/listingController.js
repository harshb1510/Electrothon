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
    carOwnerId,
    availableTill,
  } = req.body;

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
    carOwnerId,
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

const myCar = async (req, res) => {
  try {
    const carOwnerEmail = req.headers["x-auth-token"];
    const cars = await List.find({ carOwnerEmail });
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const removeCar = async (req, res) => {
  try {
    const id = req.body.id;
    const car = await List.findById(id);
    if (car) {
      if (car.available) {
        car.available = false;
      } else {
        car.available = true;
      }
      await car.save();
      res.status(200).json({ message: "Car updated successfully" ,available: car.available});
    } else {
    }
  
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addBooking = async()=>{
  try{
    
  }catch(err){
    console.log(error)
  }
}

module.exports = {
  listNewCar,
  getAllCar,
  myCar,
  removeCar
};
