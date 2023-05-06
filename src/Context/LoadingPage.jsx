import React from 'react'
import { motion as m, animate } from "framer-motion"
import './Loading.css'


const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "transparent"
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "transparent"
    }
  };


const LoadingPage = () => {
  return (
    <div className="containerr">
        <div className='m-auto h-[400px] w-[650px] flex justify-center items-center bg-gradient-to-r from-[#00F5FB] to-[#DC04CB] rounded-[150px]'>
    <m.svg className="Loadingitem" width="700pt" height="700pt" version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg" >

  <m.path         variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 3, ease: "easeInOut" },
          fill: { duration: 3, ease: [1, 0, 0.8, 1] }
        }}d="m485.52 231.84c-16.238-71.121-79.52-122.08-155.12-122.08-78.961 0-145.6 57.121-157.36 132.72-37.52 17.922-61.602 56-61.602 98 0 60.48 49.281 109.2 109.2 109.2h258.16c60.48 0 109.2-49.281 109.2-109.2 0.5625-57.68-45.355-105.84-102.48-108.64zm-6.1602 173.6h-258.72c-35.84 0-64.398-29.121-64.398-64.398 0-28 17.922-52.641 44.238-61.039 8.9609-2.8008 14.559-10.641 15.121-20.16 3.3594-58.801 53.762-105.28 114.24-105.28 58.238 0 108.64 44.801 113.68 101.36 1.1211 11.762 10.641 20.16 22.398 20.16h12.879c35.84 0 64.398 29.121 64.398 64.398 0.003907 35.281-28.555 64.961-63.836 64.961z"/>
  

    </m.svg>
    <h1 className='text-[white] absolute top-[63vh] left-[50%] text-4xl'>GTCLOUD
    </h1>
    </div>
  </div>
  )
}

export default LoadingPage