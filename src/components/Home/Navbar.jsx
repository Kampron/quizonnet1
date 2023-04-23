import React from 'react'

import { useState } from 'react'

import { motion } from 'framer-motion'

import styles from '../../styles'

import  menu  from '../../assets/menu.svg'
import  close  from '../../assets/close.svg'

import { navVariants } from '../../utils/motion'

import { navLinks } from '../../constants'

import { Link } from 'react-router-dom'



const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <motion.nav
      variants={navVariants}
      initial='hidden'
      whileInView='show'
      className={`${styles.xPaddings} py-6 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <nav className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
        <div className='logoDiv'>
          <img src="/logo-48.png" alt='logo' className='inline'/>
               <span>
                  <h1 className="logo text-[20px] leading-[30px] text-blueColor inline"><strong>uiz</strong>onnet</h1>
                </span> 
        </div>

        <ul className="sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-black`}
            >
              <Link to={nav.id}>
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>
         
        <div className="sm:hidden flex flex-1 justify-center items-center">
          <img src={toggle ? close : menu} 
            alt="menu"
            className="w-[28px] h-[28px] object- contain absolute top-5 right-5"
            onClick={() => setToggle((prev) => !prev)}
          />

          <div 
            className={`${toggle ? 'flex' : 'hidden'} p-6 bg-blue-gradient relative top-10 right-0
            my-10 w-full rounded-xl sidebar`}
          >
            <ul className="list-none flex flex-col justify-end items-center flex-1 ">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[20px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-black`}
                >
                  <Link to={nav.id}>
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </motion.nav>
  )
}

export default Navbar