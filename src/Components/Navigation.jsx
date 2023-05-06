import React, { useEffect, useRef, useState } from 'react'
import Logo from '../Assets/Logo Png Black.png'
import HumburgerLogo from '../Assets/Mobile/Burger.png';
import HumburgetCloseLogo from '../Assets/Mobile/BurgX.png'
import Phoneimg from '../Assets/Mobile/Path 329.png'
import EmailLogo from '../Assets/Mobile/Group 316.png'
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io';
import { Link } from "react-router-dom";
import { motion as m, animate } from "framer-motion"



const Navigation = () => {
const [productsShow,setProductsShow] = useState(false)
const [humburgernav , setHumburgerLogoNav] = useState(false)
const ProductsNavRef = useRef(null);

useEffect(() => {
    const handleClickOutside = (e) => {
      if (ProductsNavRef.current && !ProductsNavRef.current.contains(e.target)) {
        setProductsShow(false)
      }
    }
    
    // Add a check for window size
    if (window.matchMedia('(min-width: 768px)').matches) {
      window.addEventListener('click', handleClickOutside)
    }
  
    return () => {
      if (window.matchMedia('(min-width: 768px)').matches) {
        window.removeEventListener('click', handleClickOutside)
      }
    }
  }, [ProductsNavRef])

  return (
    <div className='flex justify-around mt-4 items-center w-full absolute top-0'>
        <div>
            <Link to="/">
            <img src={Logo} alt="" />
            </Link>
        </div>
        <m.ul  
        initial={{ x:1000 }} 
        whileInView={{ opacity: 1 }} 
        transition={{duration:2,ease:'easeOut'}}
        animate ={{x:0}}
        className='flex gap-7 items-center relative md:hidden md:gap-5'
         >
            <li className='cursor-pointer text-base font-normal'><Link to='/' >Home</Link></li>
            <li className='cursor-pointer'>Vendors</li>
            <li className='cursor-pointer ' ref={ProductsNavRef}><span className='flex items-center' onClick={()=>{setProductsShow(!productsShow)}}> Products {productsShow ? <IoIosArrowDown/>  : <IoIosArrowForward/>}</span>
                <ul className={`absolute left-[140px] p-4 bg-[#F2F2F2] rounded-md ${!productsShow && 'hidden'}`}>
                    <li className='text-sx text-[#939393]'onClick={()=>{setProductsShow(false)}}>
                        <Link to='/ITInfrustructure' >IT Infrustructure</Link>
                        </li>
                    <li className='text-sx text-[#939393]' onClick={()=>{setProductsShow(false)}}>
                        <Link to='/NetworkInfrastructure'>Network Infrustructure</Link>
                        </li>
                    <li className='text-sx text-[#939393]' onClick={()=>{setProductsShow(false)}}>
                        <Link to='/CyberSecurity'>Cyber Security</Link>
                        </li>
                    <li className='text-sx text-[#939393]' onClick={()=>{setProductsShow(false)}}>
                        <Link to='/ManagedSecurityServices'>Managed Security Service</Link>
                        </li>
                    <li className='text-sx text-[#939393]' onClick={()=>{setProductsShow(false)}}>
                        <Link to='/ManagedServices'>Managed Services</Link>
                        </li>
                    <li className='text-sx text-[#939393]' onClick={()=>{setProductsShow(false)}}>
                        <Link to='/CloudandSecurityServices'>Cloud System and Security</Link>
                        </li>
                </ul>
            </li>
            <li className='cursor-pointer'>Partners</li>
            <li className='cursor-pointer'>About us</li>
            <li className='cursor-pointer'><Link to='ContactPage'>Contact</Link></li>
        </m.ul>
        <div className="MobileNavigation hidden md:block">
                <div className="humburgerLogo relative z-[10]" >
                {!humburgernav ?  
                <img src={HumburgerLogo} alt="HumburgerLogo" onClick={() => setHumburgerLogoNav(!humburgernav)}/>
                :
                <> 
                <div className='relative -z-[0] w-[100vw] h-[100vh]' onClick={()=> setHumburgerLogoNav(!humburgernav)}>
                
                </div>
                
                <img src={HumburgetCloseLogo} className='absolute top-[15px] z-[11] right-[15%] sm:right-[27%]' alt="HumburgerLogo" onClick={() => setHumburgerLogoNav(!humburgernav)}/>
                <div className="MobileNav absolute -top-[15px] right-[0px] min-h-[200vh] h-full w-[220px]  bg-[#F9F9F9] opacity-1">
                <ul className='flex  flex-col gap-7 items-center relative p-10 pt-[60%]'>
                    
                    <li className='cursor-pointer' onClick={() => setHumburgerLogoNav(!humburgernav)}><Link to='/'>Home</Link></li>
                    <li className='cursor-pointer' onClick={() => setHumburgerLogoNav(!humburgernav)}>Vendors</li>
                    <li className='cursor-pointer'><span className='flex items-center' onClick={()=>{setProductsShow(!productsShow)}}> Products {productsShow ? <IoIosArrowDown/>  : <IoIosArrowForward/>}</span></li>
                    
                {productsShow && <ul className='mr-[50px] w-[150px] flex flex-col gap-2 -mt-4'>
                                <li className='text-[#939393] text-left text-[10px]' onClick={() => setHumburgerLogoNav(!humburgernav)}><Link to='/ITInfrustructure'>IT Infrustructure</Link></li>
                                <li className='text-sx text-[#939393] text-left text-[10px]' onClick={() => setHumburgerLogoNav(!humburgernav)}><Link to='/NetworkInfrastructure'>Network Infrustructure</Link></li>
                                <li className='text-sx text-[#939393] text-left text-[10px]' onClick={() => setHumburgerLogoNav(!humburgernav)}><Link to='/CyberSecurity'>Cyber Security</Link></li>
                                <li className='text-sx text-[#939393] text-left text-[10px]' onClick={() => setHumburgerLogoNav(!humburgernav)}><Link to='/ManagedSecurityServices'>Managed Security Service</Link></li>
                                <li className='text-sx text-[#939393] text-left text-[10px]' onClick={() => setHumburgerLogoNav(!humburgernav)}><Link to='/ManagedServices'>Managed Services</Link></li>
                                <li className='text-sx text-[#939393] text-left text-[10px]' onClick={() => setHumburgerLogoNav(!humburgernav)}><Link to='/CloudandSecurityServices'>Cloud System and Security</Link></li>
                    </ul>}
                    
                    <li className='cursor-pointer' onClick={() => setHumburgerLogoNav(!humburgernav)}>Partners</li>
                    <li className='cursor-pointer' onClick={() => setHumburgerLogoNav(!humburgernav)}>About us</li>
                    <li className='cursor-pointer' onClick={() => setHumburgerLogoNav(!humburgernav)}><Link to='ContactPage'>Contact</Link></li>
                    <ul>
                        <li className='flex justify-center items-center mt-32'>
                            <img src={Phoneimg} alt="Phoneimg" className='mr-4'/>
                            <h4>+3725126014</h4>
                        </li>
                        <li className='flex items-center'>
                            <img src={EmailLogo} alt="Phoneimg" className='mr-4'/>
                            <h4>info@gtcloud.ee</h4>
                        </li>
                    </ul>
                </ul>
            </div>
                </>
                }
                </div>
            
        </div>
    </div>
  )
}

export default Navigation