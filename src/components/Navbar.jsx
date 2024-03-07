import React from 'react'
import './nav.css'

import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='nav-main'>
        <div className='nave-block'>
            <div className='flex1'>
                <div>
                    <p>Title</p>
                </div>
            </div>
            <div className='flex2'>
                <div className='nave-e'>
                    <Link to ="/">Home</Link>
                </div>
                <div className='nave-e'>
                    <Link  to ="/about">About</Link>
                </div>
                <div className='nave-e'>
                    <Link  to ="/blog">Blog</Link>
                </div>
                <div className='nave-e'>
                    <Link  to ="/contact">Contact</Link>
                </div>

                <div className='nav-bt'> 
                    <button>Button</button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Navbar
