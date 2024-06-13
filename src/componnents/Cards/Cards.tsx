import React from 'react'
import './Cards.css'
const Cards = ({title,num,color,type,image}:any) => {
  return (
    <div className='MA_card' style={{backgroundColor: color}}>
        <div className='box1'>
          <p>{title}</p>
          <img src={image} alt="category" className='card_img' />
        </div>

        <div className='box2' >
          <p>
            {num}
          </p>
          <label>{type}</label>
        </div>
    </div>
  )
}

export default Cards