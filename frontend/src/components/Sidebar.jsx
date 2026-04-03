import { NavLink } from "react-router-dom";
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
} from "react-icons/fa";
import { FaFileSignature } from "react-icons/fa6";

const menu = [
  { name: "Dashboard", path: "/", icon: <FaChartPie /> },
  { name: "Leads", path: "/leads", icon: <FaUserFriends /> },
  { name: "Meetings", path: "/meetings", icon: <FaCalendarAlt /> },
  { name: "Quotations", path: "/quotations", icon: <FaFileInvoice /> },
  { name: "Projects", path: "/projects", icon: <FaProjectDiagram /> },
  { name: "Tasks", path: "/tasks", icon: <FaTasks /> },
  { name: "Layouts", path: "/layouts", icon: <FaDraftingCompass /> },
  { name: "Vendors", path: "/vendors", icon: <FaTruck /> },
  { name: "Reports", path: "/reports", icon: <FaChartBar /> },
  { name: "Contracts", path: "/contract", icon: <FaFileSignature /> }
];

const Sidebar = ({ isOpen, onNavigate }) => {
  return (
    <aside
      className={`fixed left-0 top-0 w-64 h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 text-gray-300 z-40
      transform transition-transform duration-300
      ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
    >
      
      {/* LOGO AREA */}

      <div className="h-20 flex items-center gap-3 px-6 border-b border-gray-700">

        <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white">
          C
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white">
            CRM Suite
          </h2>
          <p className="text-xs text-gray-400">
            Business Manager
          </p>
        </div>

      </div>

      {/* MENU */}

      <nav className="px-3 mt-6 space-y-2">

        {menu.map((item) => (
          <NavLink key={item.name} to={item.path} onClick={onNavigate}>
            {({ isActive }) => (
              <div
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer
                ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-lg"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
              >
                <span className="text-lg">{item.icon}</span>

                {item.name}

              </div>
            )}
          </NavLink>
        ))}

      </nav>

      {/* FOOTER */}

      <div className="absolute bottom-6 left-0 w-full px-6 text-xs text-gray-500">
        CRM v1.0
      </div>

    </aside>
  );
};

export default Sidebar;