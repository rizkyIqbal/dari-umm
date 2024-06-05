import { useState } from "react";
import dariLogo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import dashboardImage from "../assets/img/dashboard.png";
import spatial1 from "../assets/img/spatial1.png";
import Footer from "../Components/Footer";

function Spatial() {
  return (
    <>
      <section className="w-screen w-full bg-[#EDEDED] text-black">
        <Navbar />
        <div className="px-48 pb-32">
          <div className="bg-white text-center mt-16 px-28 py-6 rounded-xl">
            <p className="font-bold text-3xl">Welcome!</p>
            <p className="font-light text-2xl mt-6">
              In this menu, we present several links to the metaverse spaces
              that we have created using the Unity game engine and the
              Spatial.io platform. The metaverse spaces we've crafted allow you
              to access them through your devices such as a desktop browser,
              Android, iOS, and VR headset. Here are the links—happy exploring!
            </p>
          </div>
          <div className="mt-32">
            <p className="text-2xl font-semibold">Spatial Project</p>
            <div className="grid grid-cols-4 gap-12">
              <Link to="/spatialdetail">
                <div className="mt-12 rounded-2xl bg-white w-fit">
                  <img src={spatial1} alt="" />
                  <div className="py-4">
                    <p className="text-center text-black font-semibold text-xl">
                      UMM Metaverse Hall
                    </p>
                  </div>
                </div>
              </Link>
              <Link to="/spatialdetail">
                <div className="mt-12 rounded-2xl bg-white w-fit">
                  <img src={spatial1} alt="" />
                  <div className="py-4">
                    <p className="text-center text-black font-semibold text-xl">
                      UMM Metaverse Hall
                    </p>
                  </div>
                </div>
              </Link>
              <Link to="/spatialdetail">
                <div className="mt-12 rounded-2xl bg-white w-fit">
                  <img src={spatial1} alt="" />
                  <div className="py-4">
                    <p className="text-center text-black font-semibold text-xl">
                      UMM Metaverse Hall
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Spatial;
