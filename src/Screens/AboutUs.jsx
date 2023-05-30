import React, { useContext, useEffect } from 'react'
import ITINF from '../Assets/Pagescreens/Asset 5@4x.png'
import { Loadingcontext } from '../Context/LoadingProvider'
import LoadingPage from '../Context/LoadingPage'
import azureLogo from '../Assets/AzureLogo.png'
import BookaCall from '../Components/HomePage/BookaCall'





const AboutUs = ({HeroTitle, HeroText, HeroImg, DescriptionTitle,textone,texttwo,textthree,textfoor,textfive,textsix,textseven }) => {
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
            { HeroTitle  && <h1 className='font-extrabold text-[60px] xl:text-[35px] pl-2 pr-20 md:text-[25px] sm:text-[18px] md:pr-5 '>About us</h1>}
        </div>
        <div className="div image pt-6 mb-10">
         { HeroImg &&  <img src={HeroImg} alt="" width={450}/>}
        </div>
    </div>
</div>

<div className="productDesc w-full h-full p-10 mt-10  m-auto rounded-b-[170px] flex justify-center gap-12 flex-col">

    <div className=' PartnerItem w-[80%] bg-[white] flex gap-12 justify-center items-center m-auto rounded-[38px] shadow-lg p-12 md:w-full md:ml-0'>
            <h1 className='text-[12px]'>
            <span className='text-xl font-bold'>The Public Cloud Challenge</span> 
            <br/>
            <br/>
            <span className='ml-4'></span>
            <br/>
            <span className='ml-4'></span>It’s almost certain that your Enterprise customers will be asking you about using Public Cloud providers – and if they’re not, they’re probably asking someone else, or using it already! <span className='font-bold'> Gt cloud </span> can help you to be a single, trusted supplier of all their cloud services, by blending Public and dedicated clouds into a single service offering. The <span className='font-bold'> Gt cloud </span> cloud management platform provides the controls you need to provide a blended cloud service that: – Gives your customers management and control over multiple clouds from one, easy to use interface – Addresses your customers’ concerns about “rogue” use of the public cloud – Leverages your investment in systems such as billing, service management and inventory – Stops your customers going elsewhere for their cloud services.
            <br/>
            <br/>
            <br/>
            <span className='text-xl font-bold'> Overview </span>
            <br/>
            <br/>
            <span className='ml-4'></span> System integrators (SI) bring together the skills, software, hardware and techniques to deliver its customers a complete customer solution and so cloud computing has become an additional service offering for them. Thanks to their expertise, cloud system integrators can assist in cloud migration and integration.
            <br/>
            <br/>
            <br/>
            In order to cover their offer of business solutions to medium and large companies, <span className='font-bold'> Gt cloud </span> provides top cloud system integrators with a cloud platform that lets them have a specific cloud solution for each customer while getting the economy and speed of delivery of running all services on a unified cloud portal.
            <br/>
            <span className='font-bold'> Gt cloud </span>helps top cloud system integrators in their aim to help companies to build up and implement a multi cloud strategy, as well as handle that integration of services.
            <br/>
            <br/>
            <br/>
            <span className='font-bold'> Gt cloud </span> helps leverage complex hybrid cloud environments for competitive advantage, while simplifying workflow for cloud users. Top cloud system integrators all over the globe are getting real business benefits by offering new features and functionalities to their customers that are also helping them reach their company’s goals. 
            
            <br/> <span className='ml-4 text-[blue]' >Do you want to see Gt cloud in action? <span> Contact us today!</span></span>
            <div className='w-full flex justify-center items-center mt-8'>
            <BookaCall/>
            </div>

            </h1>
    </div>
    



</div>

</div>
  )
}

export default AboutUs