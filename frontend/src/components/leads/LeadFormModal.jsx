import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaUserPlus } from "react-icons/fa";

export default function LeadFormModal({ isOpen, onClose }) {

  if (!isOpen) return null;

  return (

    <AnimatePresence>

      {/* Background Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
      >

        {/* Modal Card */}
        <motion.div
          initial={{ scale: 0.8, y: 40 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.8, y: 40 }}
          transition={{ duration: 0.3 }}
          className="w-full max-w-2xl"
        >

          {/* Gradient Border */}
          <div className="rounded-2xl p-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500">

            {/* Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 text-white bg-gradient-to-r from-indigo-500 to-purple-600">

                <div className="flex items-center gap-2">
                  <FaUserPlus />
                  <h2 className="font-semibold">
                    Add New Lead
                  </h2>
                </div>

                <button
                  onClick={onClose}
                  className="hover:opacity-80 transition"
                >
                  <FaTimes />
                </button>

              </div>

              {/* Form */}
              <div className="p-6">

                <form className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  {/* Lead Name */}
                  <input
                    type="text"
                    placeholder="Lead Name"
                    className="input-style"
                  />

                  {/* Phone */}
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="input-style"
                  />

                  {/* Email */}
                  <input
                    type="email"
                    placeholder="Email"
                    className="input-style"
                  />

                  {/* Source */}
                  <select className="input-style">
                    <option>Lead Source</option>
                    <option>Website</option>
                    <option>IndiaMart</option>
                    <option>MagicBricks</option>
                    <option>Referral</option>
                    <option>Walk-in</option>
                  </select>

                  {/* Property Interest */}
                  <input
                    type="text"
                    placeholder="Property Interest"
                    className="input-style"
                  />

                  {/* Budget */}
                  <input
                    type="text"
                    placeholder="Budget Range"
                    className="input-style"
                  />

                  {/* Timeline */}
                  <input
                    type="text"
                    placeholder="Timeline"
                    className="input-style"
                  />

                  {/* Assigned Rep */}
                  <input
                    type="text"
                    placeholder="Assigned Sales Rep"
                    className="input-style"
                  />

                  {/* Notes */}
                  <textarea
                    placeholder="Notes"
                    className="input-style md:col-span-2"
                    rows="3"
                  />

                </form>

                {/* Buttons */}
                <div className="flex justify-end gap-3 mt-6">

                  <button
                    onClick={onClose}
                    className="px-4 py-2 border rounded-lg hover:bg-gray-50 transition"
                  >
                    Cancel
                  </button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-5 py-2 text-white rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 shadow-md"
                  >
                    Save Lead
                  </motion.button>

                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </motion.div>

    </AnimatePresence>

  );
}