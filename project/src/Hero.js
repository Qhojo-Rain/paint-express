import React from "react";

export default function Hero (props){
  console.log(props)
  return (
    <div className="Paint">
     <h2 className="paint-text">Our Paints</h2>
     <div className="paint-img">
      {/* Map over the images to repeat only the images */}
      {props.images.map((img, index) => (
          <img key={index} src={img} alt={props.alt} />
        ))}
     </div>
    </div>
  )
}