import axios from "axios";
import React, { useEffect, useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';

export default function RentForm() {
  const [carName, setCarName] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [location, setLocation] = useState("");
  const [kms, setKms] = useState("");
const [hourlyRate, setHourlyRate] = useState("");
const [dailyRate, setDailyRate] = useState("");
const [availableTill, setAvailableTill] = useState("");
  const [url1, setUrl1] = useState(null);
    const [url2, setUrl2] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState('00:00');




    const handleTimeChange = time => {
        setSelectedTime(time);
      };
  const handleFirstUpload = async (e) => {
    const file = e.target.files[0];
    setImage1(file); 
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "uploadImage");
    data.append("cloud_name", "du9foikdt");

    try {
      const res = await axios.post('https://api.cloudinary.com/v1_1/du9foikdt/image/upload', data);
      const cloudData = await res.data;
      setUrl1(cloudData.url); 
      console.log(cloudData.url);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSecondUpload = async (e) => {
    const file = e.target.files[0];
    setImage2(file); 
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "uploadImage");
    data.append("cloud_name", "du9foikdt");

    try {
      const res = await axios.post('https://api.cloudinary.com/v1_1/du9foikdt/image/upload', data);
      const cloudData = await res.data;
      setUrl2(cloudData.url); 
      console.log(cloudData.url);
    } catch (error) {
      console.log(error);
    }
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Image uploaded",url1);
    console.log("Image uploaded",url2);
    console.log("Car Name",availableTill);


  };

  
  
  



  return (
    <div className="mt-24">
      <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="px-6 py-8">
          <div className="flex justify-center mx-auto">
            <img
              className="w-auto h-7 sm:h-8"
              src="https://merakiui.com/images/logo.svg"
              alt=""
            />
          </div>

          <p className="mt-1 text-center text-gray-500 dark:text-gray-400">
            Rental Entry
          </p>

          <form onSubmit={handleSubmit}>
            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-white placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                placeholder="Car Name"
                aria-label="Car Name"
                required
                onChange={(e) => setCarName(e.target.value)}
              />
            </div>

            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-white bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Front image of car"
                type="file"
                aria-label="Upload Image"
                multiple
                required
                onChange={handleFirstUpload}
              />
            </div>
            
            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-white bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Front image of car"
                type="file"
                aria-label="Upload Image"
                multiple
                required
                onChange={handleSecondUpload}
              />
            </div>

            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-white placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                placeholder="Location"
                aria-label="Location"
                required
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-white placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="number"
                placeholder="Total KMS"
                aria-label="Total KMS"
                required
                onChange={(e) => setKms(e.target.value)}
              />
            </div>
            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-white placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="number"
                placeholder="Hourly Rate"
                aria-label="Price Per Hour"
                required
                onChange={(e) => setHourlyRate(e.target.value)}
              />
            </div>

            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-white placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="number"
                placeholder="Daily Rate"
                aria-label="Price Per Day"
                required
                onChange={(e) => setDailyRate(e.target.value)}
              />
            </div>
            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-white placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="datetime-local"
                placeholder="Available Till"
                aria-label="Available Till"
                required
                onChange={(e) => setAvailableTill(e.target.value)}
              />
            </div>
           

          
            <div className="flex items-center justify-center mt-4">
              <button type="submit" className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-cyan-500 rounded-lg hover:bg-cyan-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Sign In
              </button>
            </div>
          </form>
          
        </div>
      </div>
    </div>
  );
}
