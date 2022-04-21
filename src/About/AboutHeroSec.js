import React from 'react'
import "./AboutHeroSec.css"
import aboutusImg from "./aboutusImg.jpg"

function AboutHeroSec() {
  return (
    <div>
        <div className="container-fluid ">
            <div className="row d-flex flex-wrap ">
                <div className="col-4">
                    <img src={aboutusImg} alt="" style={{height:"450px"}}/>
                </div>
                <div className="col-8 d-flex flex-wrap p-4 justify-content-center align-items-center">
                    <div className="herosecContent text-center p-4 m-4">
                        <h1 className='mb-4'> Our<span className='chgedcolor'> Team</span> </h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, molestiae! Ullam consequuntur praesentium repudiandae non numquam at maiores fuga et. Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                    <button className='aboutusBtn' >Know More..</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutHeroSec