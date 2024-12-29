import React from "react";


export default function main() {
  return (
    <div className="container">
      <img
        src={`${process.env.PUBLIC_URL}/images/b.webp`}
        alt="Paint Express"
        className='hero'
      />
      <div className="overlay"></div>
      <div className="text">Quality paints<br /> delivered</div>
      <div className="text-2">Find the perfect paint easily</div>
        {/* WhatsApp button */}
        <div className="button">
      <a
        href="https://wa.me/+233243752511?text=Hi%20Paint%20Express!%20I%20would%20like%20to%20know%20more%20about%20your%20products."
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
      >
        <img
          src={`${process.env.PUBLIC_URL}/images/whtt.webp`}
          alt="WhatsApp"
          className="whatsapp-icon"
        />
        Chat with us
      </a>
      </div>
    </div>
  );
}    
    