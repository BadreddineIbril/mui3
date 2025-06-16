import { Outlet } from "react-router-dom";
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";

const Layout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
