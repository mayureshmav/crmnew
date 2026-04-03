import { motion } from "framer-motion";
import { FaEye, FaEdit } from "react-icons/fa";

const LeadTable = ({ leads }) => {

  const getStatusStyle = (status) => {
    switch (status) {
      case "New":
        return "bg-blue-100 text-blue-600";
      case "Meeting":
        return "bg-yellow-100 text-yellow-600";
      case "Won":
        return "bg-green-100 text-green-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-x-auto">

      <table className="w-full text-sm">

        {/* TABLE HEADER */}

        <thead className="bg-gray-50 text-gray-600 text-xs uppercase">

          <tr>
            <th className="p-4 text-left">Client</th>
            <th className="p-4 text-left">Source</th>
            <th className="p-4 text-left">City</th>
            <th className="p-4 text-left">Budget</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-left">Actions</th>
          </tr>

        </thead>

        {/* TABLE BODY */}

        <tbody>

          {leads.map((lead, index) => (

            <motion.tr
              key={lead.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ backgroundColor: "#f9fafb" }}
              className="border-t"
            >

              {/* CLIENT */}

              <td className="p-4">

                <div className="flex items-center gap-3">

                  <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold text-xs">
                    {lead.name.charAt(0)}
                  </div>

                  <span className="font-medium text-gray-800">
                    {lead.name}
                  </span>

                </div>

              </td>

              {/* SOURCE */}

              <td className="p-4">

                <span className="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full">
                  {lead.source}
                </span>

              </td>

              {/* CITY */}

              <td className="p-4 text-gray-600">
                {lead.city}
              </td>

              {/* BUDGET */}

              <td className="p-4 font-semibold text-green-600">
                ₹{lead.budget}
              </td>

              {/* STATUS */}

              <td className="p-4">

                <span
                  className={`text-xs px-3 py-1 rounded-full font-medium ${getStatusStyle(
                    lead.status
                  )}`}
                >
                  {lead.status}
                </span>

              </td>

              {/* ACTIONS */}

              <td className="p-4">

                <div className="flex gap-3 text-gray-500">

                  <button className="hover:text-indigo-600">
                    <FaEye />
                  </button>

                  <button className="hover:text-green-600">
                    <FaEdit />
                  </button>

                </div>

              </td>

            </motion.tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default LeadTable;