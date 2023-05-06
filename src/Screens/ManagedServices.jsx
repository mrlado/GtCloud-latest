import React, { useContext, useEffect } from 'react'
import ITINF from '../Assets/Pagescreens/Asset 5@4x.png'
import { Loadingcontext } from '../Context/LoadingProvider'
import LoadingPage from '../Context/LoadingPage'

const ManagedServices = ({HeroTitle, HeroText, HeroImg, DescriptionTitle,textone,texttwo,textthree,textfoor,textfive,textsix,textseven }) => {
    const {Loading,setLoading} = useContext(Loadingcontext)

  useEffect(()=>{
        setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },1700)

  },[HeroTitle])




  return (<div>
    {Loading === true && <LoadingPage/> }
    <div className="hero w-full h-full flex justify-center items-center pl-[140px] sm:pl-0">
    <div className=' w-full h-full rounded-[40px] flex justify-center items-center pt-16 ' style={{background:'linear-gradient(to right, #EEEBEB, white)'}} >
        <div className="mt-[40px] object-contain ">
            { HeroTitle  && <h1 className='font-extrabold text-[60px] xl:text-[35px] pl-2 md:text-[25px] sm:text-[18px] '>{HeroTitle}</h1>}
         {HeroText &&   <h3 className='max-w-[550px] mt-4 text-[#939393] text-base pl-2 xl:text-[14px] md:text-[12px] sm:text-[10px] mb-10'>{HeroText}  
            </h3>}
        </div>
        <div className="div image pt-6 mb-10">
         { HeroImg &&  <img src={HeroImg} alt="" width={450}/>}
        </div>
    </div>
</div>

<div className="productDesc w-full h-full p-10 mt-10  m-auto rounded-b-[170px] flex flex-col justify-center" style={{background:'linear-gradient(to right, #00F5FB, #3FA9F5)'}}>
    {DescriptionTitle && <h1 className='Title text-center text-[35px] text-[white] font-extrabold md:text-[25px] mb-8'>{DescriptionTitle}</h1>}
    <div className='ItemContainer max-w-[80%] m-auto flex flex-wrap justify-center items-center gap-5'>
        <div className="item bg-[white] p-10 m-auto flex-1 rounded-3xl min-h-[570px]  flex flex-col justify-center items-center">
            <h3 className='text-center w-full  pb-6 text-3xl font-medium'>IT (Technology) Consulting</h3>
            <h4 className='text-center'>our IT experts understand what is necessary for effective interaction of people, processes and technologies in order to be accomplished the strategic goals of your organization. With the help of our engineering experience and strategy, you will be able to employ technology in your business to create something unique, promote growth and accelerate results.</h4>
        </div>
        <div className="item bg-[white] p-10 m-auto flex-1 rounded-3xl min-h-[570px]  flex flex-col justify-center items-center">
            <h3 className='text-center w-full text-3xl font-medium pb-6'>Architectural Services</h3>
            <h4 className='text-center'>digital transformation is the basis of your business, we simplify the 
            ntegration process of technologies from planning to implementation. Our
            services include IT infrastructure
            research and assessment, design
            creation, financial and technical
            analysis, test mode possibility and
            validation of proposed design, and
            implementation and configuration of technical solutions.</h4>
        </div>
        <div className="item bg-[white] p-10 m-auto flex-1 rounded-3xl min-h-[570px] flex flex-col justify-center items-center">
            <h3 className='text-center w-full text-3xl font-medium pb-6'>Technical support & Managed services</h3>
            <h4 className='text-center'> zwe offer a wide range of technical
support services that will be customized according to your needs. Our support services focus on risk reduction, business continuity and value creation. It includes complete technical support of IT infrastructure as well as individual IT system management and administration services.</h4>
        </div>
    </div>
</div>

</div>
  )
}

export default ManagedServices