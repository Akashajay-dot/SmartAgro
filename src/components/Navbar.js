import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import {assetslogo , assetslogo1} from "./Data";

function Navbar() {
  // console.log(assets);
  return (
    
        <div className='navbar'>
          <Link to="/">
            <div className="logo">
              <img className='logo_png' src={assetslogo} alt="eroor fetching logo " />
              <img className='logo1_png' src={assetslogo1} alt="eroor fetching logo " />

            </div>
          </Link>  
        <div className="leftSection">
            <Link to="login">login</Link>
            <Link to="services">Services</Link>
            <Link to="help">Help</Link>
             <div className="input">
                <input type="text" />
                <button>
                <SearchIcon variant="contained" className='searchicon' ></SearchIcon>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Navbar