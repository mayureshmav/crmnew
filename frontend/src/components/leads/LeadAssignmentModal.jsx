import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaUserTie,
  FaTimes,
  FaCheckCircle
} from "react-icons/fa";

/* Sales Representatives */

const reps = [
  {
    id: 1,
    name: "Amit Sharma",
    role: "Sales Rep",
    theme: "blue"
  },
  {
    id: 2,
    name: "Neha Kapoor",
    role: "Senior Sales",
    theme: "green"
  },
  {
    id: 3,
    name: "Ravi Verma",
    role: "Manager",
    theme: "orange"
  }
];

/* Theme System */

const theme = {
  blue: {
    border: "border-blue-500",
    icon: "bg-blue-100 text-blue-600",
    accent: "text-blue-600",
    badge: "bg-blue-500"
  },
  green: {
    border: "border-green-500",
    icon: "bg-green-100 text-green-600",
    accent: "text-green-600",
    badge: "bg-green-500"
  },
  orange: {
    border: "border-orange-500",
    icon: "bg-orange-100 text-orange-600",
    accent: "text-orange-600",
    badge: "bg-orange-500"
  }
};

export default function LeadAssignmentModal({ open, onClose }) {

  const [selected, setSelected] = useState(null);

  if (!open) return null;

  return (

    <AnimatePresence>

      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
      >

        {/* Modal */}
        <motion.div
          initial={{ scale: 0.85, y: 30 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.85, y: 30 }}
          transition={{ duration: 0.25 }}
          className="w-full max-w-3xl"
        >

          {/* Gradient Border */}
          <div className="p-[2px] rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600">

            <div className="bg-white rounded-2xl shadow-xl">

              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b">

                <h2 className="text-lg font-semibold text-gray-800">
                  Assign Lead
                </h2>

                <button
                  onClick={onClose}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <FaTimes />
                </button>

              </div>

              {/* Body */}
              <div className="p-6">

                {/* Rep Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                  {reps.map((rep, index) => {

                    const t = theme[rep.theme];

                    return (

                      <motion.div
                        key={rep.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.08 }}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => setSelected(rep.id)}
                        className={`cursor-pointer border-2 rounded-xl p-5 shadow-md transition
                        ${t.border}
                        ${selected === rep.id ? "ring-2 ring-offset-2 ring-indigo-400" : ""}
                        `}
                      >

                        {/* Header Row */}
                        <div className="flex items-center justify-between">

                          <div className="flex items-center gap-3">

                            {/* Animated Icon */}
                            <motion.div
                              animate={{ rotate: [0, 10, -10, 0] }}
                              transition={{ repeat: Infinity, duration: 4 }}
                              className={`p-3 rounded-lg ${t.icon}`}
                            >
                              <FaUserTie />
                            </motion.div>

                            <div>

                              <h3 className="text-sm font-semibold text-gray-800">
                                {rep.name}
                              </h3>

                              <p className={`text-xs font-medium ${t.accent}`}>
                                {rep.role}
                              </p>

                            </div>

                          </div>

                          {/* Badge */}
                          <span className={`text-white text-xs px-3 py-1 rounded-full ${t.badge}`}>
                            Assign
                          </span>

                        </div>

                        {/* Divider */}
                        <div className="border-t border-gray-100 my-4"></div>

                        {/* Footer */}
                        <div className="flex items-center justify-between">

                          <span className="text-xs text-gray-500">
                            Click to assign lead
                          </span>

                          {selected === rep.id && (
                            <FaCheckCircle className={`${t.accent}`} />
                          )}

                        </div>

                      </motion.div>

                    );

                  })}

                </div>

              </div>

              {/* Footer */}
              <div className="flex justify-end gap-3 px-6 py-4 border-t">

                <button
                  onClick={onClose}
                  className="px-4 py-2 border rounded-lg text-sm hover:bg-gray-50"
                >
                  Cancel
                </button>

                <button
                  className="px-5 py-2 text-white rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-sm shadow-md"
                >
                  Confirm Assignment
                </button>

              </div>

            </div>

          </div>

        </motion.div>

      </motion.div>

    </AnimatePresence>

  );

}