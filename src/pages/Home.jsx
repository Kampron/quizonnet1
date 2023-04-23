import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'


import About from '../components/Home/About'
import Explore from '../components/Home/Explore'
import Feedback from '../components/Home/Feedback'
import Footer from '../components/Home/Footer'
import GetStarted from '../components/Home/GetStarted'
import Hero from '../components/Home/Hero'
import Navbar from '../components/Home/Navbar'
import Upcoming from '../components/Home/Upcoming'
import WhatsNew from '../components/Home/WhatsNew'
import World from '../components/Home/World'

const Home = () => {
  return (
    <div className="bg-white overflow-hidden">
        <HelmetProvider >
          <Helmet><title>Quizonnet | Home</title></Helmet>
        </HelmetProvider>
        <Navbar />
          <div className="gradient-01 z-0"/>
        <Hero />
        <div className="relative">
          <About />
          <div className="gradient-03 z-0"/>
          <Explore />
          <div className="gradient-01 z-0"/>
        </div>
        <div className="relative">
          <GetStarted />
          <div className="gradient-04 z-0"/>
          <WhatsNew />
        </div>
        <World />
        <div className="relative">
          <Upcoming />
          <div className="gradient-04 z-0"/>
         <Feedback />
        </div>
        <Footer />
    </div>
  )
}

export default Home