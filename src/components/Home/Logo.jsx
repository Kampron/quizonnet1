import React from 'react'

const Logo = ({className}) => {
  return (
    <div className='logoDiv'>
          <img src="/logo-48.png" alt='logo'  className={className} />
               <span>
                  <h1 className="logo text-[20px] leading-[30px] text-blueColor inline">
                    <strong>uiz</strong>onnet
                  </h1>
                </span> 
        </div>
  )
}

export default Logo