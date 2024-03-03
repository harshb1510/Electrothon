import { useEffect } from "react";
import { useState } from "react";

const CarRent = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    getCars();
  }, []);

  const getCars = async () => {
    const res = await fetch("http://localhost:5000/listings/getAllCar");
    const data = await res.json();
    setCars(data);
    console.log(data);
  };

  return (
    <>
      <h1>okay</h1>
    </>
  );
};

export default CarRent;
