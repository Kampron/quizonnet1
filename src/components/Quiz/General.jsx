import React from 'react'
import { TypingText } from '../Home/CustomText'
import {  motion } from 'framer-motion'
import { moveVariants, staggerContainer } from '../../utils/motion'
import { useAuthContext } from '../../hooks/useAuthContext'

const div = " bg-[rgba(255,255,255,0.150)] text-white py-[0.35rem] px-[1rem] rounded-[25px] text-[0.85rem] cursor-pointer hidden md:flex "
 
const General = () => {
  const {user} = useAuthContext()

  return (
    <motion.div
      initial ={{ y: -15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 2, delay: 0.5 }}
      className='max-w-[1224px] min-h-screen pt-[7rem] px-[1.5rem] my-0 mx-auto flex flex-col items-center'
    >
        <div className='w-[200px] h-[200px]'>
            <img src='/general.png' alt='general' className='w-full h-full rounded-[50%] object-cover' />
        </div>
        <div className='mt-[1rem] flex flex-col items-center relative text-white'>
            <h3 className='text-[1.5rem] sm:text-[2rem]'>
                Hello, Quizzer  <span className='text-blueColor capitalize'>{ user && user.email}</span>
            </h3>
            <motion.span 
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              className='text-white opacity-[0.5] text-[0.85rem]'
            >
              <TypingText title="| Welcome to Quizonnet, the NO.1 Quiz Hub " textStyles="text-center" />
            </motion.span>
        <span className='mt-[2rem] text-white text-center text-[2.5rem] leading-[1.3] sm:text-[3.5rem] md:text-[5rem]'>
          General Quizzes <br />
          to test and update your <br />
          knowledge base.
        </span>
        <motion.a 
          variants={moveVariants}
          animate="animation"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          href='#'
          className='mt-[3rem] text-black bg-white py-[0.65rem] px-[1rem] rounded-[10px] capitalize text-[0.85rem] ' 
          >
          start quiz here
        </motion.a>
        <div className={div + "absolute right-[-1rem] top-[3.5rem]"}>Riddles</div>
        <div className={div + " absolute top-[4rem] left-[1rem] "}>Aptitude Test</div>
        <div className={div + "absolute bottom-[3.5rem] left-[3.5rem] "}>Current Affairs</div>
        </div>
        
    </motion.div>
  )
}

export default General