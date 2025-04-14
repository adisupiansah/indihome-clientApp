import React from "react";
import { FaGlobe } from "react-icons/fa";
import { FaWrench } from "react-icons/fa";

const DetailPaket = () => {
  return (
    <div className="detail-paket">
      <div className="container">
        <div className="row">
          <div className="flex justify-center items-center">
            <div className="col-md-8 mt-5">
              <div className="card">
                <div className="card-body">
                  <span className="card-title text-[14px]">
                    Internet 30 Mbps
                  </span>
                  <div className="harga flex justify-between items-center">
                    <p className="card-title font-semibold text-[24px]">
                      30 Mbps | 30 Hari
                    </p>
                    <p className="card-title text-[24px]">Rp 220.000</p>
                  </div>
                  <div className="border-1 border-gray-400"></div>

                  <div className="card-text flex items-center gap-2 mt-2">
                    <FaGlobe className="icons text-[18px]" />
                    <span className="text-[13px]">
                      Kelajuan internet 30 Mbps
                    </span>
                  </div>

                  <div className="card-text flex items-center gap-2 mt-2">
                    <FaWrench className="icons text-[18px]" />
                    <span className="text-[13px]">
                      biaya pemasangan Rp 150.000
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="flex justify-center items-center">
            <div className="col-md-8 card15">
                <div className="card">
                    <div className="card-body">
                        <span className='card-title font-semibold'>Syarat & Ketentuan</span>
                        <ul>
                            <li>
                                <span className="text-[13px]">1. Biaya diatas belum termasuk ppn 11%</span>
                            </li>
                            <li>
                                <span className="text-[13px]">2. Wajib berlangganan 12 bulan</span>
                            </li>
                            <li>
                                <span className="text-[13px]">3. Biaya pemasangan dibayarkan setelah wifi dipasang</span>
                            </li>
                            <li>
                                <span className="text-[13px]">4. 100 Mbps disertai surat keterangan non reseller</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
          </div>
        </div>

        <div className="row mt-3">
            <div className="flex justify-center items-center">
                <div className="col-md-8 card15">
                    <div className="card">
                        <div className="card-body">
                            <form action="">
                                <div className="form-group">
                                    <label htmlFor="alamat">Alamat lengkap</label>
                                    <input type="text" className="form-control mt-1" id="alamat" placeholder="Jl. Raya No. 1" required/>
                                </div>
                                <div className="form-group mt-3">
                                    <label htmlFor="nama">Nama</label>
                                    <input type="text" className="form-control mt-1" id="nama" placeholder="Ahmad..." required/>
                                </div>
                                <div className="form-group mt-3">
                                    <label htmlFor="nowa">No WhatsApp</label>
                                    <input type="number" className="form-control mt-1" id="nowa" placeholder="81275..." required/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="row mt-3">
            <div className="flex justify-center items-center">
                <div className="col-md-8 card15">
                    <div className="card">
                        <div className="card-body">
                            <span className='card-title text-[16px] font-semibold'>Total</span>
                            <div className="total-button flex justify-between items-center">
                                <span className='text-[24px] font-semibold'>Rp 150.000</span>
                                <button className="btn btn-primary col-md-6">Mulai berlangganan</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default DetailPaket;
