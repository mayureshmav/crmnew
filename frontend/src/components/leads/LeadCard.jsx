import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUserTie,
} from "react-icons/fa";
import LeadScoreBadge from "./LeadScoreBadge";

const cardVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
  hover: {
    y: -6,
    scale: 1.02,
    transition: {
      duration: 0.2,
    },
  },
};

export default function LeadCard({ lead }) {

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="
      relative
      group
      rounded-xl
      overflow-hidden
      bg-white/70
      backdrop-blur-lg
      border
      border-gray-200/60
      shadow-lg
      transition-all
      duration-300
      "
    >

      {/* animated gradient border */}
      <div
        className="
        absolute
        inset-0
        rounded-xl
        opacity-0
        group-hover:opacity-100
        transition
        duration-500
        bg-gradient-to-r
        from-indigo-500
        via-purple-500
        to-pink-500
        blur-xl
        -z-10
        "
      />

      <div className="p-5 flex flex-col h-full">

        {/* HEADER */}
        <div className="flex items-start justify-between">

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

        <div className="mt-4 space-y-2 text-sm text-gray-600">

          <div className="flex items-center gap-2">
            <FaPhone className="text-indigo-500" />
            {lead.phone}
          </div>

          <div className="flex items-center gap-2">
            <FaEnvelope className="text-indigo-500" />
            {lead.email}
          </div>

          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-indigo-500" />
            {lead.city}
          </div>

          <div className="flex items-center gap-2">
            <FaUserTie className="text-indigo-500" />
            {lead.assignedRep}
          </div>

        </div>

        {/* FOOTER */}

        <div className="flex items-center justify-between mt-5">

          <span
            className="
            text-sm
            font-semibold
            bg-gradient-to-r
            from-indigo-600
            to-purple-600
            text-transparent
            bg-clip-text
            "
          >
            ₹ {lead.budget}
          </span>

          <span
            className="
            text-xs
            px-2
            py-[3px]
            rounded-full
            bg-gradient-to-r
            from-indigo-100
            to-purple-100
            text-indigo-700
            font-medium
            "
          >
            {lead.source}
          </span>

        </div>

        {/* CTA */}

        <button
          className="
          mt-4
          w-full
          text-sm
          py-2
          rounded-lg
          font-medium
          text-white
          bg-gradient-to-r
          from-indigo-600
          via-purple-600
          to-pink-500
          hover:opacity-90
          transition
          shadow-md
          "
        >
          View Lead
        </button>

      </div>
    </motion.div>
  );
}