import React from "react";

const SyaratKetentuan = () => {
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="flex justify-center items-center">
          <div className="col-md-8 card15">
            <div className="card">
              <div className="card-body">
                <span className="card-title font-semibold">
                  Syarat & Ketentuan
                </span>
                <ul>
                  <li>
                    <span className="text-[13px]">
                      1. Biaya diatas belum termasuk ppn 11%
                    </span>
                  </li>
                  <li>
                    <span className="text-[13px]">
                      2. Wajib berlangganan 12 bulan
                    </span>
                  </li>
                  <li>
                    <span className="text-[13px]">
                      3. Biaya pemasangan dibayarkan setelah wifi dipasang
                    </span>
                  </li>
                  <li>
                    <span className="text-[13px]">
                      4. 100 Mbps disertai surat keterangan non reseller
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SyaratKetentuan;
