import React from 'react'
import rainy from '../../public/rainy.png'

export default function SemaineCard() {
  return (
    <div className='semaine-card'>
        <h3 className='day-name'>
            days
        </h3>
        <img src={rainy} alt="weather icon" className='weather-icon' />
        <p className='weather-desc'>
            rainy
        </p>
        <div className='temps-matin-soir'>
            <p className='temp-high'>18°</p>
            <p className='temp-low'>15°</p> 
        </div>
    </div>
  )
}
