import { useState } from "react";
import { Link } from "react-router-dom";
import dariLogo from "../assets/img/logo.png";

function Navbar() {
  return (
    <>
      <div className="w-full h-auto flex text-black bg-white justify-between drop-shadow-md items-center py-4 px-48">
        <div>
          <img src={dariLogo} className="w-18 h-auto" alt="" />
        </div>
        <div className="grid gap-x-4 grid-cols-4 text-center">
          <Link to="/" className="text-black font-medium text-xl">
            Beranda
          </Link>
          <Link to="/spatial" className="text-black font-medium text-xl">
            Spatial
          </Link>
          <Link className="text-black font-medium text-xl">Tentang Kami</Link>
          <Link className="text-black font-medium text-xl">FAQ</Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
