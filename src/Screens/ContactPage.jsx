import React from 'react'
import ContactPageImge from '../Assets/Pagescreens/ContactPage.png'
import './ContactPage.css'


const ContactPage = () => {
  return (
    <div>
            <div className="hero w-full h-full flex justify-center items-center pl-[140px] sm:pl-0">
    <div className=' w-full h-full rounded-[40px] flex justify-center items-center pt-16 gap-12 ' style={{background:'linear-gradient(to right, #EEEBEB, white)'}} >
            <div className="mt-[40px] object-contain ">
                <h1 className='font-extrabold text-[60px] xl:text-[35px] pl-2 md:text-[25px] sm:text-[18px] '>Contact Us</h1>
            </div>
            <div className="div image pt-6 mb-10 ">
          <img src={ContactPageImge} alt="ContactPageImge" width={450}/>
        </div>
        </div>
    </div>

    <div className='flex max-w-[80%] justify-center gap-9 items-center m-auto mt-10 flex-wrap'>
        <div className="lInputs w-[50%] flex flex-col flex-1 gap-9">
        <input type="text" placeholder="Name" className='input p-2' autoComplete='false'/>
            <input type="text" placeholder='Surname ' className='input p-2' autoComplete='false'/>
        </div>
        <div className="rightInputs w-[50%] flex flex-col flex-1 gap-9">
        <input type="text" placeholder='E-mail'className='input p-2' autoComplete='false' />
        <input type="text" placeholder='Phone number' className='input p-2 focus:border-[white] active:border-[white]'  autoComplete='false'/>
        </div>
    </div>
        <div className="checkListContainer">
            <h1 className=' text-[17px] pl-20 py-10 m-w-[80%] m-auto'>Which product do you like to receive information about?</h1>
                <div className="checkListContainer max-w-[80%] m-auto flex gap-9 flex-wrap justify-start items-center">
                    <div className="left flex flex-col gap-6 m-auto sm:min-w-[266px]">
                        <div className='item flex gap-4 w-full'>
                            <input type="checkbox" name="It" placeholder='It Infrusctucture' />
                            <h4 className='font-light text-[17px]'>IT Infrusctucture</h4>
                        </div>
                            <div className='item flex gap-4'>
                        <input type="checkbox" name="It" placeholder='It Infrusctucture' />
                            <h4 className='font-light text-[17px]'>Network Infrustructure</h4>
                        </div>
                        <div className='item flex gap-4'>
                            <input type="checkbox" name="It" placeholder='It Infrusctucture' />
                            <h4 className='font-light text-[17px]'>Cyber Security</h4>
                        </div>
                    </div>
                    <div className="right flex flex-col gap-6 m-auto ">
                            <div className='item flex gap-4'>
                                <input type="checkbox" name="It" placeholder='It Infrusctucture' />
                                <h4 className='font-light text-[17px]'>Managed Security Service</h4>
                            </div>
                                <div className='item flex gap-4'>
                            <input type="checkbox" name="It" placeholder='It Infrusctucture' />
                                <h4 className='font-light text-[17px]'>Managed Services</h4>
                            </div>
                            <div className='item flex gap-4'>
                                <input type="checkbox" name="It" placeholder='It Infrusctucture' />
                                <h4 className='font-light text-[17px]'>Cloud Systems and Security</h4>
                            </div>
                    </div>

                </div>
                    <div className="button"> 
                                        <button 
                                        className='w-[256px] h-[68px] p-4 text-[24px] rounded-[43px] mt-4 text-white mb-12 md:w-[148px] md:h-[39px] md:text-[15px] m-auto flex items-center justify-center' 
                                        style={{background:'linear-gradient(to right, #00F5FB , #DC04CB)', color:'white'}}>
                                            Submit
                                        </button>
                    </div>
        </div>
    </div>
  )
}

export default ContactPage