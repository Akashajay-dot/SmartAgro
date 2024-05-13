import React from 'react'
import useFetch from '../Hooks/useFetch';
import { useParams } from 'react-router-dom';
import './cropdetail.css'


function CropDetail() {
  const { id } = useParams();
  const{data, isloading, error } =  useFetch('http://localhost:8000/data/'+id);
  
  console.log(data);


  return (
    <div className='CropDetail'>
    
      {error && <h1>{error}</h1>}
      {isloading && <h1>loading........</h1>   }    
      {data && (
      <img classNames='CropDetail_photo' src={data.photo} alt="" />
    
        
         


      )}




</div>
  )
}

export default CropDetail