import React from 'react'
import "./PlaceInfoNav.css"

function PlaceInfoNav() {
  return (
    <div className=''>
        <hr />
        <nav className='container placeinfonav my-4 py-2'>
            <ul className='d-flex justify-content-between col-4'>
                <li className='active' >  PARIS</li>
                <li>STAY</li>
                <li>FOOD & DRINK</li>
                <li>SEE & DO</li>
            </ul>
        </nav>
        <hr />

    </div>
  )
}

export default PlaceInfoNav