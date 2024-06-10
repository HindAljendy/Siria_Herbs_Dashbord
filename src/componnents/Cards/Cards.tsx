import './Cards.css'
const Cards = ({title,num,color,image}:any) => {
  return (
    <div className='card' style={{backgroundColor: color}}>
        <div className='box1'>
          <p>{title}</p>
          <img src={image} alt="category" className='card_img' />
        </div>

        <div className='box2' >
          <p>
            {num}
          </p>
          <label>{title}</label>
        </div>
    </div>
  )
}

export default Cards