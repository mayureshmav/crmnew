import { FaBell, FaSearch, FaBars, FaPlus } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = ({ toggleSidebar }) => {

  return (

    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="h-20 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border-b border-indigo-900 flex items-center justify-between px-6 w-full sticky top-0 z-30 shadow-lg"
    >

      {/* LEFT SECTION */}

      <div className="flex items-center gap-6">

        {/* MOBILE MENU */}

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

        {/* ADD LEAD BUTTON */}

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md transition"
        >
          <FaPlus className="text-xs" />
          Add Lead
        </motion.button>

        {/* USER PROFILE */}

        <div className="flex items-center gap-3 cursor-pointer">

          <img
            src="https://i.pravatar.cc/100"
            className="w-9 h-9 rounded-full border border-indigo-500"
          />

          <div className="hidden md:block">

            <p className="text-sm font-medium text-white">
              Alex
            </p>

            <p className="text-xs text-gray-400">
              Project Manager
            </p>

          </div>

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