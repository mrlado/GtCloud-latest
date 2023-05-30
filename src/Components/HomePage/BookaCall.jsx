import React from 'react'
import { useState } from 'react';
import { PopupModal } from "react-calendly";

const BookaCall = () => {
    const [isOpen, setisOpen] = useState(false)


  return (
    <div>
        <button
          className='w-[256px] h-[68px] px-4 text-[24px] rounded-[43px] mt-4 text-white mb-12 md:w-[148px] md:h-[39px] md:text-[15px]' 
          style={{background:'linear-gradient(to right, #00F5FB , #DC04CB)', color:'white'}}
          onClick={() => setisOpen(true)}
        >
          Book a call
        </button>
        <PopupModal
          url="https://calendly.com/gtgroupest/zoom-call?primary_color=dc04cb"
          onModalClose={() => setisOpen(false)}
          open={isOpen}
          /*
           * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
           * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
           */
          rootElement={document.getElementById("root")}
        />
      </div>
  )
}

export default BookaCall