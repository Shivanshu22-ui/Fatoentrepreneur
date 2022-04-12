import React from 'react'
import Footer from '../Footer/Footer';
import Posts from './posts/Posts';
import Sidebar from './sidebar/Sidebar';
import Header from './Header/Header';


function Stories() {
  return (
    <div className='container-fluid'>
      <Header/>

      <div className="d-flex">
        <Posts/>
        <div className="sidebar">
        <Sidebar image= 'https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg'/>
        <Sidebar image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIhJRbOCmqDsffPwzxreF--6RR0_eodMWA2Q&usqp=CAU'/>
          </div>
      </div>
        <Footer/>
    </div>
  )
}

export default Stories