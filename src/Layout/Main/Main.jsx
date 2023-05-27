import React from "react";
import Navbar from "../../Pages/Shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../Pages/Shared/Footer";

const Main = () => {
   return (
      <div>
         <Navbar></Navbar>
         <Outlet />
         <Footer></Footer>
      </div>
   );
};

export default Main;
