import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
  <div>   
<nav class="bg-green-400 border-gray-200">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <Link href="https://flowbite.com" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="logo.png" className="h-8 w-64" alt="Flowbite Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
        </Link>
        <div class="flex items-center space-x-6 rtl:space-x-reverse">
        <a href="#" class="text-sm  text-black cursor:pointer hover:underline">Parking</a>
        <a href="#" class="text-sm  text-black cursor:pointer hover:underline">Rental</a>
        <a href="#" class="text-sm  text-black cursor:pointer hover:underline">Login</a>
        <a href="#" class="text-sm  text-black cursor:pointer hover:underline">Signup</a>
        </div>
    </div>
</nav>


  </div>
    
  )
}
