import React from 'react'
import image from '../assets/card1/card1.jpg'
function Card1() {
  return (
    <div className="card">
        <p className='fs-4 fw-bold'>Upto 70% Off | Clearance store</p>
        <img src={image} alt="" />
        <a href='#' className='mt-3'>See more</a>
    </div>
  )
}

export default Card1