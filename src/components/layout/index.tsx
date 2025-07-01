import { useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";

const Layout = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <>
      <Navigation />
      <Outlet />
      {!pathname.includes("/docs") && <Footer />}
    </>
  );
};

export default Layout;
