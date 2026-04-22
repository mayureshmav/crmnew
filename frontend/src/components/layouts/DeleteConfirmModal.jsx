import { useState } from "react";
import { motion } from "framer-motion";
import { FaExclamationTriangle, FaTimes } from "react-icons/fa";

export default function DeleteConfirmModal({ layout, onClose }) {

  const [reason, setReason] = useState("");

  return (

    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">

      {/* 🌈 GRADIENT BORDER (DANGER THEME) */}

      <div className="p-[1.5px] rounded-2xl bg-gradient-to-r from-red-400 via-rose-400 to-red-500 w-full max-w-md">

        {/* 🌟 MODAL */}

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="
          relative
          rounded-2xl
          bg-gradient-to-br from-white via-red-50/40 to-rose-50/40
          p-6 md:p-7
          shadow-[0_20px_60px_rgba(0,0,0,0.2)]
          space-y-5
          "
        >

          {/* 🔥 GLOW */}

          <div className="absolute -top-16 -left-16 w-40 h-40 bg-red-400/20 blur-3xl rounded-full"></div>
          <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-rose-400/20 blur-3xl rounded-full"></div>


          {/* ================= HEADER ================= */}

          <div className="flex items-center justify-between relative z-10">

            <div className="flex items-center gap-3">

              <div className="p-2 rounded-lg bg-red-100 text-red-600">
                <FaExclamationTriangle />
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  Delete Layout
                </h2>
                <p className="text-xs text-gray-500">
                  {layout.name}
                </p>
              </div>

            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-gray-100 transition"
            >
              <FaTimes className="text-gray-500" />
            </button>

          </div>


          {/* ================= WARNING ================= */}

          <div className="relative z-10 text-sm text-gray-600 bg-red-50 border border-red-200 rounded-lg p-3">
            This action cannot be undone without admin recovery.  
            Please provide a reason for audit logging.
          </div>


          {/* ================= INPUT ================= */}

          <textarea
            placeholder="Enter deletion reason (required)"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="
            w-full
            min-h-[90px]
            px-3 py-2.5
            rounded-lg
            border border-gray-200
            bg-white/80
            focus:ring-2 focus:ring-red-500
            outline-none
            text-sm
            resize-none
            "
          />


          {/* ================= ACTIONS ================= */}

          <div className="flex justify-end gap-3 relative z-10">

            <button
              onClick={onClose}
              className="
              px-4 py-2
              text-sm
              text-gray-600
              hover:text-gray-800
              transition
              "
            >
              Cancel
            </button>

            <motion.button
              whileHover={{ scale: reason ? 1.05 : 1 }}
              whileTap={{ scale: reason ? 0.96 : 1 }}
              disabled={!reason}
              className={`
              px-5 py-2
              rounded-lg
              text-white text-sm font-medium
              transition
              ${reason
                ? "bg-gradient-to-r from-red-500 to-rose-500 shadow-md hover:shadow-lg"
                : "bg-gray-300 cursor-not-allowed"}
              `}
            >
              Confirm Delete
            </motion.button>

          </div>

        </motion.div>

      </div>

    </div>

  );
}