import React from 'react'

const infoBox = " w-full h-[5rem] max-w-[22em] mr-[1rem] mb-[1rem] flex justify-start items-center align-middle flex-wrap text-white transform translate-y-0 transition duration-150 ease-out hover:translate-y-[-5px] rounded-sm cursor-pointer "

const InfoBox = ({ bgColor, title, count, icon }) => {
  return (
    <div className={ infoBox + bgColor}>
        <span className='py-0  px-[0.5rem] text-white'>{icon}</span>
        <span className='text-white'>
            <p>{title}</p>
            <h4>{count}</h4>
        </span>

    </div>
  )
}

export default InfoBox