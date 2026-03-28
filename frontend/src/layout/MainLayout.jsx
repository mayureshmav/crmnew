import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const MainLayout = ({ children }) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (

    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-blue-50">

      {/* SIDEBAR */}

      <Sidebar isOpen={isOpen} />

      {/* MAIN AREA */}

      <div className="flex flex-col flex-1 md:ml-64 transition-all duration-300">

        {/* NAVBAR */}

        <Navbar toggleSidebar={toggleSidebar} />

        {/* CONTENT AREA */}

        <main className="flex-1 overflow-y-auto p-6 md:p-8">

          {/* PAGE CONTAINER */}

          <div className="max-w-7xl mx-auto">

            {children}

          </div>

        </main>

      </div>

    </div>

  );

};

export default MainLayout;