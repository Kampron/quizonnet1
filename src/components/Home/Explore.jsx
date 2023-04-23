import React from 'react'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { TypingText, TitleText } from './CustomText';
import styles from '../../styles';
import { staggerContainer } from '../../utils/motion';
import { exploreSubjects } from '../../constants';
import ExploreCard from './ExploreCard';


const Explore = () => {
  const [active, setActive] = useState('subject-3')
  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`{$styles.innerWidth} mx-auto flex flex-col `}
      >
        <TypingText title="| Free Quizzes" textStyles="text-center"/>
        <TitleText title={<>Choose the subject you want <br className="md:block hidden"/> to explore </>} textStyles="text-center"/>
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreSubjects.map((subject, index) => (
            <ExploreCard
              key={subject.id}
              {...subject}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Explore