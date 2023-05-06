import React from 'react'
import ItInfrastructure from '../../Assets/Asset 6@4x.png'
import Network from '../../Assets/Asset 5@4x.png'
import Cyber from '../../Assets/962, Cloud, Hosting, Hosting Server, Services@4x.png'
import ManagedSecurityServices from '../../Assets/974, Bug, Fixing, Repair, Virus@4x.png'
import ManagedServices from '../../Assets/965, Crash, Error, Hosting, Service, Web@4x.png'
import CloudSecurity from '../../Assets/960, Diagram, Hosting, Seo, Storage@4x.png'
import { Link } from 'react-router-dom'

const Services = () => {



  return (
    <div className='w-full h-[40vh] mt-6'>
        <h1 className='text-center text-[30px] font-medium pl-[140px] sm:pl-0'>Our Services</h1> 
        <div className="ServicesContainer flex justify-around items-center  gap-30 mt-12 md:flex md:flex-col md:m-auto md:mt-10 md:gap-12 xl:flex-wrap xl:gap-32">
              <div onClick ={() => window.scrollTo(0, 0)} className="item w-[215px] h-[215px] shadow  flex flex-col justify-center items-center rounded-2xl hover:shadow-inner bg-white relative">
              <Link to='/ITInfrustructure'>  <div className="servicesimage m-auto"> <img src={ItInfrastructure} alt="ItInfrastructure" className='object-center'/></div>
                    <h1 className='text-sm text-center mb-4 absolute -bottom-12 text-[#939393]'>IT Infrastructure</h1>
                </Link>
                </div>  
                <div onClick ={() => window.scrollTo(0, 0)} className="item w-[215px] h-[215px] shadow flex flex-col justify-center items-center rounded-2xl hover:shadow-inner bg-white relative">
                <Link to='/NetworkInfrastructure'>
                    <div className="servicesimage m-auto"> <img src={Network} alt="ItInfrastructure" /></div>
                    <h1 className='text-sm text-center mb-4 absolute -bottom-12 text-[#939393]'>Network Infrastructure</h1>
                </Link>
                </div>  
                <div onClick ={() => window.scrollTo(0, 0)} className="item w-[215px] h-[215px] shadow flex flex-col justify-center items-center rounded-2xl hover:shadow-inner bg-white relative">
                <Link to='/CyberSecurity'>
                      <div className="servicesimage m-auto"> <img src={Cyber} alt="ItInfrastructure" /></div>
                    <h1 className='text-sm text-center mb-4 absolute -bottom-12 text-[#939393]'>Cyber Security</h1>
                    </Link>
                </div>  
                <div onClick ={() => window.scrollTo(0, 0)} className="item w-[215px] h-[215px] shadow flex flex-col justify-center items-center rounded-2xl hover:shadow-inner bg-white relative">
                <Link to='/ManagedSecurityServices'>
                    <div className="servicesimage m-auto"> <img src={ManagedSecurityServices} alt="ItInfrastructure" /></div>
                    <h1 className='text-sm text-center mb-4 absolute -bottom-16 text-[#939393]'>Managed Security Services</h1>
                    </Link>
                </div>  
                <div  onClick ={() => window.scrollTo(0, 0)} className="item w-[215px] h-[215px] shadow flex flex-col justify-center items-center rounded-2xl hover:shadow-inner bg-white relative">
                <Link to='/ManagedServices'>
                    <div className="servicesimage m-auto"> <img src={ManagedServices} alt="ItInfrastructure" /></div>
                    <h1 className='text-sm text-center mb-4 absolute -bottom-12 text-[#939393]'>Managed Services</h1>
                </Link>
                </div>  
                <div onClick ={() => window.scrollTo(0, 0)} className="item w-[215px] h-[215px] shadow flex flex-col justify-center items-center rounded-2xl hover:shadow-inner bg-white relative">
                <Link to='/CloudandSecurityServices'>
                    <div className="servicesimage m-auto"> <img src={CloudSecurity} alt="ItInfrastructure" /></div>
                    <h1 className='text-sm text-center mb-4 absolute -bottom-16 text-[#939393]'>Cloud and Security Services</h1>
                    </Link>
                </div>  
        </div>
        
    </div>
  )
}

export default Services