import React from 'react'
import Slider from "react-slick";
import './Partners.css'

const Slick_Partners = () => {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              slidesToShow: 1,
            }
          }
        ]
      };

      const PartnerArr=['https://gtgroupe.ge/slir/w500-h500/uploads/partners/microsoft.png','https://gtgroupe.ge/slir/w500-h500/uploads/partners/cisco.png','https://gtgroupe.ge/slir/w500-h500/uploads/partners/symantec.png','https://gtgroupe.ge/slir/w500-h500/uploads/partners/ibm.png' ,'https://gtgroupe.ge/slir/w500-h500/uploads/partners/p3.png','https://gtgroupe.ge/slir/w500-h500/uploads/partners/mcaffee.png','https://gtgroupe.ge/slir/w500-h500/uploads/partners/p4.jpg','https://gtgroupe.ge/slir/w500-h500/uploads/partners/hpe.png','https://gtgroupe.ge/slir/w500-h500/uploads/partners/honeywell.png']

  return (<div className='w-full  m-auto flex justify-center items-center bg-gradient-to-r from-[#00F5FB] to-[#DC04CB]'>
            
    <div className='Carouselcontainer max-w-[90vw] min-h-[290px] '>
            <h3 className='ml-[30px] text-center font-medium text-[30px] text-[white]'>Partners</h3>
        <Slider {...settings}>
            {PartnerArr.map((value, index, array) => {
                return <div className='Slider_Item'>
                <div className='m-auto bg-[white] rounded-3xl object-contain w-[200px] h-[200px]' style={{backgroundImage:`url(${value})`,backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'contain'}}></div>
              </div>
            })}
        </Slider>
      </div>
    </div>
    );
  }


export default Slick_Partners