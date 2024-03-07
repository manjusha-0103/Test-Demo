import React from 'react'

import './data.css'
import Card from './card'
import Card_data from '../class'


const Data = () => {
  return (
    <div className='data-main'>
        <div className='data-h'>
            <p className='title-h'>Classes</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sunt quam odit cumque ratione, aperiam ipsam officiis consectetur deserunt, minus dolores iusto ipsum fugit quia provident ullam quasi. Expedita, sapiente.</p>
        </div>
        <div className='data-c-main'>
            <Card />
        </div>
    </div>
  )
}

export default Data
