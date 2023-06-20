import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MdOutlineLogout } from "react-icons/md";
import { RxAvatar } from "react-icons/rx"
import { HiMenuAlt3, HiX } from "react-icons/hi"
import { IoMdArrowDropdown } from "react-icons/io"
import { useLogout } from '../../hooks/useLogout';
import { useAuthContext } from '../../hooks/useAuthContext'


 const a = "flex items-center justify-center text-black py-[12px] text-[15px] px-[16px] block  text-left hover:bg-[#ddd] w-full"
  const aa = "flex items-center justify-center text-black py-[12px] text-[25px] px-[16px] block  hover:bg-[#ddd] w-full"
import { useState } from 'react';
import { menVariants, navLinkVariants } from '../../utils/motion';
import useIdle from '../../hooks/useIdleTimer';
import { useNavigate } from 'react-router-dom'

const header =  "fixed w-full top-0  z-10"
const headerActive =  "fixed w-full top-0  z-10 bg-[rgba(255,255,255,0.15)] backdrop-blur-sm "
const QuizNav = () => {
    const { user } = useAuthContext()
    const nav = useNavigate()
    const { logout } = useLogout()
    const { isIdle } = useIdle({ onIdle: logout , idleTimer: 30})
    const [toggle, setToggle ] = useState(false)
    const [scroll, setScroll] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 20)
        })
    },[])

    const handleClick = () => {
        logout()
    }
  return (
    
    <motion.div
        initial={{ y: -25 }}
        animate={{ y: -5 }}
        transition={{ duration: 0.5 }} 
        className={scroll ? headerActive : header}
    >
        <div className='relative max-w-[1224px] flex justify-between items-center px-[1.2rem] py-[2rem] mx-auto'>
            <div className='flex justify-center items-center'>
                <a href='/quiz'>
                    <img src="/logo-48.png" alt='logo' className='inline'/>
                    <span>
                    <h1 className=" logo text-[20px] leading-[30px] text-blueColor inline">                
                    <strong>uiz</strong>onnet</h1>
                    </span>
                </a>    
                
         </div>
         <ul className='hidden md:flex'>
            <li className='ml-[3rem] group/item'>
                <button className=" text-[13px] border-none outline-none text-white py-[14px] px-[16px] bg-inherit m-0 flex items-center opacity-[0.7] hover:opacity-[1] ">
                    GENERAL
                    <IoMdArrowDropdown color='white' />
                </button>
                <div className=' group-hover/item:flex hidden
                    flex-col justify-center items-center absolute bg-[#f3f3f3] min-w-[160px] z-10 '>
                    <a  className={a} href='#'>Aptitude Test</a>
                    <a className={a}  href='#'>Puzzles</a>
                    <a className={a} href='#'>Riddles</a>
                </div>
            </li>

            <li className='ml-[3rem] group/item'>
                <button className=" text-[13px] border-none outline-none text-white py-[14px] px-[16px] bg-inherit m-0 flex items-center opacity-[0.7] hover:opacity-[1] ">
                    BECE
                    <IoMdArrowDropdown color='white' />
                </button>
                <div className=' group-hover/item:flex hidden
                    flex-col justify-center items-center absolute bg-[#f3f3f3] min-w-[160px] z-10 '>
                    <a  className={a} href='#'>English</a>
                    <a className={a}  href='#'>Maths</a>
                    <a className={a} href='#'>Science</a>
                </div>
            </li>
            <li className='ml-[3rem] group/item'>
                <button className=" text-[13px] border-none outline-none text-white py-[14px] px-[16px] bg-inherit m-0 flex items-center opacity-[0.7] hover:opacity-[1] ">
                    WASSCE
                    <IoMdArrowDropdown color='white' />
                </button>
                <div className=' group-hover/item:flex hidden
                    flex-col justify-center items-center absolute bg-[#f3f3f3] min-w-[160px] z-10 '>
                    <a  className={a} href='/englishshs'>English</a>
                    <a className={a}  href='#'>Maths</a>
                    <a className={a} href='#'>Science</a>
                </div>
            </li>
    </ul>
         <div className='hidden space-x-5 md:flex'>
            <li className='ml-[3rem] opacity-[0.6] hover:opacity-[1] text-[0.85rem] text-white font-normal capitalise '>
                { user && user.user.email}
            </li>
            <RxAvatar className='opacity-[0.6] hover:opacity-[1] cursor-pointer' color='white' size={20}/>
                 
            <MdOutlineLogout 
                className='opacity-[0.6] hover:opacity-[1] cursor-pointer' color='white' size={20}
                onClick= {handleClick}
            />
         </div>
         <div className=' w-[35px] h-[35px] rounded-[50%] items-center justify-center  md:hidden sm:flex'>
            <HiMenuAlt3 color='white'
                className='w-[70%] h-[70%] cursor-pointer'
                onClick={() => {
                    setToggle(true)
                }}
            />   
         </div>
         <motion.div
            className='bg-black w-[4rem] h-[4rem] fixed rounded-[50%] right-0 top-0 close menu'
            variants={menVariants}
            initial="hidden"
            animate={toggle ? "visible" : "hidden"}
         ></motion.div>
            <motion.div 
            variants={navLinkVariants}
            animate={toggle ? "visible" : "hidden"}
            className='fixed top-[2rem] left-0 w-full flex items-center justify-center flex-col h-[100vh] '>
              <HiX color='white'  className='w-[2rem] h-[2rem] absolute top-[2rem] right-[2rem] cursor-pointer' onClick={() => {
                setToggle(false)
            }}
            />
               <li className='ml-[3rem] group/item'>
                <button className=" text-[36px] border-none outline-none text-white py-[14px] px-[16px] bg-inherit m-0 flex items-center opacity-[0.7] hover:opacity-[1] ">
                    General
                    <IoMdArrowDropdown color='white' />
                </button>
                <div className=' group-hover/item:flex hidden
                    flex-col justify-center items-center bg-[#f3f3f3] min-w-[250px] h-[300px] z-10 '>
                    <a  className={aa} href='#'>Aptitude Test</a>
                    <a className={aa}  href='#'>Puzzles</a>
                    <a className={aa} href='#'>Riddles</a>
                </div>
            </li>
            <li className='ml-[3rem] group/item'>
                <button className=" text-[36px] border-none outline-none text-white py-[14px] px-[16px] bg-inherit m-0 flex items-center opacity-[0.7] hover:opacity-[1] ">
                    Bece
                    <IoMdArrowDropdown color='white' />
                </button>
                <div className=' group-hover/item:flex hidden
                    flex-col justify-center items-center bg-[#f3f3f3] min-w-[250px] h-[300px] z-10 '>
                    <a  className={aa} href='#'>English</a>
                    <a className={aa}  href='#'>Maths</a>
                    <a className={aa} href='#'>Science</a>
                </div>
            </li>
            <li className='ml-[3rem] group/item'>
                <button className=" text-[36px] border-none outline-none text-white py-[14px] px-[16px] bg-inherit m-0 flex items-center opacity-[0.7] hover:opacity-[1] ">
                    Wassce
                    <IoMdArrowDropdown color='white' />
                </button>
                <div className=' group-hover/item:flex hidden
                    flex-col justify-center items-center bg-[#f3f3f3] min-w-[250px] h-[300px] z-10 '>
                    <a  className={aa} href='/englishshs'>English</a>
                    <a className={aa}  href='#'>Maths</a>
                    <a className={aa} href='#'>Science</a>
                </div>
            </li>
            
            <li>
               <button onClick={handleClick} className=" text-[36px] border-none outline-none text-white py-[14px] px-[16px] bg-inherit m-0 flex items-center opacity-[0.7] hover:opacity-[1] ">
                    Logout
                </button> 
            </li>
            </motion.div>
        </div>
    </motion.div>
  )
}

export default QuizNav