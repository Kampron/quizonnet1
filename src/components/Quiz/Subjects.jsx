import React, { useState } from 'react'
import SubjectIcons from './SubjectIcons'
import { mathsIcon, scienceIcon, current, questions } from '../../constants/Data'
const button = "text-black bg-white py-[0.65rem] px-[1rem] border-none mt-[1rem] cursor-pointer text-[0.85rem] rounded-[10px]"

const activee = "bg-[#8c12f0] text-white "

const Subjects = () => {
    const [active, setActive] = useState(1)
  return (
    <div className='max-w-[1224px] min-h-screen pt-[7rem] px-[1rem]  sm:px-[1.5rem] mb-4 mx-auto'>
        <div className='text-center mb-[3rem] '>
            <span className='text-blueColor uppercase text-[0.75rem] font-[800] tracking-[5px] '>What To Expect</span>
            <h1 className='text-white text-[2.5rem] sm:text-[3rem] relative'>Most Examinable Topics</h1>     
        </div>
        <div className=''>
            <div className='flex justify-center gap-2 mb-[5rem] '>
            <button
                onClick={() => {setActive(1)}} 
                className={ active === 1 ? activee + button: button}
            >
                Maths
            </button>
            <button 

                onClick={() => {setActive(2)}} 
                className={ active === 2 ? activee + button : button}
            >
                English
            </button>
            <button 

                onClick={() => {setActive(3)}} 
                className={ active === 3 ? activee + button : button}
            >
                Science
            </button>
            <button 

                onClick={() => {setActive(4)}} 
                className={ active === 4 ? activee + button : button}
            >
                Current Questions
            </button>
        </div>
        <div className='grid md:grid-cols-4 
        grid-cols-2  max-w-[800px] justify-center mx-auto md:gap-y-[5rem] gap-y-[2rem] gap-[2rem] '>
            { active === 1 &&
                mathsIcon.map((icon) => {
                    return (
                        <SubjectIcons 
                            key={icon.title}
                            {...icon}
                        />
                    )
                })}
        </div>
        <div className='grid md:grid-cols-4 
        grid-cols-2  max-w-[800px] justify-center mx-auto md:gap-y-[5rem] gap-y-[2rem] gap-[2rem] '>
            { active === 3 &&
                scienceIcon.map((icon) => {
                    return (
                        <SubjectIcons 
                            key={icon.title}
                            {...icon}
                        />
                    )
                })}
        </div>
        <div className='max-w-[500px] ml-auto mr-auto text-white'>
            { active === 4 && current.map((current) => {
                return(
                    <div className='flex items-center justify-between mb-[3rem]' key={current.id}>
                        <span className='text-[1rem] sm:text-[1.75rem] pl-[2.5rem]'> {current.year} </span>
                        <div className='w-[300px] pl-[2.5rem] '>
                            <h3 className='text-[0.85rem] sm:text-[1.1rem] '>{current.subject}</h3>
                            <p className='text-[0.65rem] sm:text-[0.75rem] opacity-[0.6]'>{current.level}</p>
                        </div>
                    </div>
                )
            })}
        </div>
        <div className='flex justify-center items-center mt-[5rem] flex-wrap gap-[2rem] text-white'>
            {questions.map((question) => {
                return (
                    <div key={question.id}>
                        <div className='text-blueColor text-[1.7rem]'>
                            {question.number}
                        </div>
                        <div className=''>
                            {question.subject}
                        </div>
                    </div>
                )
            })}
        </div>
        </div>    
    </div>
  )
}

export default Subjects