import React from 'react'
import { Link } from 'react-router-dom';


function CropCard({crops}) {
    // console.log(typeof crops);
       
  return (
    <div className='cropCard'>
        { crops.map( (crop) => (
         <div className="blpr" key={crop.id} >
        <div className="photo">
            <img className='crpPhoto' src={crop.photo} alt="" />
        </div>
        <div className="crpcont">
            <div className="content">
                <h1>{crop.name}</h1>
                {/* <img src={crop.photo} alt="" /> */}
                <p>By: {crop.author}</p>
            </div>
            <Link to={`/CropDetail/${crop.id}` }> 
            <button className='custom-btn btn-2' >Details</button>
            </Link>
        </div>
        </div>  
        ))}
    </div>
  ) 
}   

export default CropCard
