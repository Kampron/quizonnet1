import { motion } from 'framer-motion';
import styles from '../../styles';
import { socials } from '../../constants/index'
import { footerVariants } from '../../utils/motion'

import Logo from './Logo'

const Footer = () => {
  return (
    
    <motion.footer
      variants={{footerVariants}}
      initial="hidden"
      whileInView="show"
      className={`${styles.paddings} py-8 relative`}
    >
      <div className="footer-gradient" />

      <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
        <div className='flex items-center justify-between flex-wrap gap-5'>
          <h4 className='font-bold md:text-[64px] text-[44px] text-black'>
            Subscribe to Quizonnet
          </h4>
          <button type='button' className='flex items-center h-fit py-4 px-6 bg-[#25618b rounded-[32px] gap-[12px]'>

            <img src='/arrow1.svg' alt="arrow" className='w-[24px] h-[24px] object-contain'/>

            <span className='font-normal text-[16px] text-black'>
              SUBSCRIBE
            </span>
          </button>
        </div>

        <div className='flex flex-col'>
          <div className='mb-[50px] h-[2px] bg-black opacity-30' />

          <div className='flex items-center justify-between flex-wrap gap-4'>
            <img src='logo-48.png' alt='logo' />
            <p className='font-normal text-[14px] text-black opacity-80'>
              Copyright © 2022 - 2023 Quizonnet. All rights reserved.
            </p>
            <div className='flex gap-4'>
             {socials.map((social) => (
              <img 
                key={social.name}
                src={social.url}
                alt={social.name}
                className='w-[24px] h-[24px] object-contain cursor-pointer'
              />
             ))}  
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer