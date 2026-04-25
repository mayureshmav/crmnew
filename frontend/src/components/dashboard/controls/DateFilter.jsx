import { motion } from "framer-motion";
import { CalendarDays, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function DateFilter({ value, onChange }) {

  const [open, setOpen] = useState(false);

  const options = [
    "MTD",
    "Last Month",
    "Last 3 Months",
    "Custom Range"
  ];

  return (

    <div className="relative">

      {/* 🌈 BUTTON */}

      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setOpen(!open)}
        className="
        flex items-center gap-2
        px-3 py-2
        rounded-xl
        bg-white/80 backdrop-blur
        border border-indigo-200
        shadow-sm hover:shadow-md
        transition
        text-sm
        "
      >

        <CalendarDays size={16} className="text-indigo-500" />

        <span className="text-gray-700">
          {value}
        </span>

        <ChevronDown size={14} className="text-gray-400" />

      </motion.button>


      {/* ================= DROPDOWN ================= */}

      {open && (

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="
          absolute mt-2 w-48 z-50
          rounded-xl
          bg-gradient-to-br from-white via-indigo-50/40 to-purple-50/40
          border border-gray-200
          shadow-xl
          p-2
          space-y-1
          "
        >

          {options.map((opt,i)=>(

            <motion.div
              key={opt}
              whileHover={{ scale: 1.02 }}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              className={`
              px-3 py-2 rounded-lg text-sm cursor-pointer
              transition
              ${value === opt
                ? "bg-indigo-100 text-indigo-600 font-medium"
                : "hover:bg-gray-100 text-gray-700"}
              `}
            >
              {opt}
            </motion.div>

          ))}

          {/* CUSTOM RANGE INPUT (BASIC UI) */}

          {value === "Custom Range" && (

            <div className="mt-2 space-y-2">

              <input
                type="date"
                className="w-full text-xs border rounded-md px-2 py-1"
              />

              <input
                type="date"
                className="w-full text-xs border rounded-md px-2 py-1"
              />

            </div>

          )}

        </motion.div>

      )}

    </div>

  );
}