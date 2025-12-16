import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <footer className="bg-blue-900 text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} WanderSoul Travels. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default RootLayout;
