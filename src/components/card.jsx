import React from 'react'
import image from '../images/image.jpg'
import './card.css'
import { Link, useNavigate } from 'react-router-dom'

const Card = (props) => {
    const navigate = useNavigate()
    console.log(props)

  return (
    <div className='card-main'>
        <div className='cd-1'>
            <img src={image} alt={props.props.Name}/>
        </div>
        <div className='cd-2'>
            <p className='card-title'>{props.props.Name}</p>
            <p className='short'>{props.props.ShortDesc}</p>
            <div className='card-bt'>
                <Link to= {props.props.ID}>
                <button>View</button>
                </Link>
            </div>
        </div>
      
    </div>
  )
}

export default Card
