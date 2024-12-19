import React from 'react'

export default function Container() {
  return (
    <div className='container'>
      <div className='left-side'>
        <h4>Express your colors</h4>
        <h1>Transform Your Walls with Vibrant, Washable Paints!</h1>
        <p className='word'>At Paint Express, we believe every wall deserves a splash of brilliance.
          Based in Accra, GH, we specialize in premium, washable emulsion paints that breathe new life
          into your space. Our passionate team helps you find the perfect color to match your unique style.
          With our fast and reliable delivery, your dream colors will be at your doorstep in no time!
         Choose Paint Express — where bold colors meet ultimate convenience!</p>

        <p> Get in Touch Today!</p>
      </div>
      <img src={`${process.env.PUBLIC_URL}/images/Cont.jpeg`} alt="Paint Express" className='cont' />
    </div>
  )
}
