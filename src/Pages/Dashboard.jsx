import { useState } from "react";
import dariLogo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import dashboardImage from "../assets/img/dashboard.png";
import cardDashboard from "../assets/img/cardDashboard.png";
import Footer from "../Components/Footer";

function Dashboard() {
  return (
    <>
      <section className="w-screen w-full bg-[#EDEDED] text-black">
        <Navbar />
        <div className="px-48 pb-32">
          <div className="w-full h-auto py-32">
            <div className="flex">
              <div className="w-full mt-12">
                <p className="text-6xl text-[#FF7400] font-bold">
                  Digital Art and Information
                </p>
                <button className="mt-8 px-12 w-fit h-auto text-white bg-[#9C5DFF] rounded-3xl text-2xl font-semibold">
                  Jelajahi Kami
                </button>
              </div>
              <div className="w-full flex justify-end">
                <img src={dashboardImage} className="w-18 h-auto" alt="" />
              </div>
            </div>
          </div>
          <div className="w-full h-auto">
            <p className="text-2xl font-semibold">Aktivitas</p>
            <div className="mt-12">
              <div className="flex w-[900px] h-fit bg-white rounded-xl">
                <img src={cardDashboard} className="w-18 h-auto" alt="" />
                <div className="px-8 py-6">
                  <p className="text-xl font-medium">Metaverse Moot Court:</p>
                  <p className="text-xl">
                    Peluncuran lab hukum virtual pertama di Indonesia oleh
                    Universitas Muhammadiyah Malang
                  </p>
                  <p className="font-light">
                    Selasa, 10 Oktober 2023 23:34 WIB
                  </p>
                  <p className="mt-6">
                    Malang, 22 September 2023 – Sejarah baru dalam dunia
                    pendidikan hukum di Indonesia dicapai oleh Fakultas
                    Hukum Universitas Muhammadiyah Malang (UMM) dengan Program
                    Studi Informatika UMM melalui peluncuran MetaVerse Moot
                    Court – Mahkamah Konstitusi, Laboratorium Hukum Virtual
                    pertama di Indonesia. Acara ini diselenggarakan pada Jum'at,
                    22 September 2023, di Ruang Sidang Fakultas Hukum, Gedung
                    Kuliah Bersama (GKB) IV, lantai 7....
                  </p>
                  <button className="mt-12 bg-[#808080] text-white rounded-xl">
                    Lanjutkan Membaca
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* footer */}
        <Footer />
      </section>
    </>
  );
}

export default Dashboard;
