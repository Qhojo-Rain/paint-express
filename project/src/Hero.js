import React from "react";

export default function Hero (){
  return (
    <div className="Paint">
     <h2>Our Paints</h2>
     <div className="paint-img">
      <img src="{`${process.env.PUBLIC_URL}/images/kodak.jpg`}"/>
     </div>
    </div>
  )
}