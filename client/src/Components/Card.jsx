import React from 'react';
import { Carousel } from 'flowbite-react';
import axios from 'axios';
import { useState } from 'react';



const Card = ({ id,carName, ownerName, kms, image1, image2, available, availableTill, dailyRate, hourlyRate, location }) => {
 
  const [caravailable, setCarAvailable] = useState(available);
  const user = JSON.parse(localStorage.getItem("user"));

  const handleClick = async(id) => {
    console.log(id);

    const res=await axios.post("http://localhost:8000/listings/removeCar",{id:id},{
      headers:{
        "Content-Type":"application/json",
        "x-auth-token":user.email
      }
    });
    console.log(res.data.available);
    if (res.data.available !== undefined) {
      setCarAvailable(res.data.available);
    }
  
    
    }
  
  
  return (
    <div className="flex justify-center p-3">
      <div className="max-w-lg rounded-lg  border border-gray-200 shadow-lg bg-[#3f757e] text-black">
        <div className="relative w-full h-60">
          <Carousel slideInterval={3000} >
            <img src={image1} alt="Car" className="w-full h-full object-cover" />
            <img src={image2} alt="Car" className="w-full h-full object-cover" />
          </Carousel>
        </div>
        <div className="p-6">
          <h1 className="text-center text-2xl font-bold mb-2">{carName}</h1>
          <hr />
          <div className="flex justify-between pt-3  mb-4">
            <div>
              <p className="text-xl font-bold">{ownerName}</p>
              <p className="text-sm">Rate: {hourlyRate}/hr</p>
              <p className="text-sm">Kms: {kms}</p>
            </div>
            <div>
              <p className="text-sm">Location: {location}</p>
              <p className="text-sm">Day Rate: {dailyRate}/day</p>
              <p className="text-sm">Available Till: {availableTill}</p>
              
              <button onClick={() => handleClick(id)}>{caravailable ? "OFF" : "ON"}</button>
            </div>
          </div>
          {/* You can add additional information here if needed */}
        </div>
      </div>
    </div>
  );
};

export default Card;
