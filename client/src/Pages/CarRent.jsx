import { useEffect, useState } from "react";
import Card from "../Components/Card";

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
      console.log(data);
    } catch (error) {
      console.error("Error fetching cars:", error);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {cars.map((car) => (
        <Card
          key={car._id}
          carName={car.carName}
          ownerName={car.carOwner}
          rentPrice={car.dailyRate}
          kmsTraveled={car.kms}
          image1={car.image1} 
          image2={car.image2} 
        />
      ))}
    </div>
  );
};

export default CarRent;
