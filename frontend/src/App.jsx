import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminBody from "./admin/AdminBody";
import Customers from "./admin/Customers";
import Overview from "./admin/Overview";
import Login from "./pages/Login";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* --------- DASHBOARD --------- */}
          <Route path="/adminpanel" element={<AdminBody />}>
            <Route index element={<Overview />} />
            <Route path="customers" element={<Customers />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
