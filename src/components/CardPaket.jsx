import React from 'react'
import { FaGlobe } from "react-icons/fa";
import { FaWrench } from "react-icons/fa";

const CardPaket = () => {
  return (
    <div className='card-paket'>
      <div className="container">
        <div className="row">
            <div className="col-md-4">
                <div className="card">
                    <div className="card-body">
                        <span className="card-title font-bold text-[20px]">Internet 10 Mbps</span>
                        <p className='card-title'>Rp 150.000 / bulan</p>
                        <div className='card-text flex items-center gap-2'>
                            <FaGlobe className='icons text-[18px]'/>
                            <span className='text-[13px]'>kecepatan internet hingga 10 Mbps</span>
                        </div>
                        <div className='card-text flex items-center gap-2 mt-2'>
                            <FaWrench className='icons text-[18px]'/>
                            <span className='text-[13px]'>biaya pemasangan Rp 150.000</span>
                        </div>

                        <div className="button">
                            <button className='btn mt-3 btn-sm col-md-12'>Pilih Paket</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card">
                    <div className="card-body">
                        <span className="card-title font-bold text-[20px]">Internet 10 Mbps</span>
                        <p className='card-title'>Rp 150.000 / bulan</p>
                        <div className='card-text flex items-center gap-2'>
                            <FaGlobe className='icons text-[18px]'/>
                            <span className='text-[13px]'>kecepatan internet hingga 10 Mbps</span>
                        </div>
                        <div className='card-text flex items-center gap-2 mt-2'>
                            <FaWrench className='icons text-[18px]'/>
                            <span className='text-[13px]'>biaya pemasangan Rp 150.000</span>
                        </div>

                        <div className="button">
                            <button className='btn mt-3 btn-sm col-md-12'>Pilih Paket</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card">
                    <div className="card-body">
                        <span className="card-title font-bold text-[20px]">Internet 10 Mbps</span>
                        <p className='card-title'>Rp 150.000 / bulan</p>
                        <div className='card-text flex items-center gap-2'>
                            <FaGlobe className='icons text-[18px]'/>
                            <span className='text-[13px]'>kecepatan internet hingga 10 Mbps</span>
                        </div>
                        <div className='card-text flex items-center gap-2 mt-2'>
                            <FaWrench className='icons text-[18px]'/>
                            <span className='text-[13px]'>biaya pemasangan Rp 150.000</span>
                        </div>

                        <div className="button">
                            <button className='btn mt-3 btn-sm col-md-12'>Pilih Paket</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CardPaket
