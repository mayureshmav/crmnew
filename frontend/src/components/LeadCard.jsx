import { FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const LeadCard = ({ lead }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      onClick={() => navigate("/lead-details")}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.3 }}
      className="cursor-pointer bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-lg transition"
    >

      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-gray-800">{lead.name}</h3>

        <span
          className={`text-xs px-2 py-1 rounded-full
          ${
            lead.status === "New"
              ? "bg-blue-100 text-blue-600"
              : lead.status === "Meeting"
              ? "bg-yellow-100 text-yellow-600"
              : lead.status === "Won"
              ? "bg-green-100 text-green-600"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          {lead.status}
        </span>
      </div>

      <p className="text-sm text-gray-500 flex items-center gap-2">
        <FaPhone /> {lead.phone}
      </p>

      <p className="text-sm text-gray-500 flex items-center gap-2 mt-1">
        <FaMapMarkerAlt /> {lead.city}
      </p>

      <div className="mt-3 flex justify-between items-center">
        <span className="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded">
          {lead.source}
        </span>

        <span className="text-sm font-medium text-gray-700">
          ₹{lead.budget}
        </span>
      </div>

    </motion.div>
  );
};

export default LeadCard;