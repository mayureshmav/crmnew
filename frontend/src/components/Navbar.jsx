import { FaBell, FaSearch, FaBars } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = ({ toggleSidebar }) => {
  return (
    <motion.header
  initial={{ y: -40, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  className="h-22 bg-white border-b border-gray-400 flex items-center justify-between px-6 w-full"
>

      <div className="flex items-center gap-4">

        {/* mobile menu */}
        <FaBars
          className="text-gray-600 text-xl md:hidden cursor-pointer"
          onClick={toggleSidebar}
        />

        <div className="hidden md:flex items-center gap-3 border border-gray-400 rounded-lg px-3 py-2 w-80">

          <FaSearch className="text-gray-500" />

          <input
            type="text"
            placeholder="Search leads..."
            className="outline-none w-full text-sm"
          />

        </div>

      </div>

      <div className="flex items-center gap-4 md:gap-6">

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-indigo-600 text-white px-3 md:px-4 py-2 rounded-lg text-sm"
        >
          + Add Lead
        </motion.button>

        <FaBell className="text-gray-500 text-lg cursor-pointer" />

        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>

      </div>

    </motion.header>
  );
};

export default Navbar;