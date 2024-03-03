import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function Navbar() {
  return (
    <div>   
    <nav class="bg-[#232121]">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
            <Link href="https://flowbite.com" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src={logo} className="h-20 w-[300px]" alt="Flowbite Logo" />
            </Link>
            <div class="flex items-center space-x-6 rtl:space-x-reverse">
            <Link href="#" class="text-md  text-white cursor:pointer hover:underline">Parking</Link>
            <Link href="#" class="text-md  text-white cursor:pointer hover:underline">Rental</Link>
            <Link to='/login' class="text-md  text-white cursor:pointer hover:underline">Login</Link>
            <Link to="/signup" class="text-md  text-white cursor:pointer hover:underline">Signup</Link>
            </div>
        </div>
    </nav>
    
    
      </div>
    
  )
}
