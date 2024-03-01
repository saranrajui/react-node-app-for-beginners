import React from 'react'

function PromotionBanner() {
  const marqStyle = {
    position: 'relative',
    top: 30,

  }
  const thisStyle = {
    height: 100,
    width: 100 + '%',
    border: '1px solid #000',
    borderRadius: '5px'
  }
  return (
    <>
    <div className='col-md-12'>
      <section style={thisStyle}>
          <marquee direction='left' loop='' style={marqStyle}>
          <h3>Promotional Banner placeholder</h3>
          </marquee>
      </section>
    </div>
    </>
  )
}

export default PromotionBanner