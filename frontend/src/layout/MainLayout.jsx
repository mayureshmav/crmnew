import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const MainLayout = ({ children }) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (

    <div className="flex min-h-screen bg-gradient-to-br from-slate-200 via-indigo-200 to-blue-200">

      {/* MOBILE OVERLAY */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
        />
      )}

      {/* SIDEBAR */}
      <Sidebar isOpen={isOpen} onNavigate={toggleSidebar} />

      {/* MAIN AREA */}
      <div className="flex flex-col flex-1 md:ml-20 transition-all duration-300">

        {/* NAVBAR */}
        <Navbar toggleSidebar={toggleSidebar} />

        {/* CONTENT */}
        <main className="flex-1 overflow-y-auto">

          {/* PAGE WRAPPER */}
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-6">

            {children}

          </div>

        </main>

      </div>

    </div>

  );

};

export default MainLayout;