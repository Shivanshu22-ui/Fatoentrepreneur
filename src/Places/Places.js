import React from 'react'
import Footer from '../Footer/Footer';
import DropDownNav from './DropDownNav';
import "./Places.css"
import { PlacesCards } from '../Cards/Cards';

function Places() {
  return (
    <div className='places'>
      <div className="placesCards"><PlacesCards/></div>
      
      <DropDownNav/>
        <Footer/>
    </div>
  )
}

export default Places;