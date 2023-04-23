import React from 'react'

import { motion } from 'framer-motion';
import { TypingText } from './CustomText';

import styles from '../../styles';
import { fadeIn, staggerContainer } from '../../utils/motion';

const About = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
        <div className="gradient-02 z-0" />
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
        >
            <TypingText title="| About Quizonnet" textStyles="text-center" />
            <motion.span 
              variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-black"  
            >
                As the adage goes <img src="/arrow.svg" alt='clock' className=' w-[30px] h-[30px] inline'/>  Pratice makes man perfect.<span className="font-extrabold text-black">Quizonnet</span> is specifically designed to help students revise, learn and practice on past <span className="font-extrabold text-black">Wassce, Bece and the most examinable questions </span>Students have access to a myrid of questions pratically designed to test their smartness and time conciousness. Quizzes are taken with a <span className="font-extrabold text-black">standard timer</span> <img src="/clock.svg" alt='clock' className=' w-[30px] h-[30px] inline'/> in respect to the actual time awarded for the particular subject in a real exam sitting. Students are hence advised to practice within the timings to <span className="font-extrabold text-black">prepare</span> <img src="/check.svg" alt='clock' className=' w-[30px] h-[30px] inline'/>them for their respective final exams...<img src="/rocket.svg" alt='clock' className=' w-[30px] h-[30px] inline'/><img src="/smiley-face.svg" alt='clock' className=' w-[30px] h-[30px] inline'/>
            </motion.span>
        </motion.div>
    </section>
  )
}

export default About