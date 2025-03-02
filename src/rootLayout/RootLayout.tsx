import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-base-200 pb-24">
       <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
