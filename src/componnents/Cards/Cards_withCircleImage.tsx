import './Cards_withCircleImage.css'
import brand1 from './../../assets/images/MainPage/brand_01.png'
import brand2 from './../../assets/images/MainPage/brand_02.png'
import brand3 from './../../assets/images/MainPage/brand03.png'
import brand4 from './../../assets/images/MainPage/brand04.png'
const Cards_withCircleImage = ({title,color,image}:any) => {
  return (
    <div>
        <div className='cards_withCircleImage' style={{backgroundColor: color}}>
        <div className='box1'>
          <p>{title}</p> 
          <img src={image} alt="category" className='card_img' />
        </div>

        <div className='box2' >
          <img src={brand1} alt="brand1"  />
          <img src={brand2} alt="brand1"  style={{marginLeft: '-30px',}} />
          <img src={brand3} alt="brand1"  style={{marginLeft: '-25px',}} />
          <img src={brand4} alt="brand1"  style={{marginLeft: '-25px',}} />
          <div className='circle'         style={{marginLeft: '-25px',}} ><span>+5</span></div>
        </div>
    </div>
    </div>
  )
}

export default Cards_withCircleImage