import Image from 'next/image'
import React from 'react'
import iconSukses from '@/app/img/sukses.png'
import Link from 'next/link'

const Sukses = () => {
  return (
    <div className='sukses bg-white'>
        <div className="container">
            <div className="icon-sukses flex justify-center items-center flex-col vh-100">
                <Image src={iconSukses} alt="icon" width={200} height={200} className='icon-sukses'/>
                <span className='mt-3'>data sudah dikirim ke admin, silahkan tunggu beberapa menit admin akan menghubugi anda, Terima Kasih!</span>
                <Link href={'/'} className='btn mt-4 col-md-3'>kembali</Link>
            </div>
        </div>
    </div>
  )
}

export default Sukses
