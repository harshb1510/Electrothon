import { useEffect } from "react";
import { useState } from "react";
import Navbar from "../Components/Navbar";
import Card from "../Components/Card";

const MyCar = () => {
  const [cars, setCars] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    getCars();
  }, []);

  const getCars = async () => {
    const res = await fetch("http://localhost:8000/listings/myCar", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": user.email,
      },
    });
    const data = await res.json();
    setCars(data);
    console.log("hello",data);
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
         kms={car.kms}
         image1={car.image1} 
         image2={car.image2} 
         location={car.location}
         available={car.available}
         availableTill={car.availableTill}
         id={car._id}
         
         />
         

      ))}


</div>

    </>
  );
};

export default MyCar;
