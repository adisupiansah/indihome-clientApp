"use client";
import React, { useEffect, useState } from "react";
import { FaGlobe } from "react-icons/fa";
import { FaWrench } from "react-icons/fa";

const CardPaket = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleFetch = async () => {
    try {
      const response = await fetch("/api/v1/fetch", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error di Front end saat fetching data", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <div className="loader"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div class="alert alert-warning" role="alert">
        Data tidak di temukan
      </div>
    );
  }

  return (
    <div className="card-paket">
      <div className="container">
        <div className="row">
          {data.map((item) => (
            <div className="col-md-4 mt-3" key={item.id}>
              <div className="card">
                <div className="card-body">
                  <span className="card-title font-bold text-[20px]">
                    {item.title}
                  </span>
                  <p className="card-title">Rp {item.harga} / bulan</p>
                  <div className="card-text flex items-center gap-2">
                    <FaGlobe className="icons text-[18px]" />
                    <span className="text-[13px]">{item.ket}</span>
                  </div>
                  <div className="card-text flex items-center gap-2 mt-2">
                    <FaWrench className="icons text-[18px]" />
                    <span className="text-[13px]">
                      biaya pemasangan Rp {item.fee}
                    </span>
                  </div>

                  <div className="button">
                    <button className="btn mt-3 btn-sm col-md-12">
                      Pilih Paket
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardPaket;
