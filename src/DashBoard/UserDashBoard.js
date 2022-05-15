import React from 'react'
import Footer from '../assets/Components/Footer/Footer'
import "./UserDashboard.css"
import {DashBoardCards} from "../assets/Components/Cards/Cards"

function UserDashBoard() {
  return (
    <div className='container-fluid userDashBoard p-0'> 
    <nav className='usernav d-flex flex-wrap align-items-center '>
        <ul className='d-flex flex-wrap align-items-center px-5'>
            <li className='mx-4 active'>Dash Board</li>
            <li className='mx-4'>Profile</li>
        </ul>
    </nav>
    <div className="p-5">
    <div className="userInfo px-5 my-4" >
        <div className="userWelcom my-4" >
            <h3>Welcome back! owner</h3>
        </div>
        <div className="bannerAlert my-4">
            <h2>Choose a plan to submit your place!</h2>
            <div className="bannerButton mt-3">
                <button className='bannerbtn'> Upgrade Now</button>
            </div>
        </div>
        <div className="userCard my-4 d-flex flex-wrap align-items-center justify-content-between">
            <DashBoardCards title="Activated Places" entry="0"/>
            <DashBoardCards title="Bookings Made" entry="0"/>
            <DashBoardCards title="Total Reviews" entry="0"/>
            <DashBoardCards title="Total Views" entry="0"/>
        </div>
    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default UserDashBoard