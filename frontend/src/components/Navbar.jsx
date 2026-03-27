import { FaBell, FaSearch, FaBars } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = ({ toggleSidebar }) => {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-6 w-full sticky top-0 z-30 shadow-sm"
    >

      {/* LEFT SECTION */}

      <div className="flex items-center gap-4">

        {/* Mobile menu button */}

        <FaBars
          className="text-gray-600 text-xl md:hidden cursor-pointer"
          onClick={toggleSidebar}
        />

        {/* SEARCH BAR */}

        <div className="hidden md:flex items-center gap-3 bg-gray-100 rounded-lg px-3 py-2 w-80 focus-within:ring-2 focus-within:ring-indigo-200">

          <FaSearch className="text-gray-400" />

          <input
            type="text"
            placeholder="Search leads, projects..."
            className="outline-none bg-transparent w-full text-sm"
          />

        </div>

      </div>

      {/* RIGHT SECTION */}

      <div className="flex items-center gap-4 md:gap-6">

        {/* ADD LEAD BUTTON */}

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium shadow"
        >
          + Add Lead
        </motion.button>

        {/* NOTIFICATION */}

        <div className="relative cursor-pointer">

          <FaBell className="text-gray-500 text-lg hover:text-indigo-600 transition" />

          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
            3
          </span>

        </div>

        {/* USER PROFILE */}

        <div className="flex items-center gap-3 cursor-pointer">

          <div className="w-9 h-9 bg-indigo-100 text-indigo-600 flex items-center justify-center rounded-full font-semibold">
            A
          </div>

          <div className="hidden md:block">

            <p className="text-sm font-medium text-gray-700">
              Admin
            </p>

            <p className="text-xs text-gray-400">
              Project Manager
            </p>

          </div>

        </div>

      </div>

    </motion.header>
  );
};

export default Navbar;