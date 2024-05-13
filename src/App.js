import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Crops from './components/Crops';
import Cropreg from './components/Cropreg';
import Weather from './components/Weather';
import Newcrop from './components/Newcrop';
import Login from './components/Login';
import Services from './components/Services';
import Help from './components/Help';
import CropDetail from './components/CropDetail';


function App() {
  return (
    <div className="App">
     <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cropDetails' element={<Crops />}/>
        <Route path='/cropreg' element={<Cropreg/>}/>
        <Route path='/weather' element={<Weather/>}/>
        <Route path='/newCrop' element={<Newcrop/>}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/help' element={<Help/>}/>
        <Route path='/CropDetail/:id' element={<CropDetail/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
