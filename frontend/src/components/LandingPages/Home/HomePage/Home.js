import React from 'react';

import './Home.css';
import Mid from '../MiddleSection/MiddleSection';
import Carousel from '../Carousel/Carouselhp';
import Foot from '../HomeBottom/HomeBottom';


function App() {
  
  return (

      <div className='sctn'>
      <div className='bg'>
          
          <Carousel />
        </div>
        <div className="hehe">
          
          <div>
            <Mid />
          </div>
          <div>
            <Foot />
          </div>
        </div>
      </div>
   
  );
}

export default App;
