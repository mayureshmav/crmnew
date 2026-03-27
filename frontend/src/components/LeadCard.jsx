import { FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const LeadCard = ({ lead }) => {
  const navigate = useNavigate();

  const statusColor =
    lead.status === "New"
      ? "border-blue-500"
      : lead.status === "Meeting"
      ? "border-yellow-500"
      : lead.status === "Won"
      ? "border-green-500"
      : "border-gray-300";

  const badgeColor =
    lead.status === "New"
      ? "bg-blue-100 text-blue-600"
      : lead.status === "Meeting"
      ? "bg-yellow-100 text-yellow-600"
      : lead.status === "Won"
      ? "bg-green-100 text-green-600"
      : "bg-gray-100 text-gray-600";

  return (
    <motion.div
      onClick={() => navigate("/lead-details")}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.3 }}
      className={`cursor-pointer bg-white border-l-4 ${statusColor} border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-lg transition`}
    >

      {/* TOP SECTION */}

      <div className="flex justify-between items-start mb-3">

        <div className="flex items-center gap-3">

          {/* Avatar */}

          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 font-semibold">
            {lead.name.charAt(0)}
          </div>

          <div>

            <h3 className="font-semibold text-gray-800">
              {lead.name}
            </h3>

            <p className="text-xs text-gray-400">
              Potential Client
            </p>

          </div>

        </div>

        {/* STATUS BADGE */}

        <span
          className={`text-xs px-3 py-1 rounded-full font-medium ${badgeColor}`}
        >
          {lead.status}
        </span>

      </div>

      {/* CONTACT INFO */}

      <div className="space-y-1 text-sm text-gray-500">

        <p className="flex items-center gap-2">
          <FaPhone className="text-gray-400" />
          {lead.phone}
        </p>

        <p className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-gray-400" />
          {lead.city}
        </p>

      </div>

      {/* FOOTER */}

      <div className="mt-4 flex justify-between items-center">

        <span className="text-xs bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full font-medium">
          {lead.source}
        </span>

        <span className="text-sm font-semibold text-green-600">
          ₹{lead.budget}
        </span>

      </div>

    </motion.div>
  );
};

export default LeadCard;