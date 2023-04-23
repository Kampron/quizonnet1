import React, { useEffect } from 'react'
import { useState } from 'react'
import { questionNav, quizImages } from '../../constants/Data'
import { BsArrowUpRightCircle }from 'react-icons/bs'
import { motion } from 'framer-motion'
const button = "text-black bg-white py-[0.65rem] px-[1rem] border-none mt-[1rem] cursor-pointer text-[0.85rem] rounded-[10px]"
const activee = "bg-[#8c12f0] text-white "

const QuestionNav = () => {
  const [tab, setTab] = useState({name: "all"})
  const [quiz, setQuiz] = useState([])
  const [active, setActive] = useState(0)

  useEffect(() => {
    if(tab.name === "all") {
      setQuiz(quizImages)
    } else {
      const newQuiz = quizImages.filter (
        (quizImage) => {
          return quizImage.category.toLowerCase() === tab.name
        }
      )
      setQuiz(newQuiz)
    }
  },[tab])

  const activeTab = (e, index) => {
    setTab({name: e.target.textContent.toLowerCase() })
    setActive(index)
  }
  return (
    <div className='max-w-[1224px] min-h-screen pt-[7rem] px-[1rem]  sm:px-[1.5rem] mb-4 mx-auto'>
      <div className='text-center mb-[3rem] '>
        <span className='text-blueColor uppercase text-[0.75rem] font-[800] tracking-[5px] '>Past Exams</span>
        <h1 className='text-white text-[2.5rem] sm:text-[3rem] relative'>All Free Quizzes</h1>
      </div>
      <div className='flex justify-center gap-[1rem] flex-wrap'>
          {questionNav.map((questNav, index) => {
            return (
              <button 
                onClick={(e) => activeTab(e,index)}
                className={active === index ? activee + button : button}
                key={index} >
                  {questNav}
                </button>
            )
          })}
      </div>
      <div className='mt-[5rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[1rem] justify-center'>
          {quizImages.map(quizImage => {
            return(
              <div className='max-w-[350px] sm:max-w-[380px] h-[250px] ml-auto mr-auto relative ' key={quizImage.id}>
                <img src={quizImage.img} alt="quiz-image" className='w-[100%] h-[100%] object-cover' />
                <motion.div 
                  initial={{opacity: 0}}  
                  whileHover={{ opacity: [0, 1] }}
                  transition={{ duration: 0.3, ease: "easeInOut"}}
                  className='absolute w-[100%] h-[100%] z-[5] top-0 left-0 bg-blueColor flex justify-center items-center gap-4'>
                  <motion.a 
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 1.2] }}
                    transition={{ duration: 0.3 }}
                    className='w-[40px] h-[40px] bg-[rgba(255,255,255,0.15)] flex items-center justify-center rounded-[50%]' href='#'>
                  <BsArrowUpRightCircle size='1.5rem' color='#fff' />
                  </motion.a>
                  <motion.a 
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 1.2] }}
                    transition={{ duration: 0.3 }}
                    className='w-[100px] h-[100px] bg-[rgba(255,255,255,0.15)] flex items-center justify-center rounded-[50%] text-white' href='#'>
                  {quizImage.category}
                  </motion.a>
                </motion.div>
            </div>
            )
          })}    
      </div>
      <div className='mt-[3rem] bg-white flex items-center justify-between rounded-[5px] p-[1rem] ml-auto mr-auto gap-[1rem] flex-wrap max-w-[700px] '>
        <div className=''>
          <h3 className='text-[1.5rem]'>
            so let's talk about <br />
            <span className='text-[2rem] sm:text-[3.5rem] text-[#8c12f0]'>your feedbacks </span>
          </h3>
        </div>
        <div className='self-end mb-[1.5rem] bg-[#8c12f0] py-[0.65rem] px-[1rem] rounded-[10px] text-[0.85rem]'>
          <a  className='text-white capitalize'  href='#contact'>
             contact me
          </a>
        </div>
      </div>
    </div>
  )
}

export default QuestionNav