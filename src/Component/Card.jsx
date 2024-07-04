import React from 'react'


const Card = ( {src,alt,ImgclassName,title,details,className}) => {
  return (
    <>
    <div className={`w-[424px] h-[419px] bg-slate-800 rounded-2xl  dark:md:hover:bg-gray-900   hover:drop-shadow-4xl ${className}`}>
    <img src={src} alt={alt} className={`${ImgclassName} m-auto pt-16`}/>
    <h1 className='text-center font-bold text-[24px] text-red-900 m-auto pt-4'>{title}</h1>
    <p  className=' w-[326px] h-[130px] text-lg text-[#767676] m-auto text-center pt-4'>{details}</p>
    </div>
    </>
  )
}

export default Card