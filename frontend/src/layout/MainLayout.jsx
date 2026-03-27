import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const MainLayout = ({ children }) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex min-h-screen bg-slate-50">

      {/* Sidebar */}
      <Sidebar isOpen={isOpen} />

      {/* Main content */}
      <div className="flex flex-col flex-1 md:ml-64">

        <Navbar toggleSidebar={toggleSidebar} />

        <main className="p-6 md:p-8">
          {children}
        </main>

      </div>

    </div>
  );
};

export default MainLayout;