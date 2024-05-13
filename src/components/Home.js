import React from 'react'
import { Link } from 'react-router-dom';
import Carousel from "./Carousel";
import { countries } from "./Data";
import Card from './Card';



function Home() {

      

  return (
    <div>
      <div className="navblank"></div>
      <div className="App">
        <Carousel images={countries} />
      </div>
      <div className="services">
        <h1>Our Services</h1>
      </div>
      <div className='cards'>
        <Link to='/cropDetails'>
          <Card
              img='https://picsum.photos/id/54/400/300'
              title='Crops Details'
              />
        </Link>
        <Link to='/cropReg'>
          <Card
              img='https://picsum.photos/id/54/400/300'
              title='Register a crop'
              />
        </Link>
        <Link to='/weather'>
          <Card
              img='https://picsum.photos/id/54/400/300'
              title='weather'
              />
        </Link>

        <Link to='/newCrop'>     
          <Card
              img='https://picsum.photos/id/54/400/300'
              title='Add crop data'
              />
        </Link>
      </div>
      <div className="footer">
          <div className="footersec"></div>
          <div className="footersec"></div>
          <div className="footersec"></div>
          <div className="footersec " id='sec'></div>
      </div>
    </div>


    
  )
}

export default Home