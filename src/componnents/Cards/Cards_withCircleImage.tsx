import React from 'react'
import './Cards_withCircleImage.css'
import brand1 from './../../assets/images/MainPage/brand_01.png'
import brand2 from './../../assets/images/MainPage/brand_02.png'
import brand3 from './../../assets/images/MainPage/brand03.png'
import brand4 from './../../assets/images/MainPage/brand04.png'
const Cards_withCircleImage = ({title,color,image}:any) => {
  return (
    <div>
        <div className='MA_cards_withCircleImage' style={{backgroundColor: color}}>
        <div className='box1'>
          <p>{title}</p> 
          <img src={image} alt="category" className='card_img' />
        </div>

        <div className='box2' >
          <img src={brand4} alt="brand4" className='all'  />
          <img src={brand3} alt="brand3" className='all' style={{right:40}}/>
          <img src={brand2} alt="brand2"  className='all' style={{right:80}}  />
          <img src={brand1} alt="brand1"  className='all' style={{right:120}} />
          <div className='circle all' style={{right:160}}    ><span>+5</span></div>
        </div>
    </div>
    </div>
  )
}

export default Cards_withCircleImage