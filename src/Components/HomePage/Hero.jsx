import React from 'react'
import HeroImage from '../../Assets/scas@4x.png'
import { motion } from 'framer-motion'
import { PopupButton } from "react-calendly";
import BookaCall from './BookaCall';

const Hero = () => {
  return (
  <div className="hero w-full h-full flex justify-center items-center pl-[140px] sm:pl-0">
        <div className=' w-full h-full rounded-[40px] flex flex-col justify-center items-center pt-16' style={{background:'linear-gradient(to right, #EEEBEB, white)'}} >
            <motion.div initial={{x:-1500,opacity:0}} animate={{x:0, opacity:1}} transition={{ delay: 1 }} className="heropage mt-[40px] object-contain max-w-[948px]"> <img src={HeroImage} alt="HeroImage" /></motion.div>
            <motion.h1  initial={{x:1500,opacity:0}} animate={{x:0, opacity:1}} transition={{ delay: 2 }}className='font-extrabold text-[40px] pl-4 text-center md:pl-0'>IT Solutions Customized for Your Business</motion.h1>
            <motion.span  initial={{x:-1500,opacity:0}} animate={{x:0, opacity:1}} transition={{ delay: 3 }}className='max-w-[50vw] text-center'>Migrating to a new platform? Need help planning your IT budget? Lack the resources to develop new software? Need to secure your infrustructure? You've come to the right place.
            </motion.span>

          <BookaCall/>

        </div>
  </div>
    
  )
}

export default Hero