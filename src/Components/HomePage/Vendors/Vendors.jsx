import React from 'react'
import ReactCardCarousel from "react-card-carousel";
import './Vendors.css'
const Vendors = () => {


  return (
    <div className="ContainerStyle" id='Vendors'>
        <h5 className='VendorTitle'>Vendors</h5>
        <ReactCardCarousel autoplay={true} 
        autoplay_speed={2500} 
        disable_box_shadow={true}
        spread='wide'
        >
    
          <div className="CardStyle img one sm:h-[175px] sm:w-[175px] h-[250px] w-[250px]"></div>
          <div className="CardStyle img two sm:h-[175px] sm:w-[175px] h-[250px] w-[250px]"></div>
          <div className="CardStyle img three sm:h-[175px] sm:w-[175px] h-[250px] w-[250px]"></div>
        </ReactCardCarousel>
      </div>
  )
}

export default Vendors