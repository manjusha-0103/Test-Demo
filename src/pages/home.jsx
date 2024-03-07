import React from 'react'
import "./home.css"

import Navbar from '../components/Navbar'
import Flexbox from '../components/Flex'
import Data from '../components/Data'


const Home = () => {



    const handscrolltop =()=>{
        window.scrollTo({
            top:0,
        behavior:"smooth"
    })
    }
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
        <div className='foot-main'>
            <div className='foot'>
                <div className='foot-block1'>
                    <p>Copyright © 2021, All Rights Reserved</p>
                </div>
                <div className='foot-block2'>
                    <p onClick={handscrolltop}>Back To Top</p>
                </div>
            </div>
            
        </div>  
      </div>
    </div>
  )
}

export default Home
