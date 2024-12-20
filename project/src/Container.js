import React, { useEffect, useRef } from 'react';


export default function Container() {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          containerRef.current.classList.add('animate');
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the container is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div className='container-2' ref={containerRef}>
      <div className='left-side '>
        <h4>Express your colors</h4>
        <h1 className='head'>Transform Your Walls with Vibrant, Washable Paints!</h1>
        <p className='word'>At Paint Express, we believe every wall deserves a splash of brilliance.
          Based in Accra, GH, we specialize in premium, washable emulsion paints that breathe new life
          into your space. Our passionate team helps you find the perfect color to match your unique style.
          With our fast and reliable delivery, your dream colors will be at your doorstep in no time!
         Choose Paint Express — where bold colors meet ultimate convenience!</p>

        <p> Get in Touch Today!</p>
      </div>
      <img 
      src={`${process.env.PUBLIC_URL}/images/Cont.jpeg`} 
      alt="Paint Express" 
      className='cont' />
    </div>
  )
}
