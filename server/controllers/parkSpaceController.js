const Slot = require("../models/parkSpaceModel");

const addSlot = async (req, res) => {
  const { slotNo } = req.body;
  const slot = await Slot.create({
    slotNo,
  });
  if (slot) {
    res.status(201).json({
      Success: "Slot Added Successfully!",
    });
  } else {
    res.status(400);
  }
};

module.exports = {
  addSlot,
};
