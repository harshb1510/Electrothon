import React, { useState, useEffect } from 'react';
import { Carousel } from 'flowbite-react';
const Card = ({ carName, ownerName, rentPrice, kmsTravelled, image1, image2 }) => {
  

  return (
    <div className="flex justify-center">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="relative h-64">
          {/* Carousel */}
          <div className="carousel w-full h-full overflow-hidden relative">
          <Carousel slideInterval={5000}>
        <img src={image1} alt="..." />
        <img src={image2} alt="..." />
      </Carousel>
          </div>
        </div>
        <h1 className='text-center font-bold text-2xl'>{carName}</h1>
        <div className="flex px-6 py-4">

          <div className="mb-2">
            <ul>
                <li className='max-w-[120px] text-right'>Owner: {ownerName}</li>
                <li>Price: {rentPrice}</li>
                <li>Kms: {kmsTravelled}</li>
            </ul>
          </div>
          <div>
            <ul>
                <li>Location: </li>
                <li>Rating: </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
