import React from 'react'
import { socials } from '../../constants/Data'
import { BsArrowUpRightCircle }from 'react-icons/bs'


const QuizFooter = () => {
  return (
    <div className='flex justify-between items-center flex-wrap  ml-auto mr-auto gap-x-[2rem] text-white py-[1rem] px-[3rem]'>
         <button type='button' className='flex items-center h-fit py-4 px-6 bg-[#25618b rounded-[32px] gap-[12px]'>
            <BsArrowUpRightCircle />
            <span className='font-normal text-[12px] text-blueColor'>
              Subscribe
            </span>
          </button>

         <div className='copyright' >
            <p className='text-[0.85rem]'>
                Copyright &copy; 2023 All rights reserved | Made by  <span className='text-blueColor'> Quizonnet Inc.</span>
            </p>
         </div>
         <div className='flex items-center gap-[1rem] '>
           <h4 className='text-[0.85rem]'>Follow Me</h4>
           <div className='h-[2px] w-[3rem] bg-blueColor'></div>
           <div className='flex gap-[0.5rem] transition-[0.3s]'>
            {socials.map((social) => {
                return(
                    <div key={social.id}>
                      <img src={social.icon} className='opacity-[0.7] hover:opacity-[1]' width='20px' height="20px" />  
                    </div>
                )
            })}
           </div>
         </div>
    </div>
  )
}

export default QuizFooter