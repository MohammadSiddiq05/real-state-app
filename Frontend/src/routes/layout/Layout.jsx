import { useContext } from "react";
import Navbar from "../../components/navbar/Navbar";
import { Outlet, Navigate } from "react-router-dom"; // ✅ Navigate add kiya
import { AuthContext } from "../../context/AuthContext";

const Layout = () => {
  return (
    <div className="h-screen max-w-[1366px] mx-auto px-5 flex flex-col lg:max-w-[1280px] md:max-w-[768px] sm:max-w-[640px]">
      <div className="h-[100px]">
        <Navbar />
      </div>
      <div className="h-[calc(100vh-100px)]">
        <Outlet />
      </div>
    </div>
  );
}

const RequireAuth = () => {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) return <Navigate to="/login" />;

  return (
    <div className="h-screen max-w-[1366px] mx-auto px-5 flex flex-col lg:max-w-[1280px] md:max-w-[768px] sm:max-w-[640px]">
      <div className="h-[100px]">
        <Navbar />
      </div>
      <div className="h-[calc(100vh-100px)]">
        <Outlet />
      </div>
    </div>
  );
}

export { Layout, RequireAuth };