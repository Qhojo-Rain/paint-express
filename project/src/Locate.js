import React from "react";

export default function Locate() {
  return (
  <div>
    <h1 className="locate-us">Locate Us</h1>
<div className="locate-container">
  {/* Left-side */}
  <div className="locate-left">
    <h1 className="heading">Paint Express</h1>
    <p className="address">
      <strong>Address:</strong>
     <br /> Amrahia (Otinibi Junction)</p>
    <p>
      <strong>Contact Number:</strong>
      <br />   +233 243 75 2511</p>
    <p>
      <strong>Email Address:</strong> 
      <br /> <a href="mailto:eaglesfball@gmail.com">paint@mail.com</a>
    </p>
    <p>
      <strong>Website:</strong> 
      <br /> <a href="http://qhojo-rain.github.io/paint-express" target="_blank" rel="noopener noreferrer">
        paint-express.com
      </a>
    </p>
  </div>

  {/* Right-side */}
  <div className="locate-right">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.6133953696144!2d-0.14433282559830415!3d5.768636031476091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf79689da4f4f1%3A0x13c97a281e29502b!2sPaint%20Express%20%7CAmerican%20Foreign%20Paints%7C!5e0!3m2!1sen!2sgh!4v1735012341633!5m2!1sen!2sgh"
      width="600"
      height="450"
      style={{ border: "0" }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>
</div>



  )
}