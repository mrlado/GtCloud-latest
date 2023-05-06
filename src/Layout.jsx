import React, { useEffect , useContext } from 'react'
import Navigation from './Components/Navigation'
import Hero from './Components/HomePage/Hero'
import About from './Components/HomePage/About'
import Services from './Components/HomePage/Services'
import Divider from './Components/HomePage/Divider'
import Acardion from './Components/HomePage/Acardion'
import Vendors from './Components/HomePage/Vendors/Vendors'
import Partners from './Components/HomePage/Partners/Partners'
import Footer from './Components/Footer'
import { Loadingcontext } from './Context/LoadingProvider'
import LoadingPage from './Context/LoadingPage'
import Slick_Partners from './Components/HomePage/Slick_Partners'


export const Layout = () => {
const {Loading,setLoading} = useContext(Loadingcontext)

  useEffect(()=>{
    if(setLoading === false){
      setLoading(true)
      setTimeout(()=>{
        setLoading(false)
      },3000)
    }else{
      setTimeout(()=>{
        setLoading(false)
      },3000)
    }
    

  },[])

  return (
    <div>
      {Loading === true && <LoadingPage/>}
        <Hero/>
        <About/>
        <Services/>
        <Divider/>
        <Acardion/>
        <Vendors/>
        {/* <Partners/> */}
        <Slick_Partners/>
        
    </div>
  )
}
