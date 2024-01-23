import React from 'react'
import '../sass/Card.scss'
const Card = () => {
  return (
    <div className="card">
        <p className='card_name'>Esnorlax</p>
        <div className='card_circle'></div>
        <img className='card_img' src='' alt='pokemon img'></img>
    </div>
  )
}

export { Card }
