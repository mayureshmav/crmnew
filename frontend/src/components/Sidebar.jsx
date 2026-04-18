import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaFileInvoice,
  FaTruck,
  FaDraftingCompass,
  FaChartPie,
  FaUserFriends,
  FaProjectDiagram,
  FaTasks,
  FaChartBar,
  FaColumns,
  FaUser,
} from "react-icons/fa";
import { FaFileSignature } from "react-icons/fa6";

const menu = [
  { name: "Dashboard", path: "/", icon: <FaChartPie /> },
  { name: "LEAD & OPPORTUNITY MGMT ", path: "/leads", icon: <FaUserFriends /> },
  { name: "Meetings", path: "/meetings", icon: <FaCalendarAlt /> },
  { name: "Quotations", path: "/quotations", icon: <FaFileInvoice /> },
  { name: "Projects", path: "/projects", icon: <FaProjectDiagram /> },
  { name: "Tasks", path: "/tasks", icon: <FaTasks /> },
  { name: "Layouts", path: "/layouts", icon: <FaDraftingCompass /> },
  { name: "Vendors", path: "/vendors", icon: <FaTruck /> },
  { name: "Reports", path: "/reports", icon: <FaChartBar /> },
  { name: "Contracts", path: "/contract", icon: <FaFileSignature /> },
  { name: "Project Board", path: "/project-board", icon: <FaColumns /> },
  { name: "Client Discovery", path: "/client-discovery", icon: <FaUser /> },
];

const Sidebar = ({ isOpen, onNavigate }) => {
  return (
    <aside
      className={`fixed left-0 top-0 w-20 h-screen 
      bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 
      text-gray-300 z-40 shadow-xl
      transform transition-transform duration-300
      ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
    >

      {/* LOGO */}
      <div className="h-20 flex items-center justify-center border-b border-gray-700">
        <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold">
          C
        </div>
      </div>

      {/* MENU */}
      <nav className="mt-6 flex flex-col items-center space-y-3">

        {menu.map((item) => (
          <NavLink key={item.name} to={item.path} onClick={onNavigate}>
            {({ isActive }) => (
              <div className="group relative">

                <motion.div
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-200 cursor-pointer
                  ${
                    isActive
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                      : "hover:bg-gray-800 hover:text-white"
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                </motion.div>

                {/* Tooltip */}
                <div
                  className="
                  absolute left-14 top-1/2 -translate-y-1/2
                  bg-gray-800 text-white text-sm px-3 py-1 rounded-md
                  opacity-0 group-hover:opacity-100
                  pointer-events-none transition-all duration-200
                  whitespace-nowrap shadow-lg
                "
                >
                  {item.name}
                </div>

              </div>
            )}
          </NavLink>
        ))}

      </nav>

      {/* FOOTER */}
      <div className="absolute bottom-6 w-full text-center text-xs text-gray-500">
        v1.0
      </div>

    </aside>
  );
};

export default Sidebar;