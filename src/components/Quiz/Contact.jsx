import React from 'react'
import { contacts, socials } from '../../constants/Data'
import { motion } from 'framer-motion'
const input = "border-none outline-none mb-[0.5rem] py-[1rem] px-[1.5rem] bg-[#f3f3f3]"

const grid = 'w-[100%] grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))]  gap-[0.5rem]'

const Contact = () => {
  return (
    <div className='max-w-[1224px] min-h-screen pt-[7rem] px-[1rem]  sm:px-[1.5rem] mb-4 mx-auto'>
        <div className='text-center mb-[3rem] '>
            <span className='text-blueColor uppercase text-[0.75rem] font-[800] tracking-[5px]'>get in touch</span>
            <h1 className='text-white text-[2.5rem] sm:text-[3rem] relative'>Contact Me</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 bg-white rounded-[15px] max-w-[1100px] gap-[2rem] overflow-hidden ml-auto mr-auto p-[2rem]'>
            <div className=''>
                <h3 className='text-[1.5rem] mb-[1rem]'>Just Say Hi</h3>
                <p className='text-[0.85rem] mb-[1rem]'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita veritatis a minus nostrum, porro architecto impedit odit iure tempora quod tempore eum dolorem doloribus harum minima, labore, amet placeat accusantium.
                </p>
                {contacts.map((contact) => {
                    return (
                       <div 
                        className='flex items-center mt-[1rem]'
                        key={contact.id}
                        >
                         <div className='w-[40px] h-[40px] bg-[#8c12f0] rounded-[50%] text-white flex items-center justify-center mr-[1rem] '>
                            <span className='flex justify-center items-center'>
                                <img src={contact.icon} className='w-[25px] h-[25px]' />
                            </span>
                         </div>
                         <p className='text-[0.85rem]'>{contact.infoText}</p>
                       </div> 
                    )
                })}
                <div className='flex mt-[1rem]'>
                    {socials.map((social) => {
                        return(
                            <div 
                                className='mr-[1rem] cursor-pointer hover:opacity-[0.8] transition-all  '
                                key={social.id}>
                                <img src={social.icon } className='w-[20px] h-[20px]' />
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className=''>
                <h3 className='text-[1.5rem] mb-[1rem]'>Get In Touch</h3>

                <div className={grid}>
                    <input className={input}  type='text' placeholder='First Name' />
                    <input className={input}  type='text' placeholder='Second Name' />
                </div>

                <div className={grid}>
                    <input className={input} type='number' placeholder='Phone Number' />
                    <input className={input}  type='email' placeholder='Email' />
                </div>

                <div className={grid}>
                    <textarea 
                        className='border-none outline-none mb-[0.5rem] py-[1rem] px-[1.5rem] bg-[#f3f3f3] rounded-[5px] resize-none min-h-[150px]'
                        placeholder='message'>

                    </textarea>
                </div>
                <motion.div 
                    whileHover={{scale: 1.1}}
                    transition={{duration: 0.3}}
                    className='mt-[1rem] bg-[#8c12f0] py-[0.65rem] px-[1rem] rounded-[10px] w-[4.5rem] '>
                    <a className='text-white' href='#'>Send</a>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Contact