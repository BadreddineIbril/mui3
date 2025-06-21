import { useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navigation from "@/components/layout/navigation";

const Layout = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default Layout;
