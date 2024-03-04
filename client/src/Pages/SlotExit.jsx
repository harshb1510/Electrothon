import React from 'react'
import { Scanner } from '@yudiel/react-qr-scanner';

const SlotExit = () => {
    const qrData = (text) => {
        const slotBooking = JSON.parse(text);
        console.log('Slot Booking:', slotBooking.slotId);
    }
  return (
    <div className='h-[400px] w-[400px] m-auto mt-[200px]'>
    <Scanner
            onResult={(text, result) => qrData(text,result)}
            onError={(error) => console.log(error?.message)}
            />
    </div>
  )
}

export default SlotExit
