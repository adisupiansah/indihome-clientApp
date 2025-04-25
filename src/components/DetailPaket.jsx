"use client";
import React, { useEffect, useState } from "react";
import { FaGlobe } from "react-icons/fa";
import { FaWrench } from "react-icons/fa";
import Swal from "sweetalert2";
import SyaratKetentuan from "./SyaratKetentuan";
import { useRouter } from "next/navigation";

const DetailPaket = ({ idPaket }) => {
  const router = useRouter();
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [dataForm, setDataForm] = useState({
    alamat: "",
    nama: "",
    nowa: "",
    email: "",
    paket: idPaket,
  });

  const fetchDetailPaket = async () => {
    try {
      setLoading(true);
      setError(null);

      // Gunakan endpoint API yang benar
      const response = await fetch(`/api/v1/selectedpaket/${idPaket}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Response is not JSON");
      }

      const result = await response.json();
      setDetail(result);
    } catch (error) {
      console.error("Fetch error:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setDataForm((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //  validasi form jika tidak lengkap
      if (!dataForm.alamat || !dataForm.nama || !dataForm.nowa) {
        Swal.fire({
          title: "Warning !",
          text: "Form tidak boleh kosong",
          icon: "warning",
          confirmButtonText: "Yes",
          showConfirmButton: true,
        });
        return;
      }

      // kirim data ke API
      const response = await fetch("/api/v1/clients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...dataForm,
          totalBiaya: detail.fee,
          paketDetail: detail,
        }),
      });

      if (!response.ok) {
        throw new Error("Gagal menyimpan data", error);
      }

      await response.json();

      Swal.fire({
        title: "Berhasil",
        text: "Data berhasil disimpan",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
          router.push('/sukses')
      })

      // reset form
      setDataForm({
        alamat: "",
        nama: "",
        nowa: "",
        paket: idPaket,
      });
    } catch (error) {
      console.error("Terjadi kesalahan", error);
      Swal.fire({
        title: "Error",
        text: error.message,
        confirmButtonText: "Ok",
      });
    }
  };

  useEffect(() => {
    if (idPaket) {
      fetchDetailPaket();
    }
  }, [idPaket]);

  if (loading) {
    return (
      <div className="flex justify-center items-center vh-100">
        <div className="loader"></div>
      </div>
    );
  }

  if (error) {
    <div className="container">
      <div className="alert alert-danger text-center" role="alert">
        {error}
      </div>
    </div>;
  }

  if (!detail) {
    return (
      <div className="flex justify-center items-center vh-100">
        <div className="alert alert-warning text-center" role="alert">
          Data tidak di temukan
        </div>
      </div>
    );
  }

  return (
    <div className="detail-paket">
      <div className="container">
        <div className="row">
          <div className="flex justify-center items-center">
            <div className="col-md-8 mt-5">
              <div className="card">
                <div className="card-body">
                  <span className="card-title text-[14px]">{detail.title}</span>
                  <div className="harga flex justify-between items-center">
                    <p className="card-title font-semibold text-[24px]">
                      {detail.subTitle}
                    </p>
                    <p className="card-title text-[24px]">Rp {detail.harga}</p>
                  </div>
                  <div className="border-1 border-gray-400"></div>

                  <div className="card-text flex items-center gap-2 mt-2">
                    <FaGlobe className="icons text-[18px]" />
                    <span className="text-[13px]">{detail.ket}</span>
                  </div>

                  <div className="card-text flex items-center gap-2 mt-2">
                    <FaWrench className="icons text-[18px]" />
                    <span className="text-[13px]">
                      biaya pemasangan Rp {detail.fee}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SyaratKetentuan />
        <form action="" onSubmit={handleSubmit}>
          <div className="row mt-3">
            <div className="flex justify-center items-center">
              <div className="col-md-8 card15">
                <div className="card">
                  <div className="card-body">
                    <div className="form-group">
                      <label htmlFor="alamat">Alamat lengkap</label>
                      <input
                        type="text"
                        className="form-control mt-1"
                        id="alamat"
                        placeholder="Jl. Raya No. 1"
                        value={dataForm.alamat}
                        onChange={handleInputChange}
                
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="nama">Nama</label>
                      <input
                        type="text"
                        className="form-control mt-1"
                        id="nama"
                        placeholder="Ahmad..."
                        value={dataForm.nama}
                        onChange={handleInputChange}
                 
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="nowa">No WhatsApp</label>
                      <input
                        type="number"
                        className="form-control mt-1"
                        id="nowa"
                        placeholder="81275..."
                        value={dataForm.nowa}
                        onChange={handleInputChange}
        
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="nowa">Email</label>
                      <input
                        type="email"
                        className="form-control mt-1"
                        id="email"
                        placeholder="81275..."
                        value={dataForm.email}
                        onChange={handleInputChange}
        
                      />
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
                    <span className="card-title text-[16px] font-semibold">
                      Total
                    </span>
                    <div className="total-button flex justify-between items-center">
                      <span className="text-[24px] font-semibold">
                        Rp {detail.fee}
                      </span>
                      <button
                        className="btn btn-primary col-md-6"
                        type="submit"
                      >
                        Mulai berlangganan
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
};

export default DetailPaket;
