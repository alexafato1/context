import React, { useState } from 'react';
import FuctionContextComponent from './FunctionContextComponent'
import {ThemeProvider} from './ThemeContext'


 

export default function App(){
  
  return (
    <div>
      <ThemeProvider>
     
       <FuctionContextComponent/>
       
      </ThemeProvider>
     </div>
  );
}


