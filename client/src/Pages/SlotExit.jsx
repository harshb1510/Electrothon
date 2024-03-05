import React from "react";
import { Scanner } from "@yudiel/react-qr-scanner";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SlotExit = () => {
  const history = useNavigate();

  const [payableAmount, setPayableAmount] = React.useState(0);

  React.useEffect(() => {
    const loadRazorpayScript = async () => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      script.onload = () => {};
      document.body.appendChild(script);
    };

    loadRazorpayScript();
  }, []);

  const initPayment = (data) => {
    const options = {
      key: "rzp_test_rrpFDSyVYUuEE4",
      amount: data.amount,
      currency: data.currency,
      order_id: data.orderDetails.razorpayOrderId,
      handler: async (response) => {
        try {
          const verifyUrl = `http://localhost:8000/listings/verify`;

          const verifyData = {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          };
          await axios.post(verifyUrl, verifyData);
          history("/admin");
        } catch (err) {
          console.log(err);
        }
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const handleProceed = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/listings/bookings/addBooking",
        {
          rentPrice: data,
        }
      );
      console.log(response.data);
      initPayment(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const qrData = async (text) => {
    const slotBooking = JSON.parse(text);
    console.log(slotBooking.slotId);
    const slotExit = await fetch("http://localhost:8000/parking/slotExit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: slotBooking.slotId,
      }),
    });
    const data = await slotExit.json();
    console.log(data.payableAmount);
    setPayableAmount(data.payableAmount);
    await handleProceed(data.payableAmount);
  };
  return (
    <div className="h-[400px] w-[400px] m-auto mt-[200px]">
      <Scanner
        onResult={(text) => qrData(text)}
        onError={(error) => console.log(error?.message)}
      />
    </div>
  );
};

export default SlotExit;
