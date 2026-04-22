import { motion } from "framer-motion";
import { FaUpload, FaTimes } from "react-icons/fa";

export default function UploadLayoutModal({ onClose }) {

  return (

    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">

      {/* 🌈 GRADIENT BORDER */}

      <div className="p-[1.5px] rounded-2xl bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 w-full max-w-lg">

        {/* 🌟 MODAL */}

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="
          relative
          rounded-2xl
          bg-gradient-to-br from-white via-indigo-50/40 to-purple-50/40
          backdrop-blur
          p-6 md:p-7
          shadow-[0_20px_60px_rgba(0,0,0,0.15)]
          space-y-5
          "
        >

          {/* ✨ GLOW */}

          <div className="absolute -top-16 -left-16 w-40 h-40 bg-indigo-400/20 blur-3xl rounded-full"></div>
          <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-purple-400/20 blur-3xl rounded-full"></div>


          {/* ================= HEADER ================= */}

          <div className="flex items-center justify-between relative z-10">

            <h2 className="text-lg md:text-xl font-semibold text-gray-800">
              Upload Layout
            </h2>

            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-gray-100 transition"
            >
              <FaTimes className="text-gray-500" />
            </button>

          </div>


          {/* ================= FORM ================= */}

          <div className="space-y-4 relative z-10">

            {/* Layout Name */}

            <input
              placeholder="Layout Name"
              className="
              w-full
              px-3 py-2.5
              rounded-lg
              border border-gray-200
              bg-white/80
              focus:ring-2 focus:ring-indigo-500
              outline-none
              text-sm
              "
            />


            {/* Layout Type */}

            <select className="
            w-full px-3 py-2.5
            rounded-lg border border-gray-200
            bg-white/80 text-sm
            focus:ring-2 focus:ring-indigo-500
            outline-none
            ">
              <option>Floor Plan</option>
              <option>Electrical</option>
              <option>Plumbing</option>
              <option>Elevation</option>
              <option>3D Render</option>
            </select>


            {/* Version + Uploaded By */}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

              <input
                placeholder="Version (v1, v2...)"
                className="px-3 py-2.5 rounded-lg border border-gray-200 bg-white/80 text-sm"
              />

              <input
                placeholder="Uploaded By"
                className="px-3 py-2.5 rounded-lg border border-gray-200 bg-white/80 text-sm"
              />

            </div>


            {/* Upload Date */}

            <input
              type="date"
              className="w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-white/80 text-sm"
            />


            {/* FILE UPLOAD ZONE */}

            <div className="
            border-2 border-dashed border-indigo-200
            rounded-xl p-5 text-center
            bg-indigo-50/40
            hover:bg-indigo-50/60
            transition cursor-pointer
            ">

              <FaUpload className="mx-auto text-indigo-500 mb-2" />

              <p className="text-sm text-gray-600">
                Drag & drop or click to upload
              </p>

              <p className="text-xs text-gray-400 mt-1">
                PDF, DWG, PNG, JPG (Max size configurable)
              </p>

              <input type="file" className="hidden" />

            </div>

          </div>


          {/* ================= ACTIONS ================= */}

          <div className="flex justify-end gap-3 pt-2 relative z-10">

            <button
              onClick={onClose}
              className="
              px-4 py-2
              text-gray-600 text-sm
              hover:text-gray-800
              transition
              "
            >
              Cancel
            </button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="
              px-5 py-2
              rounded-lg
              text-white text-sm font-medium
              bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600
              shadow-md hover:shadow-lg
              transition
              "
            >
              Upload Layout
            </motion.button>

          </div>

        </motion.div>

      </div>

    </div>

  );
}