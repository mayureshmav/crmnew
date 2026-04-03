import { FaBell, FaSearch, FaBars, FaPlus } from "react-icons/fa";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const Navbar = ({ toggleSidebar }) => {

  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {

    const handleClickOutside = (event) => {

      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }

    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

  }, []);

  return (

    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="h-20 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border-b border-indigo-900 flex items-center justify-between px-6 w-full sticky top-0 z-30 shadow-lg"
    >

      {/* LEFT SECTION */}

      <div className="flex items-center gap-6">

        <FaBars
          className="text-gray-300 text-xl md:hidden cursor-pointer"
          onClick={toggleSidebar}
        />

        {/* SEARCH BAR */}

        <div className="hidden md:flex items-center gap-3 bg-indigo-900/40 backdrop-blur-md rounded-xl px-4 py-2 w-[380px] border border-indigo-800 focus-within:ring-2 focus-within:ring-indigo-500 transition">

          <FaSearch className="text-gray-400 text-sm" />

          <input
            type="text"
            placeholder="Search leads, projects..."
            className="outline-none bg-transparent w-full text-sm text-gray-200 placeholder-gray-400"
          />

        </div>

      </div>

      {/* RIGHT SECTION */}

      <div className="flex items-center gap-6">

        {/* ADD LEAD */}

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow hover:shadow-lg"
        >
          <FaPlus className="text-xs" />
          Add Lead
        </motion.button>

        {/* USER PROFILE */}

        <div className="relative" ref={dropdownRef}>

          {/* Avatar */}

          <div
            onClick={() => setOpen(!open)}
            className="w-9 h-9 bg-gradient-to-r from-indigo-500 to-blue-500 text-white flex items-center justify-center rounded-full font-semibold shadow cursor-pointer"
          >
            {user?.name ? user.name.charAt(0) : "U"}
          </div>

          {/* Dropdown */}

          {open && (

            <motion.div
              initial={{ opacity:0, y:-10 }}
              animate={{ opacity:1, y:0 }}
              transition={{ duration:0.2 }}
              className="absolute right-0 mt-3 w-44 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50"
            >

              <div className="px-4 py-2 border-b">

                <p className="text-sm font-semibold text-gray-700">
                  {user?.name || "Guest"}
                </p>

                <p className="text-xs text-gray-400 capitalize">
                  {user?.role}
                </p>

              </div>

              <button
                onClick={() => navigate("/profile")}
                className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition"
              >
                Profile
              </button>

              <button
                onClick={() => navigate("/settings")}
                className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition"
              >
                Settings
              </button>

              <button
                onClick={() => {
                  logout();
                  navigate("/login");
                }}
                className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100 transition"
              >
                Logout
              </button>

            </motion.div>

          )}

        </div>

        {/* NOTIFICATIONS */}

        <div className="relative cursor-pointer">

          <FaBell className="text-gray-300 text-lg hover:text-white transition" />

          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
            3
          </span>

        </div>

      </div>

    </motion.header>

  );

};

export default Navbar;