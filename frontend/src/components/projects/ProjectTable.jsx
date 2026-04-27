import { motion } from "framer-motion";
import {
  FaEye,
  FaEdit,
  FaLink
} from "react-icons/fa";

export default function ProjectTable({ projects, onSelect }) {

  /*
  |--------------------------------------------------------------------------
  | STATUS STYLE
  |--------------------------------------------------------------------------
  */

  const statusStyle = (status) => {

    switch(status){

      case "Completed":
        return "bg-emerald-100 text-emerald-600";

      case "In Progress":
        return "bg-blue-100 text-blue-600";

      case "Preconstruction":
        return "bg-yellow-100 text-yellow-600";

      case "Delayed":
        return "bg-red-100 text-red-600";

      default:
        return "bg-gray-100 text-gray-600";
    }

  };

  /*
  |--------------------------------------------------------------------------
  | UI
  |--------------------------------------------------------------------------
  */

  return (

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative"
    >

      {/* 🌈 BORDER */}

      <div className="
      p-[1.5px]
      rounded-2xl
      bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400
      shadow-[0_10px_40px_rgba(99,102,241,0.12)]
      ">

        {/* INNER */}

        <div className="
        relative
        rounded-2xl
        bg-gradient-to-br from-white via-indigo-50/30 to-purple-50/30
        border border-gray-200
        overflow-x-auto
        ">

          {/* GLOW */}

          <div className="absolute -top-20 -right-20 w-72 h-72 bg-indigo-300/20 blur-3xl rounded-full"></div>

          {/* ================= TABLE ================= */}

          <table className="w-full text-sm min-w-[900px]">

            {/* HEADER */}

            <thead className="text-gray-500 text-xs uppercase border-b bg-white/70 backdrop-blur">

              <tr>
                <th className="p-4 text-left">Project ID</th>
                <th className="p-4 text-left">Project</th>
                <th className="p-4 text-left">Customer</th>
                <th className="p-4 text-left">PM</th>
                <th className="p-4 text-left">Type</th>
                <th className="p-4 text-left">Timeline</th>
                <th className="p-4 text-left">Value</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-left">Links</th>
                <th className="p-4 text-left">Actions</th>
              </tr>

            </thead>

            {/* BODY */}

            <tbody>

              {projects.map((p, i) => (

                <motion.tr
                  key={p.id}
                  onClick={() => onSelect && onSelect(p)} // ✅ CLICK ENABLED
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ backgroundColor: "#f9fafb" }}
                  className="border-t cursor-pointer"
                >

                  {/* PROJECT ID */}
                  <td className="p-4 font-medium text-indigo-600">
                    {p.projectId}
                  </td>

                  {/* NAME */}
                  <td className="p-4 font-medium text-gray-800">
                    {p.name}
                  </td>

                  {/* CUSTOMER */}
                  <td className="p-4 text-gray-600">
                    {p.customer}
                  </td>

                  {/* PM */}
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center text-xs text-blue-600 font-semibold">
                        {p.pm?.charAt(0)}
                      </div>
                      {p.pm}
                    </div>
                  </td>

                  {/* TYPE */}
                  <td className="p-4 text-gray-600">
                    {p.type || "Interior"}
                  </td>

                  {/* TIMELINE */}
                  <td className="p-4 text-xs text-gray-500">
                    <div>
                      <span className="block">Start: {p.start}</span>
                      <span className="block">End: {p.end}</span>
                    </div>
                  </td>

                  {/* VALUE */}
                  <td className="p-4 font-semibold text-emerald-600">
                    {p.value} {p.currency}
                  </td>

                  {/* STATUS */}
                  <td className="p-4">
                    <span className={`
                    text-xs px-3 py-1 rounded-full font-medium
                    ${statusStyle(p.status)}
                    `}>
                      {p.status}
                    </span>
                  </td>

                  {/* LINKS */}
                  <td className="p-4">
                    <button
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 text-indigo-500 hover:underline text-xs"
                    >
                      <FaLink size={12} />
                      Linked
                    </button>
                  </td>

                  {/* ACTIONS */}
                  <td className="p-4">
                    <div className="flex gap-3 text-gray-500">

                      <button
                        onClick={(e) => e.stopPropagation()}
                        className="hover:text-indigo-600"
                      >
                        <FaEye />
                      </button>

                      <button
                        onClick={(e) => e.stopPropagation()}
                        className="hover:text-green-600"
                      >
                        <FaEdit />
                      </button>

                    </div>
                  </td>

                </motion.tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </motion.div>

  );

}