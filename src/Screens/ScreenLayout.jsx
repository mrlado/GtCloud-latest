import React, { useContext, useEffect } from 'react'
import ITINF from '../Assets/Pagescreens/Asset 5@4x.png'
import { Loadingcontext } from '../Context/LoadingProvider'
import LoadingPage from '../Context/LoadingPage'
import { motion } from 'framer-motion'


const ScreenLayout = ({HeroTitle, HeroText, HeroImg, DescriptionTitle,textone,texttwo,textthree,textfoor,textfive,textsix,textseven }) => {
    const {Loading,setLoading} = useContext(Loadingcontext)

  useEffect(()=>{
        setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },1700)

  },[HeroTitle])

  return (<div>
    <div className="hero w-full h-full flex justify-center items-center pl-[140px] sm:pl-0">
        <div className=' w-full h-full rounded-[40px] flex justify-center items-center pt-16 ' style={{background:'linear-gradient(to right, #EEEBEB, white)'}} >
            <div className="mt-[40px] object-contain ">
            { HeroTitle  && <motion.h1  initial={{x:-1500}} animate={{x:0}} transition={{ delay: 1 }} className='font-extrabold text-[60px] xl:text-[35px] pl-2 md:text-[25px] sm:text-[18px] '>{HeroTitle}</motion.h1>}
         {HeroText &&   <motion.h3 initial={{x:-1500}} animate={{x:0}} transition={{ delay: 1.5 }} className='max-w-[550px] mt-4 text-[#939393] text-base pl-2 xl:text-[14px] md:text-[12px] sm:text-[10px] mb-10'>{HeroText}  
            </motion.h3>}
        </div>
        <motion.div initial={{x:1000}} animate={{x:0}} transition={{ delay: 2 }} className="div image pt-6 mb-10">
         { HeroImg &&  <img   src={HeroImg} alt="" width={450}/>}
        </motion.div>
    </div>
</div>

<div className="productDesc w-full h-full p-10 mt-10 text-[white] m-auto rounded-b-[170px] flex flex-col justify-center" style={{background:'linear-gradient(to right, #00F5FB, #3FA9F5)'}}>
    {DescriptionTitle && <h1 className='Title text-center text-[35px] font-extrabold md:text-[15px]'>{DescriptionTitle}</h1>}
    <div className='ItemContainer max-w-[50%] m-auto'>
{textone &&    <div className="item flex justify-start items-center gap-2 py-5">
        <div className="divider min-w-[34px] min-h-[9px] bg-[white] rounded-3xl md:min-w-[7px] md:min-h-[2px]"></div>
        <h3 className='md:text-[12px]'>{textone}
        </h3>
    </div>}
{texttwo &&    <div className="item flex justify-start items-center gap-2 py-5">
        <div className="divider min-w-[34px] min-h-[9px] bg-[white] rounded-3xl md:min-w-[7px] md:min-h-[2px]"></div>
        <h3 className='md:text-[12px]'>{texttwo}
        </h3>
    </div>}
{textthree &&    <div className="item flex justify-start items-center gap-2 py-5">
        <div className="divider min-w-[34px] min-h-[9px] bg-[white] rounded-3xl md:min-w-[7px] md:min-h-[2px]"></div>
        <h3 className='md:text-[12px]'>{textthree}
        </h3>
    </div>}
{textfoor &&    <div className="item flex justify-start items-center gap-2 py-5">
        <div className="divider min-w-[34px] min-h-[9px] bg-[white] rounded-3xl md:min-w-[7px] md:min-h-[2px]"></div>
        <h3 className='md:text-[12px]'>{textfoor}
        </h3>
    </div>}
    {textfive &&    <div className="item flex justify-start items-center gap-2 py-5">
        <div className="divider min-w-[34px] min-h-[9px] bg-[white] rounded-3xl md:min-w-[7px] md:min-h-[2px]"></div>
        <h3 className='md:text-[12px]'>Virtual servers and Desktop infrastructure - Consolidation of the physical
            environment into virtual one in order to ensure proper resource allocation, management and costs optimization.
        </h3>
    </div>}
    {textsix &&    <div className="item flex justify-start items-center gap-2 py-5">
        <div className="divider min-w-[34px] min-h-[9px] bg-[white] rounded-3xl md:min-w-[7px] md:min-h-[2px]"></div>
        <h3 className='md:text-[12px]'>Virtual servers and Desktop infrastructure - Consolidation of the physical
            environment into virtual one in order to ensure proper resource allocation, management and costs optimization.
        </h3>
    </div>}
    {textseven &&    <div className="item flex justify-start items-center gap-2 py-5">
        <div className="divider min-w-[34px] min-h-[9px] bg-[white] rounded-3xl md:min-w-[7px] md:min-h-[2px]"></div>
        <h3 className='md:text-[12px]'>Virtual servers and Desktop infrastructure - Consolidation of the physical
            environment into virtual one in order to ensure proper resource allocation, management and costs optimization.
        </h3>
    </div>}
</div>
</div>

</div>
  )
}

export default ScreenLayout