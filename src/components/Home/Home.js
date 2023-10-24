import React from 'react'
import './Home.css'
import {Link} from "react-router-dom"

function Home() {
  return (
    <div className='home-bg'>
      <h1 className='logo-head'>Book My Seat</h1>
        <h1>Welcome Back!</h1>
        <p>To continue seat booking. Please click on below button! </p>
        <div>
          <Link to='/bookingpage'><button className='get-started'>Get started</button></Link>
        </div>   
    </div>
  )
}

export default Home