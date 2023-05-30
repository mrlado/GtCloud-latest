import React, { useContext, useEffect } from 'react'
import ITINF from '../Assets/Pagescreens/Asset 5@4x.png'
import { Loadingcontext } from '../Context/LoadingProvider'
import LoadingPage from '../Context/LoadingPage'
import azureLogo from '../Assets/AzureLogo.png'





const VendorPages = ({HeroTitle, HeroText, HeroImg, DescriptionTitle,textone,texttwo,textthree,textfoor,textfive,textsix,textseven }) => {
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
            { HeroTitle  && <h1 className='font-extrabold text-[60px] xl:text-[35px] pl-2 pr-20 md:text-[25px] sm:text-[18px] md:pr-5'>Vendors</h1>}
        </div>
        <div className="div image pt-6 mb-10">
         { HeroImg &&  <img src={HeroImg} alt="" width={450}/>}
        </div>
    </div>
</div>

<div className="productDesc w-full h-full p-10 mt-10  m-auto rounded-b-[170px] flex justify-center gap-12 flex-wrap">

    <div className='vendorItem flex object-contain justify-center items-center p-4 bg-[white] max-w-1/3 w-[410px] h-[203px] rounded-[38px] shadow-lg' >
        <a href="https://aws.amazon.com/" target="_blank">
            <img   src='data:image/png;base64,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' alt="aws" />
        </a>
    </div>
    <div className='vendorItem  flex object-contain justify-center items-center p-4 bg-[white] max-w-1/3 w-[410px] h-[203px] rounded-[38px] shadow-lg ' >
       <a href="https://azure.microsoft.com/en-us/" target="_blank">
        <img src={azureLogo} alt="azureLogo" className='max-h-[200px]' />
       </a> 
    </div>
    <div className='vendorItem  flex object-contain justify-center items-center p-4 bg-[white] max-w-1/3 w-[410px] h-[203px] rounded-[38px] shadow-lg' >
        <a href="https://www.oracle.com/cloud/" target="_blank">
        <img src='https://getcodify.com/wp-content/uploads/2022/03/cloud-diagram.png' alt="Oracle" className='max-h-[180px]'  />
        </a>
    </div>

    



</div>

</div>
  )
}

export default VendorPages