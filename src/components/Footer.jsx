import Link from 'next/link';
import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
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
              <ul className=''>
                <li>
                  <Link href={'/'}>Syarat & ketentuan</Link>
                </li>

              </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
