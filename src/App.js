import React from 'react';

import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './home';
import Secure from './secure';


function App() {
  return (
      <>

    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/secure" element={<Secure />}/>
        


        

          
            
        </Routes>
      </BrowserRouter>
      
      </>
  );
}

export default App;
