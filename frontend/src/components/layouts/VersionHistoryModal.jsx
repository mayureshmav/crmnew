import { motion } from "framer-motion";
import { FaTimes, FaHistory } from "react-icons/fa";

export default function VersionHistoryModal({ layout, onClose }) {

  // Dummy version data (later replace with API)
  const versions = [
    {
      version: "v3",
      label: "Latest Version",
      date: "2026-04-22",
      user: "Rohit",
      status: "latest"
    },
    {
      version: "v2",
      label: "Updated Layout",
      date: "2026-04-20",
      user: "Rohit",
      status: "previous"
    },
    {
      version: "v1",
      label: "Initial Upload",
      date: "2026-04-18",
      user: "Rohit",
      status: "previous"
    }
  ];

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
          p-6 md:p-7
          shadow-[0_20px_60px_rgba(0,0,0,0.15)]
          max-h-[80vh] overflow-y-auto
          "
        >

          {/* GLOW */}

          <div className="absolute -top-16 -left-16 w-40 h-40 bg-indigo-400/20 blur-3xl rounded-full"></div>
          <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-purple-400/20 blur-3xl rounded-full"></div>


          {/* ================= HEADER ================= */}

          <div className="flex items-center justify-between mb-6 relative z-10">

            <div className="flex items-center gap-2">

              <div className="p-2 rounded-lg bg-indigo-100 text-indigo-600">
                <FaHistory />
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  Version History
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


          {/* ================= TIMELINE ================= */}

          <div className="relative border-l border-indigo-200 pl-6 space-y-6">

            {versions.map((v, i) => (

              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative group"
              >

                {/* DOT */}

                <div className={`
                absolute -left-[10px] top-1.5
                w-4 h-4 rounded-full
                ${v.status === "latest"
                  ? "bg-indigo-500 shadow-lg"
                  : "bg-gray-300"}
                `}></div>


                {/* CARD */}

                <div className="
                p-4 rounded-xl
                bg-white/80 backdrop-blur
                border border-gray-200
                shadow-sm
                hover:shadow-md
                transition
                ">

                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-2">

                      <span className="
                      text-sm font-semibold text-gray-800
                      ">
                        {v.version}
                      </span>

                      {v.status === "latest" && (
                        <span className="
                        text-xs px-2 py-0.5 rounded-full
                        bg-indigo-100 text-indigo-600
                        ">
                          Latest
                        </span>
                      )}

                    </div>

                    <span className="text-xs text-gray-400">
                      {v.date}
                    </span>

                  </div>


                  <p className="text-sm text-gray-600 mt-1">
                    {v.label}
                  </p>

                  <p className="text-xs text-gray-400 mt-1">
                    Uploaded by {v.user}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>


          {/* ================= FOOTER ================= */}

          <div className="mt-6 flex justify-end">

            <button
              onClick={onClose}
              className="
              px-4 py-2
              rounded-lg
              text-sm
              bg-gray-100 hover:bg-gray-200
              transition
              "
            >
              Close
            </button>

          </div>

        </motion.div>

      </div>

    </div>

  );
}