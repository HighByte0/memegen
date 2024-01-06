import './App.css';
import React from 'react';
import jokesdata from './components/jokesdata';

import datas  from './components/data';

import Travel from './components/Travelcard';

function App() {
 
  const cardplace=datas.map((data)=>(
    <Travel
    
    {...data}
    
    
    />


  )
  )
 
  



  return (
    <div>
     
      {cardplace}

    
   
     
    </div>
  );
}

export default App;
