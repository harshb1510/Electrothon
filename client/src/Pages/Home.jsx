import React from 'react'
import Hero from '../Components/Hero'
import Stats from '../Components/Stats'
import Business from '../Components/Buisness'
import Navbar from '../Components/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar/>
        <Hero/>
        <Stats/>
        <Business/>
    </div>
  )
}

export default Home
