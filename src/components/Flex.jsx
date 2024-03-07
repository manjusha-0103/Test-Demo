import React from 'react'

import './flex.css'
import { Link } from 'react-router-dom'

const Flexbox = () => {
  return (
    <div className='f-box'>
        <div className='cont-box'>
            <p className='title'>Title</p> 
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto autem dolor, mollitia exercitationem harum quos eveniet iure praesentium saepe provident fugit a delectus veniam consequuntur facilis iste sunt, laborum earum.</p>
            <div className='flex-bt'>
                <button>Read More</button>
            </div>
        </div>
    </div>
  )
}

export default Flexbox
