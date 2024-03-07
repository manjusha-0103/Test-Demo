import React from 'react'
import "./home.css"

import Navbar from '../components/Navbar'
import Flexbox from '../components/Flex'
import Data from '../components/Data'


const Home = () => {
  return (
    <div className='main'>
      <div className='d-main'>

            <Navbar/>
        <div className='flex-f'>
            <Flexbox/>
        </div>

        <div className='data-main'>
            <Data/>
        </div>
            
      </div>
    </div>
  )
}

export default Home
