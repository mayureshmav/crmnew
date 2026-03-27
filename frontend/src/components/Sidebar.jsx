import { NavLink } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";
import { FaFileInvoice } from "react-icons/fa";
import { FaDraftingCompass } from "react-icons/fa";
import { FaChartPie, FaUserFriends, FaProjectDiagram, FaTasks } from "react-icons/fa";

const menu = [
  { name: "Dashboard", path: "/", icon: <FaChartPie /> },
  { name: "Leads", path: "/leads", icon: <FaUserFriends /> },
  { name: "Meetings", path: "/meetings", icon: <FaCalendarAlt /> },
  { name: "Quotations", path: "/quotations", icon: <FaFileInvoice /> },
  { name: "Projects", path: "/projects", icon: <FaProjectDiagram /> },
  { name: "Tasks", path: "/tasks", icon: <FaTasks /> },
  { name: "Layouts", path: "/layouts", icon: <FaDraftingCompass /> },

];

const Sidebar = ({ isOpen }) => {
  return (
    <aside
      className={`fixed left-0 top-0 w-64 h-screen bg-white border-r border-gray-400 z-40
      transform transition-transform duration-300
      ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
    >

      <div className="h-22 flex items-center px-6 text-xl font-bold text-indigo-600">
        CRM SaaS
      </div>

      <nav className="px-4 space-y-2 mt-4">

        {menu.map((item) => (
          <NavLink key={item.name} to={item.path}>
            {({ isActive }) => (
              <div
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium cursor-pointer
                ${
                  isActive
                    ? "bg-indigo-100 text-indigo-600"
                    : "text-gray-600 hover:bg-indigo-50"
                }`}
              >
                {item.icon}
                {item.name}
              </div>
            )}
          </NavLink>
        ))}

      </nav>

    </aside>
  );
};

export default Sidebar;