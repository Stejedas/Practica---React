import HomePage from './pages/Home';
import './App.css';
import React from 'react';
import DataProvider from './components/context/dataProvider';


function App() {
  return (

    <DataProvider>
    
    <React.Fragment>
    
      <HomePage></HomePage>

      </React.Fragment>
 
      </DataProvider>
  
  );
}

export default App;
