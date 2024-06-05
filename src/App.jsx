import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Spatial from "./Pages/Spatial";

import "./App.css";
import SpatialDetail from "./Pages/SpatialDetail";

function App() {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="/spatial" element={<Spatial />} />
      <Route path="/spatialdetail" element={<SpatialDetail />} />
    </Routes>
  );
}

export default App;
