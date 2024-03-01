import React from 'react'
import home_bg from '../assets/news/home_bg.png'

function HomePage() {
  return (
    <>
                    <img className="card-img-top" key={home_bg} src={ home_bg } alt={ home_bg } />
    
    </>
  )
}

export default HomePage