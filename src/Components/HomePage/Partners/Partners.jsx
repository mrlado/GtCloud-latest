import React from 'react'
import './Partners.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Partners = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <div className='MainPartnersContainer ' id='Partners'>
        <h3 className='ml-[30px]'>Partners</h3>
        <Carousel
  additionalTransfrom={0}
  arrows
  autoPlaySpeed={3000}
  centerMode={false}
  className=""
  containerClass="container"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite={false}
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  pauseOnHover
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3,
      partialVisibilityGutter: 40
    },    
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    mobile: {
      breakpoint: {
        max: 360,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 10
    },

  }}
  rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots={false}
  sliderClass=""
  slidesToSlide={1}
  swipeable
>
  <div className='PartnerCartBG'>Item 1</div>
  <div className='PartnerCartBG'>Item 2</div>
  <div className='PartnerCartBG'>Item 3</div>
  <div className='PartnerCartBG'>Item 4</div>
</Carousel>
     </div>
  )
}

export default Partners