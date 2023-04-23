import React from 'react'
import {motion} from 'framer-motion'
const Waec = () => {
  return (
    <div className='max-w-[1224px] min-h-screen pt-[7rem] px-[1rem]  sm:px-[1.5rem] my-0 mx-auto' >
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{y: [-50, 0], opacity: 1 }}
            className='text-center mb-[3rem] '>
            <span className='text-blueColor uppercase text-[0.75rem] font-[800] tracking-[5px] '>Past Questions</span>
            <h1 className='text-white text-[2.5rem] sm:text-[3rem] relative '>Waec</h1>
        </motion.div>
        <div className='grid grid-cols-1  md:grid-cols-2 place-items-center relative'>
            <motion.div 
                initial={{ x: 0, opacity: 0 }}
                whileInView={{ x: [-250, 0], opacity: 1 }}
                transition={{ duration: 1 }}
                className='bg-[#8c12f0] max-w-[350px] h-[350px] justify-center rounded-[5px] shadow-[0_0_20px_#8c12f0] '>
                <img className='w-[100%] h-[100%] object-cover ' src='/WAEC.png' alt='waec_img' />
            </motion.div>

            <motion.div 
                nitial={{ x: 0, opacity: 0 }}
                whileInView={{ x: [250, 0], opacity: 1 }}
                transition={{ duration: 1 }}
                className='text-white p-0 md:p-[1rem] mt-[2rem] flex flex-col '>
                <p className='text-[1.5rem] mb-[1rem] max-w-[450px]'>WAEC has been known for years to repeat old past questions usually from the past 10-15 years. So what this means is you should be regularly practicing with your past question</p>
            </motion.div>
        </div>
    </div>
  )
}

export default Waec