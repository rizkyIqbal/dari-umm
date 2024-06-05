import { useState } from "react";
import { Link } from "react-router-dom";
import dariLogo from "../assets/img/logo.png";

function Footer() {
  return (
    <>
      <div className="w-full h-auto px-48 bg-white py-12">
        <img src={dariLogo} className="w-18 h-auto" alt="" />
        <div className="flex mt-2">
          <div className="w-full">
            <div className="w-96">
              <p>
                Digital Art and Information (DARI) adalah sebuah startup yang
                berfokus pada pengenmabngan pengalaman digital berbasis
                Metaverse, Virtual Reality, Augmented Reality, Cinema 360, dan
                Game Development.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3">
            <div>
              <p className="font-bold mb-4">NAVIGASI</p>
              <div className="grid grid-rows-4 gap-4">
                <p>Beranda</p>
                <p>Spatial</p>
                <p>Tentang Kami</p>
                <p>FAQ</p>
              </div>
            </div>
            <div>
              <p className="font-bold mb-4">IKUTI KAMI</p>
              <div className="grid grid-rows-2 gap-4">
                <p>Instagram</p>
                <p>Tiktok</p>
              </div>
            </div>
            <div>
              <p className="font-bold mb-4">HUBUNGI KAMI</p>
              <div className="grid grid-rows-2 gap-4">
                <p>Jl. Raya Tlogomas No.246, Jawa Timur 65144, Indonesia</p>
                <p>dari@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-6" />
        <p className="text-center font-medium mt-6">
          © 2024 DARI Team. All Rights Reserved
        </p>
      </div>
    </>
  );
}

export default Footer;
