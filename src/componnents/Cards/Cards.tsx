import React from 'react'
import './Cards.css'
const Cards = ({title,num,color,type,image}:any) => {
  return (
    <div className='MA_card' style={{backgroundColor: color}}>
        <div className='box1'>
          <img src={image}  alt="category" className='card_img' />
          <p>{title}</p>
        </div>

        <div className='box2' >
          <label>{type}</label>
          <p>
            {num}
          </p>
          
        </div>
    </div>
  )
}

export default Cards


// import React from 'react'
// import './Cards.css'
// const Cards = ({title,num,color,type,image}:any) => {
//   return (
//     <div className='MA_card' style={{backgroundColor: color}}>
//         <div className='box1'>
//           <p>{title}</p>
//           <img src={image} alt="category" className='card_img' />
//         </div>

//         <div className='box2' >
//           <p>
//             {num}
//           </p>
//           <label>{type}</label>
//         </div>
//     </div>
//   )
// }

// export default Cards