import { useEffect } from "react";
import { useState } from "react";

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
    console.log(data);
  };

  return (
    <>
      <h1>okay</h1>
    </>
  );
};

export default MyCar;
