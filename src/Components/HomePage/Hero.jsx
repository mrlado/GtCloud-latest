import React from 'react'
import HeroImage from '../../Assets/scas@4x.png'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
  <div className="hero w-full h-full flex justify-center items-center pl-[140px] sm:pl-0">
        <div className=' w-full h-full rounded-[40px] flex flex-col justify-center items-center pt-16' style={{background:'linear-gradient(to right, #EEEBEB, white)'}} >
            <motion.div initial={{x:-1500,opacity:0}} animate={{x:0, opacity:1}} transition={{ delay: 1 }} className="heropage mt-[40px] object-contain max-w-[948px]"> <img src={HeroImage} alt="HeroImage" /></motion.div>
            <motion.h1  initial={{x:1500,opacity:0}} animate={{x:0, opacity:1}} transition={{ delay: 2 }}className='font-extrabold text-[40px] pl-4 text-center md:pl-0'>IT Solutions Customized for Your Business</motion.h1>
            <motion.span  initial={{x:-1500,opacity:0}} animate={{x:0, opacity:1}} transition={{ delay: 3 }}className='max-w-[50vw] text-center'>Migrating to a new platform? Need help planning your IT budget? Lack the resources to develop new software? Need to secure your infrustructure? You've come to the right place.
            </motion.span>
            <motion.button 
            initial={{opacity:0}} animate={{opacity:1}} transition={{ delay: 4 }}
            className='w-[256px] h-[68px] px-4 text-[24px] rounded-[43px] mt-4 text-white mb-12 md:w-[148px] md:h-[39px] md:text-[15px]' 
            style={{background:'linear-gradient(to right, #00F5FB , #DC04CB)', color:'white'}}>
                 Read More
            </motion.button>
        </div>
  </div>
    
  )
}

export default Hero