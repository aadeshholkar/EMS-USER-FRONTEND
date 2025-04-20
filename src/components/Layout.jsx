import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import MobileNav from "./MobileNav";
import Footer from "./Footer";

export default function Layout() {
  const location = useLocation();
  const hideFooterRoutes = ["/login", "/register"]; // hide footer on these paths

  const shouldShowFooter = !hideFooterRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar />
      <MobileNav />
      <div className="lg:pl-64 pt-16">
        <Outlet />
        {shouldShowFooter && <Footer />}
      </div>
    </div>
  );
}
