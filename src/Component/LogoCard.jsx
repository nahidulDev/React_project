import React from 'react'

const LogoCard = ({src, alt,title,details,className,ImgclassName}) => {
  return (
 <>
      <div className={`w-[344px] h-[250px ]    mt-10 ${className}`}>
    <img src={src} alt={alt} className={`${ImgclassName} pt-10 `}/>
    <h1 className='text-left font-bold text-[24px] text-red-900  pt-4'>{title}</h1>
    <p  className=' w-[326px] h-[130px] text-lg text-[#767676]  text-left pt-4'>{details}</p>
    </div>
 </>
  )
}

export default LogoCard;