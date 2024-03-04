import React from 'react'
import { useEffect } from 'react'

const Slot = () => {


useEffect(() => {
    getSlot();
}, []);

    const getSlot = async () => {
        const slot = await fetch('http://localhost:8000/parking/allSlot', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await slot.json();
        console.log(data);
    }

  return (
    <div>Slot</div>
  )
}

export default Slot