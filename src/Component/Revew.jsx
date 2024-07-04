import React from 'react'

const Revew = ({src,alt,className,src1,alt1,ImgclassName,Img1className,text,src2,alt2,heading,name}) => {
  return (
   <>
   <div data-aos="fade-up" data-aos-delay="500" className={`${className} w-[400px] h-[410px] rounded-2xl outline-2 hover:drop-shadow-4xl pt-10 pl-10 bg-black mt-20`}>
              <img src={src} alt={alt} className={`${ImgclassName}`}/>
              <p className='text-left w-[307px] h-[143px] text-[#767676] pt-5'>{text}</p>
              <img src={src1} alt={alt1} className={`${Img1className} mt-4`}/>
              <div className='flex mt-5 gap-x-4'>
              <img src={src2} alt={alt2} />
              <div>
              <h1 className='text-red-700 text-xl font-bold'>{heading}</h1>
              <p className='text-[#767676] '>{name}</p>
              </div>
              </div>
   </div>
   </>
  )
}

export default Revew