import React from 'react'

const SubjectIcons = ({imgurl, title}) => {
  return (
    <div className='flex flex-col'>
        <span className='flex justify-center'>
            <img src={imgurl} className='w-20 h-20 ' alt='topics' />
        </span>        
        <p className='mt-1 justify-center flex text-white text-[1rem] '>{title}</p> 
    </div>
  )
}

export default SubjectIcons