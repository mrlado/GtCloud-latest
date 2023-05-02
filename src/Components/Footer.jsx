import React from 'react'
import Phoneimg from '../Assets/ContactDesc/Path 329.png'
import EmailLogo from '../Assets/ContactDesc/Group 317.png'
import linkIInLogo from '../Assets/Linked In Icon.png'



const Footer = () => {
  return (
    <footer className='w-full h-full flex justify-around items-start pt-10 md:flex-col'>
        <div className="links flex justify-center items-start md:m-auto">
            <div className="leftLinks">
                <h1>Home</h1>
                <h1>Vendors</h1>
                <h1>Products</h1>
                <h3 className='text-md text-[#939393] text-[13px]'>IT Infrustructure</h3>
                <h3 className='text-md text-[#939393] text-[13px]'>Network Infrustructure</h3>
                <h3 className='text-md text-[#939393] text-[13px]'>Cyber Security</h3>
                <h3 className='text-md text-[#939393] text-[13px]'>Managed Security Service</h3>
                <h3 className='text-md text-[#939393] text-[13px]'>Managed Services</h3>
                <h3 className='text-md text-[#939393] text-[13px]'>Cloud Systems and Security</h3>
            </div>
            <div className="rightLinks">
                <h1>Partners</h1>
                <h1>About us</h1>
                <h1>Contact</h1>
            </div>
        </div>
        <ul className="Contactinfo flex flex-col justify-start items-start md:mt-10 md:ml-auto md:gap-3">
                        <li className='pl-28'><img src={linkIInLogo} alt=""  className=' w-[47px] h-[47px]'/></li>
                        <li className='flex justify-center items-center'>
                            <img src={Phoneimg} alt="Phoneimg" className='mr-4'/>
                            <h4 className='pl-3'>+3725126014</h4>
                        </li>
                        <li className='flex items-center'>
                            <img src={EmailLogo} alt="Phoneimg" className='mr-4'/>
                            <h4>info@gtcloud.ee</h4>
                        </li>
                    </ul>



    </footer>
  )
}

export default Footer