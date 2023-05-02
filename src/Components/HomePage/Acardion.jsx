import React, { useState } from 'react'
import AcardionLogo from '../../Assets/Group 267.png'

const Acardion = () => {
    const [divideropen,setDividerOpen] = useState({
        one:false,
        two:false,
        three:false,
        for:false,
        five:false,
        six:false
    })
  return (
    <div className='flex justify-center items-center w-full h-full'>
        <div className="acardioncontainer max-w-[1169px] w-full h-full mt-16">
            <div className='ItemConteiner' onClick={()=>{setDividerOpen(prev => ({...prev,one:!divideropen.one}))}}>
                <div className="item flex justify-between items-center px-16 sm:px-10">
                    <h1 className='text-[#707070] text-[37px] lg:text-base md:text-sm '>Digital Transformation</h1>
                    <div className="image"><img src={AcardionLogo} alt="AcardionLogo"  className={`lg:w-[22px] lg:h-[22px] ${divideropen.one &&  'rotate-90' }`}/></div>
                        
                </div>
                {divideropen.one ===true  && 
                        <h1 className='sm:text-xs text-[#939393] my-4 px-16'>
                        Digital transformation leverages state-of-the-art digital technologies, encompassing public, private, and hybrid cloud platforms, to innovate or adapt business processes, culture, and customer experiences in response to evolving business and market dynamics.
                        <br/>
                        We help businesses reshape and redefine relationships with customers, employees, and partners. Digital transformation encompasses everything from revitalizing applications and devising new business models to creating novel products and services for customers.
                        <br/>
                        Agile Software Development
                        Quality and Performance Engineering
                        DevOps Services and Solutions
                        Mobile-Centric Systems</h1>}
            </div>
            <div className='ItemConteiner' onClick={()=>{setDividerOpen(prev => ({...prev,two:!divideropen.two}))}}>
                <div className="item flex justify-between items-center px-16 sm:px-10">
                    <h1 className='text-[#707070] text-[37px] lg:text-base md:text-sm '>Tech-Driven Progress</h1>
                    <div className="image"><img src={AcardionLogo} alt="AcardionLogo"  className={`lg:w-[22px] lg:h-[22px] ${divideropen.two &&  'rotate-90' }`}/></div>
                        
                </div>
                {divideropen.two ===true  && 
                        <h1 className='sm:text-xs text-[#939393] my-4 px-16'>Digital transformation leverages state-of-the-art digital technologies, encompassing public, private, and hybrid cloud platforms, to innovate or adapt business processes, culture, and customer experiences in response to evolving business and market dynamics.

                        We help businesses reshape and redefine relationships with customers, employees, and partners. Digital transformation encompasses everything from revitalizing applications and devising new business models to creating novel products and services for customers.
                        
                        Agile Software Development
                        Quality and Performance Engineering
                        DevOps Services and Solutions
                        Mobile-Centric Systems</h1>}
            </div>
            <div className='ItemConteiner' onClick={()=>{setDividerOpen(prev => ({...prev,three:!divideropen.three}))}}>
                <div className="item flex justify-between items-center px-16 sm:px-10">
                    <h1 className='text-[#707070] text-[37px] lg:text-base md:text-sm '>Driving Innovation</h1>
                    <div className="image"><img src={AcardionLogo} alt="AcardionLogo" className={`lg:w-[22px] lg:h-[22px] ${divideropen.three &&  'rotate-90' }`} /></div>
                        
                </div>
                {divideropen.three ===true  && 
                        <h1 className='sm:text-xs text-[#939393] my-4'>Digital transformation leverages state-of-the-art digital technologies, encompassing public, private, and hybrid cloud platforms, to innovate or adapt business processes, culture, and customer experiences in response to evolving business and market dynamics.

                        We help businesses reshape and redefine relationships with customers, employees, and partners. Digital transformation encompasses everything from revitalizing applications and devising new business models to creating novel products and services for customers.
                        
                        Agile Software Development
                        Quality and Performance Engineering
                        DevOps Services and Solutions
                        Mobile-Centric Systems</h1>}
            </div>
            <div className='ItemConteiner' onClick={()=>{setDividerOpen(prev => ({...prev,for:!divideropen.for}))}}>
                <div className="item flex justify-between items-center px-16 sm:px-10">
                    <h1 className='text-[#707070] text-[37px] lg:text-base md:text-sm '>Risk Management</h1>
                    <div className="image"><img src={AcardionLogo} alt="AcardionLogo" className={`lg:w-[22px] lg:h-[22px] ${divideropen.for &&  'rotate-90' }`} /></div>
                        
                </div>
                {divideropen.for ===true  && 
                        <h1 className='sm:text-xs text-[#939393] my-4'>Digital transformation leverages state-of-the-art digital technologies, encompassing public, private, and hybrid cloud platforms, to innovate or adapt business processes, culture, and customer experiences in response to evolving business and market dynamics.

                        We help businesses reshape and redefine relationships with customers, employees, and partners. Digital transformation encompasses everything from revitalizing applications and devising new business models to creating novel products and services for customers.
                        
                        Agile Software Development
                        Quality and Performance Engineering
                        DevOps Services and Solutions
                        Mobile-Centric Systems</h1>}
            </div>
            <div className='ItemConteiner' onClick={()=>{setDividerOpen(prev => ({...prev,five:!divideropen.five}))}}>
                <div className="item flex justify-between items-center px-16 sm:px-10">
                    <h1 className='text-[#707070] text-[37px] lg:text-base md:text-sm '>Enhancing IT Cost-Effectiveness</h1>
                    <div className="image"><img src={AcardionLogo} alt="AcardionLogo" className={`lg:w-[22px] lg:h-[22px] ${divideropen.five &&  'rotate-90' }`} /></div>
                        
                </div>
                {divideropen.five ===true  && 
                        <h1 className='sm:text-xs text-[#939393] my-4'>Digital transformation leverages state-of-the-art digital technologies, encompassing public, private, and hybrid cloud platforms, to innovate or adapt business processes, culture, and customer experiences in response to evolving business and market dynamics.

                        We help businesses reshape and redefine relationships with customers, employees, and partners. Digital transformation encompasses everything from revitalizing applications and devising new business models to creating novel products and services for customers.
                        
                        Agile Software Development
                        Quality and Performance Engineering
                        DevOps Services and Solutions
                        Mobile-Centric Systems</h1>}
            </div>
            <div className='ItemConteiner' onClick={()=>{setDividerOpen(prev => ({...prev,six:!divideropen.six}))}}>
                <div className="item flex justify-between items-center px-16 sm:px-10">
                    <h1 className='text-[#707070] text-[37px] lg:text-base md:text-sm  sm:text-xs'>Strengthening Enterprises through Technology</h1>
                    <div className="image"><img src={AcardionLogo} alt="AcardionLogo" className={`lg:w-[22px] lg:h-[22px] ${divideropen.six &&  'rotate-90' }`} /></div>
                        
                </div>
                {divideropen.six ===true  && 
                        <h1 className='sm:text-xs text-[#939393] my-4'>Digital transformation leverages state-of-the-art digital technologies, encompassing public, private, and hybrid cloud platforms, to innovate or adapt business processes, culture, and customer experiences in response to evolving business and market dynamics.

                        We help businesses reshape and redefine relationships with customers, employees, and partners. Digital transformation encompasses everything from revitalizing applications and devising new business models to creating novel products and services for customers.
                        
                        Agile Software Development
                        Quality and Performance Engineering
                        DevOps Services and Solutions
                        Mobile-Centric Systems</h1>}
            </div>
        </div>
        
    </div>
  )
}

export default Acardion