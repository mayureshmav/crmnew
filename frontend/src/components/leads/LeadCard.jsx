import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUserTie,
  FaEye
} from "react-icons/fa";

import LeadScoreBadge from "./LeadScoreBadge";

/* Score Accent System */

const scoreTheme = {
  Hot: {
    accent: "text-red-600",
    icon: "text-red-500",
    iconBg: "bg-red-50"
  },
  Warm: {
    accent: "text-yellow-600",
    icon: "text-yellow-500",
    iconBg: "bg-yellow-50"
  },
  Cold: {
    accent: "text-blue-600",
    icon: "text-blue-500",
    iconBg: "bg-blue-50"
  }
};

/* Motion Animation */

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35 }
  },
  hover: {
    y: -6,
    scale: 1.02
  }
};

export default function LeadCard({ lead }) {

  const s = scoreTheme[lead.score] || scoreTheme.Cold;

  return (

    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="relative rounded-xl p-[2px] bg-gradient-to-r from-indigo-500 to-blue-500"
    >

      {/* White Card */}

      <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-5 flex flex-col h-full">

        {/* HEADER */}

        <div className="flex justify-between items-start">

          <div>

            <h3 className="text-lg font-semibold text-gray-800">
              {lead.name}
            </h3>

            <p className="text-xs text-gray-400 mt-1">
              ID: {lead.id}
            </p>

          </div>

          <LeadScoreBadge score={lead.score} />

        </div>


        {/* CONTACT INFO */}

        <div className="mt-4 space-y-3 text-sm text-gray-600">

          <div className="flex items-center gap-2">

            <span className={`p-2 rounded-md ${s.iconBg}`}>
              <FaPhone className={s.icon}/>
            </span>

            {lead.phone}

          </div>

          <div className="flex items-center gap-2">

            <span className={`p-2 rounded-md ${s.iconBg}`}>
              <FaEnvelope className={s.icon}/>
            </span>

            {lead.email}

          </div>

          <div className="flex items-center gap-2">

            <span className={`p-2 rounded-md ${s.iconBg}`}>
              <FaMapMarkerAlt className={s.icon}/>
            </span>

            {lead.city || "Location not added"}

          </div>

          <div className="flex items-center gap-2">

            <span className={`p-2 rounded-md ${s.iconBg}`}>
              <FaUserTie className={s.icon}/>
            </span>

            {lead.assignedRep || "Unassigned"}

          </div>

        </div>


        {/* FOOTER */}

        <div className="flex items-center justify-between mt-5">

          <span className={`text-sm font-semibold ${s.accent}`}>
            ₹ {lead.budget}
          </span>

          <span className="text-xs px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 font-medium">
            {lead.source}
          </span>

        </div>


        {/* CTA BUTTON */}

        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.95 }}
          className="
            mt-5
            w-full
            flex
            items-center
            justify-center
            gap-2
            text-sm
            py-2
            rounded-lg
            text-white
            font-medium
            bg-gradient-to-r
            from-indigo-600
            to-blue-600
            shadow-sm
            hover:shadow-md
            transition
          "
        >

          <FaEye />

          View Lead

        </motion.button>

      </div>

    </motion.div>

  );

}