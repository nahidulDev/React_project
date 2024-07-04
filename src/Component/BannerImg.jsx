import React from 'react'

const BannerImg = ({src, alt,title,details,className,ImgclassName}) => {
  return (
    <>
             <div className={`w-[424px] h-[459px]  rounded-2xl bg-slate-100 hover:drop-shadow-3xl ${className}`}>
    <img src={src} alt={alt} className={`${ImgclassName} m-auto `}/>
    <h1 className='text-center font-bold text-[24px] text-red-900 m-auto pt-4'>{title}</h1>
    <p  className=' w-[326px] h-[130px] text-lg text-[#767676] m-auto text-center pt-4'>{details}</p>
    </div>
    </>
  )
}

export default BannerImg;