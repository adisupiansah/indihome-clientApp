import Image from 'next/image'
import React from 'react'
import imageHome from '@/app/img/home.jpeg'

const Jumbotron = () => {
  return (
    <div>
      <Image src={imageHome} alt="gambar indihome" width={2000} height={1300} /> 
    </div>
  )
}

export default Jumbotron
