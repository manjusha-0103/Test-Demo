import React from 'react'

import './data.css'
import Card from './card'
import Card_data from '../class'

import { Link } from 'react-router-dom'


const Data = () => {
  return (
    <div className='data-main'>
        <div className='data-h'>
            <p className='title-h'>Classes</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sunt quam odit cumque ratione, aperiam ipsam officiis consectetur deserunt, minus dolores iusto ipsum fugit quia provident ullam quasi. Expedita, sapiente.</p>
        </div>
        <div className='data-c-main'>
            { Card_data.map((item, id)=>{
                return (
                    <Card key ={id} props ={item}/>
            )})}
        </div>
    </div>
  )
}

export default Data
