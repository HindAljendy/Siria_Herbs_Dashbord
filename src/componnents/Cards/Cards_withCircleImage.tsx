import React from 'react'
import './Cards_withCircleImage.css'

const Cards_withCircleImage = ({
  title,
  color,
  image,
  num,
  brandImages,
}: {
  title: string
  color: string
  image: string
  num: number
  brandImages: string[]
}) => {
  return (
    <div>
      <div className="MA_cards_withCircleImage" style={{ backgroundColor: color }}>
        <div className="box1">
          <p>{title}</p>
          <img src={image} alt="category" className="card_img" />
        </div>

        <div className="box2">
          {brandImages.map((brandImage, index: number) => (
            <img
              key={index}
              src={brandImage}
              alt={`brand${index + 1}`}
              className="all"
              style={{ right: index * 40 }}
            />
          ))}
          <div className="circle all" style={{ right: brandImages.length * 40 }}>
            <span>+{num}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards_withCircleImage
