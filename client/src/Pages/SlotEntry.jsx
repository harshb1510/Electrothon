import React from "react";
import { Scanner } from "@yudiel/react-qr-scanner";
import { useNavigate } from "react-router-dom";

const SlotEntry = () => {
  const history = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const redirect = async () => {
    history("/admin");
  }

  const qrData = async (text) => {
    const slotBooking = JSON.parse(text);
    const slotEntry = await fetch("http://localhost:8000/parking/slotEntry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        slotId: slotBooking.slotId,
        carOwner: user._id,
      }),
    });
    const data = await slotEntry.json();
    console.log(data);
    await redirect();
  };
  return (
    <div className="h-[400px] w-[400px] m-auto mt-[200px]">
      <Scanner
        onResult={(text, result) => qrData(text , result)}
        onError={(error) => console.log(error?.message)}
      />
    </div>
  );
};

export default SlotEntry;
