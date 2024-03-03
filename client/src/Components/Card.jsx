import React from 'react';
import { Carousel } from 'flowbite-react';
import BookingModal from './BookingModal';

const Card = ({ carName, ownerName, kmsTravelled, image1, image2, available, availableTill, dailyRate, hourlyRate, location }) => {
  return (
    <div className="flex justify-center p-3">
      <div className="max-w-lg rounded-lg  border border-gray-200 shadow-lg bg-[#3f757e] text-black">
        <div className="relative w-full h-60">
          <Carousel slideInterval={3000} >
            <img src={image1} alt="Car" className="w-full h-full object-cover" />
            <img src={image2} alt="Car" className="w-full h-full object-cover" />
          </Carousel>
        </div>
        <div className="p-6 ">
          <h1 className="text-center text-2xl font-bold mb-2">{carName}</h1>
          <hr />
          <div className="flex justify-between pt-3 mb-4">
            <div>
              <p className="text-xl font-bold">{ownerName}</p>
              <p className="text-sm">Rate: {hourlyRate}/hr</p>
              <p className="text-sm">Kms: {kmsTravelled}</p>
            </div>
            <div>
              <p className="text-sm">Location: {location}</p>
              <p className="text-sm">Day Rate: {dailyRate}/day</p>
              <p className="text-sm">Available Till: {availableTill}</p>
            </div>
          </div>
         <BookingModal availableTill={availableTill}/>
        </div>
      </div>
    </div>
  );
};

export default Card;
