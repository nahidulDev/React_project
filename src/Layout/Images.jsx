import React from 'react'

const Images= ( {src,alt,className,ImgclassName}) => {
  return (
    <>
     <div className={`${className}`}>
     <picture>
     <img src={src} alt={alt} loading='lazy' className={`${ImgclassName}`}/>
     </picture>
     </div>
    </>
  )
}

export default Images