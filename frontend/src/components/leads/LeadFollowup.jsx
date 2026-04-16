import { motion } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";

const LeadFollowup = ({ date }) => {

  if (!date)
    return (
      <span className="text-gray-400 text-xs">
        Not Scheduled
      </span>
    );

  const overdue = new Date(date) < new Date();

  return (

    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`
      flex items-center gap-2 px-2 py-1 text-xs rounded
      ${overdue
          ? "bg-red-100 text-red-700"
          : "bg-green-100 text-green-700"}
      `}
    >

      <FaCalendarAlt />

      {date}

    </motion.div>

  );
};

export default LeadFollowup;