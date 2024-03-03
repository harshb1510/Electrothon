import { useEffect, useState } from "react";
import Card from "../Components/Card";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const CarRent = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    getCars();
  }, []);

  const getCars = async () => {
    try {
      const res = await fetch("http://localhost:8000/listings/getAllCar");
      const data = await res.json();
      setCars(data);
    } catch (error) {
      console.error("Error fetching cars:", error);
    }
  };

  return (
    <>
    <Navbar/>
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-12">
      {cars.map((car) => (
        <Card
        key={car._id}
        carName={car.carName}
        ownerName={car.carOwner}
        dailyRate={car.dailyRate}
        hourlyRate={car.hourlyRate}
        kmsTraveled={car.kms}
        image1={car.image1} 
        image2={car.image2} 
        location={car.location}
        available={car.available}
        availableTill={car.availableTill}
        />
        ))}
    </div>
    <Footer/>
        </>
  );
};

export default CarRent;
