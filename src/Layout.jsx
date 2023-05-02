import React from 'react'
import Navigation from './Components/Navigation'
import Hero from './Components/HomePage/Hero'
import About from './Components/HomePage/About'
import Services from './Components/HomePage/Services'
import Divider from './Components/HomePage/Divider'
import Acardion from './Components/HomePage/Acardion'
import Vendors from './Components/HomePage/Vendors/Vendors'
import Partners from './Components/HomePage/Partners/Partners'
import Footer from './Components/Footer'



export const Layout = () => {
  return (
    <div>
        <Hero/>
        <About/>
        <Services/>
        <Divider/>
        <Acardion/>
        <Vendors/>
        <Partners/>
        
    </div>
  )
}
