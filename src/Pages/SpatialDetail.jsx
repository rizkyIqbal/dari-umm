import { useState } from "react";
import dariLogo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import dashboardImage from "../assets/img/dashboard.png";
import spatial from "../assets/img/spatial2.png";
import Footer from "../Components/Footer";

function SpatialDetail() {
  return (
    <>
      <section className="w-screen w-full bg-[#EDEDED] text-black">
        <Navbar />
        <div className="px-48 pb-32">
          <div className="bg-white w-full h-fit py-12 px-52 mt-12">
            <p className="font-bold text-4xl mb-4">UMM Metaverse Hall</p>
            <div className="flex justify-center">
              <img src={spatial} alt="" className="w-full h-auto" />
            </div>
            <p className="text-3xl font-light mt-12">
              This space serves as the main room, acting as a gateway to other
              metaverse spaces. The design of this room is inspired by the
              concept of an auditorium found in buildings at University of
              Muhammadiyah Malang. Its purpose is to connect one metaverse space
              to another.
            </p>
            <Link to="/spatial">
            <button className="bg-[#808080] text-white text-2xl mt-8 rounded-3xl px-20">
              Kembali
            </button>
            </Link>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default SpatialDetail;
