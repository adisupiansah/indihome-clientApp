'use client';
import Link from 'next/link';
import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import logo from '@/app/img/logo.png'

const Footer = () => {
  // tidak menggunakan component footer di /sukses
  // karena footer di page sukses tidak ada
  const pathname = usePathname();
  if (pathname === '/sukses') {
    return null;
  }

  return (
    <div className='footer'>
      <div className="container">
        <div className="row">
            <div className="col-md-3">
                <p className='text-[20px] font-semibold text-center'>ALAMAT PERUSAHAAN</p>
                <p className='text-justify'>Kepulauan Riau, Karimun, Sei. Lakam Barat, Jln. Jenderal Ahmad Yani No 1 Karimun</p>
            </div>
            <div className="col-md-3">
                <p className='text-[20px] font-semibold text-center'>SOSIAL MEDIA</p>
                <div className="icons flex justify-center items-center gap-3">
                    <div className="bg-icons">
                        <FaInstagram className='text-[25px]'/>
                    </div>
                    <div className="bg-icons">
                        <FaFacebook className='text-[25px]'/>
                    </div>
                    <div className="bg-icons">
                        <FaXTwitter className='text-[25px]'/>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
              <p className='text-[20px] font-semibold text-center'>TAUTAN LAINNYA</p>
              <div className="text-center flex flex-col">
                  <Link className=' text-center text-decoration-none text-white' href={'https://www.telkomsel.com/terms-and-conditions'}>Syarat & ketentuan</Link>
                  <Link className=' text-center text-decoration-none text-white mt-2' href={'https://www.telkomsel.com/privacy-policy'}>Kebijakan privasi</Link>
              </div>
             
            </div>
            <div className="col-md-3">
              <div className="flex justify-center items-center">
                <Image src={logo} alt='logo indihome' width={200} height={200}/>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
