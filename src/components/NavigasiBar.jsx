import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from '@/app/img/logo.png'

const NavigasiBar = () => {
  return (
    <nav className="navbar bg-white shadow-sm">
      <div className="container">
        <Link className="navbar-brand" href={"/"}>
            <Image src={logo} alt="logo indihome" width={130} height={130}/>
        </Link>
      </div>
    </nav>
  );
};

export default NavigasiBar;
