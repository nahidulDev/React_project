import React from 'react'


const Heading = ({className,heading1,heading2,children }) => {
  return (
  <>
              <div>
                  <div className={`${className} flex`}>
              <h1 className='text-[50px] font-bold text-red-700 '>{heading1} </h1>
          
                     {children}

            </div>
            <h1 className='text-2xl text-[#767676]'>{heading2}</h1>
              </div>
              
  </>
  )
}

export default Heading