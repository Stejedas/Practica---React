

import React from 'react';

import './style.css';
import { useContext, useState } from 'react';
import { DataContext } from '../context/dataContext';



function Nav() {




  return (

    <React.Fragment>

      <div className="nav_container">
      
        <div className="logo_container">
        <img className="logo"  src="https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/neoland_%281%29/original.jpg?1568082575" />
        </div>
        <div className="version">Version 1.0</div>
      </div>
      
    </React.Fragment>
  )
}



export default Nav