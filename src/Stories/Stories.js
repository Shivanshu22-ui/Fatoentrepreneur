import React from 'react'
import Footer from '../Footer/Footer';
import Posts from './posts/Posts';
import Sidebar from './sidebar/Sidebar';


function Stories() {
  return (
    <div>
      <div className="stories d-flex">
        <Posts/>
        <Sidebar/>
      </div>
        <Footer/>
    </div>
  )
}

export default Stories