import React, { useState } from 'react'
import Phoneimg from '../Assets/ContactDesc/Path 329.png'
import EmailLogo from '../Assets/ContactDesc/Group 317.png'
import linkIInLogo from '../Assets/Linked In Icon.png'
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'



const Footer = () => {
    const [productsShow,setProductsShow] = useState(false)
  return (
    <footer className='w-full h-full flex justify-around items-start pt-10 md:flex-col'>
        <div className="links flex justify-center items-start md:block ">
            <div className="leftLinks flex flex-col gap-8 md:ml-6 md:mb-6 ">
                <h1>Home</h1>
                <h1>Vendors</h1>
                <h1>Partners</h1>
            </div>
            <div className="rightLinks flex flex-col gap-8 ml-14 md:ml-6">
                <h1 className='relative' onClick={()=>{setProductsShow(!productsShow)}}> <div className='flex justify-center items-center'>Products  <IoIosArrowForward/></div>
                    <ul className={`absolute top-0 left-24 w-[200px]  flex flex-col gap-1 ${!productsShow ?  '' : 'hidden'} md:-top-12 md:block}`}>
                        <li className='text-md text-[#939393] text-[13px] hover:shadow' onClick ={() => window.scrollTo(0, 0)}><Link to="/ITInfrustructure">IT Infrastructure</Link></li>
                        <li className='text-md text-[#939393] text-[13px] hover:shadow' onClick ={() => window.scrollTo(0, 0)}><Link to='/NetworkInfrastructure'>Network Infrastructure</Link></li>
                        <li className='text-md text-[#939393] text-[13px] hover:shadow' onClick ={() => window.scrollTo(0, 0)}><Link to='/CyberSecurity'>Cyber Security</Link></li>
                        <li className='text-md text-[#939393] text-[13px] hover:shadow' onClick ={() => window.scrollTo(0, 0)}><Link to='/ManagedSecurityServices'>Managed Security Service</Link></li>
                        <li className='text-md text-[#939393] text-[13px] hover:shadow' onClick ={() => window.scrollTo(0, 0)}><Link to='/ManagedServices'>Managed Services</Link></li>
                        <li className='text-md text-[#939393] text-[13px] hover:shadow' onClick ={() => window.scrollTo(0, 0)}><Link to='/CloudandSecurityServices'>Cloud Systems and Security</Link></li>
                    </ul>
                </h1>
                <h1>About us</h1>
                <h1>Contact</h1>
            </div>
        </div>
        <ul className="Contactinfo flex flex-col gap-4 mb-12 justify-start items-start md:mt-10 md:m-auto md:gap-3 md:mb-6">
                        <li className='pl-28 md:pl-16 '><img src={linkIInLogo} alt="linkIInLogo"  className=' w-[47px] h-[47px]'/></li>
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