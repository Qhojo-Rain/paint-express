import React from "react";


export default function main() {
  return (
    <div className="container">
      <img
        src={`${process.env.PUBLIC_URL}/images/b.jpeg`}
        alt="Paint Express"
        className='hero'
      />
      <div className="overlay"></div>
      <div className="text">Quality paints<br /> delivered</div>
      <div className="text-2">Find the perfect paint easily</div>
    </div>
  )
}