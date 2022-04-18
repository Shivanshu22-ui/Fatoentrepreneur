import React from 'react'
import "./About.css"
import Footer from '../Footer/Footer'
import AboutHeroSec from './AboutHeroSec'
import ClientSec from './ClientSec'

function About() {
  return (
    <div>
      <AboutHeroSec/>
      <ClientSec/>
      <Footer/>
    </div>
  )
}

export default About