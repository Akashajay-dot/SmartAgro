import React from 'react'

function Card(props) {
  return (
    <div className="card">
      <img src={props.img} />
      <div className="card-body">
      <h2>{props.title}</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
      </div>
    </div>
       
  
  )
}

export default Card