
import React from 'react'
import { motion } from 'framer-motion';
import styles from '../../styles'
import { slideIn, staggerContainer, textVariant } from '../../utils/motion';
import learn1 from '../../assets/learn1.png'


const Hero = () => {
  return (
    <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex flex-col`}
        >
            <div className="flex justify-center items-center flex-col z-10 relative">
                <motion.h1
                    variants={textVariant(1.1)}
                    className={styles.heroHeading}
                >
                    Quiz Master
                </motion.h1>
                <motion.div
                    variants={textVariant(1.2)}
                    className="flex flex-row justify-center items-center"
                >
                    <h1 className={styles.heroHeading}>Prepare for your final exams!</h1>
                </motion.div>
            </div>
            <motion.div
                variants={slideIn('right', 'tween', 0.2, 1)}
                className="relative w-full md:-mt-[20px] -mt-[12px]"
            >
                <img
                    src={learn1}
                    alt='learn'
                    className="w-full sm:h-[500px] h-[350px] object-contain z-10 relative"
                />
            </motion.div>
        </motion.div>
    </section>
  )
}

export default Hero