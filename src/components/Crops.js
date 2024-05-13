import React from 'react'
import {assetslogo , assetslogo1} from "./Data";
import useFetch from '../Hooks/useFetch';
import CropCard from './CropCard';

function Crops() {
  const {data:crops , isloading , error} = useFetch("http://localhost:8000/data")
  console.log(crops);
  
  return (
    <div className='croppage'  >
      {error && <h1>{error}</h1>}
      {isloading && <h1>loading........</h1>   }    
      {crops && <CropCard crops={crops} /> }
    </div>
  )
}

export default Crops