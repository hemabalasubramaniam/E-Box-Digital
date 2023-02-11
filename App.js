import React from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Headers from './Components/Header/Headers';
import Landingpage from './Components/LandingPage/Landingpage';
import {Route, Routes} from 'react-router-dom';
import Ittechfoundation from './Components/IT-TechFoundation/It-techfoundation';
import Maincontent from './Components/Maincontent/Maincontent';

const App = () =>{
  return(
    <div className='app'>
    <Headers />
      <Routes>
        <Route path='/' element={<Landingpage />} />
        <Route path='/tracks/it' element={<Ittechfoundation />} />
        <Route path='*' element={<Maincontent />} />
      </Routes>
    <Footer />
    </div>
  );
}

export default App;