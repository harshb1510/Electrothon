const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/dbConnect");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

const userRoutes = require("./routes/userRoutes");
const listingRoutes = require("./routes/listingRoutes.js");
const parkSpaceRoutes = require("./routes/parkSpaceRoutes.js");

const PORT = process.env.PORT || 8000;
dbConnect();

app.get("/", async (req, res) => {
  res.redirect("http://localhost:5173");
});

app.use("/users", userRoutes);
app.use("/listings", listingRoutes);
app.use("/parking", parkSpaceRoutes);

const server = app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
