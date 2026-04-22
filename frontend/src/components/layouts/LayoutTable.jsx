import {
  FaEye,
  FaDownload,
  FaHistory,
  FaTrash
} from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";
import VersionHistoryModal from "./VersionHistoryModal";
import DeleteConfirmModal from "./DeleteConfirmModal";

export default function LayoutTable({ layouts }) {

  const [selected, setSelected] = useState(null);
  const [showHistory, setShowHistory] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  return (

    <div className="relative">

      {/* 🌈 STRONG GRADIENT BORDER */}

      <div className="
      p-[1.5px]
      rounded-2xl
      bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400
      shadow-[0_10px_40px_rgba(99,102,241,0.15)]
      ">

        {/* 🌟 INNER CONTAINER */}

        <div className="
        rounded-2xl
        bg-gradient-to-br from-white via-indigo-50/40 to-purple-50/40
        backdrop-blur
        overflow-hidden
        ">

          {/* TABLE WRAPPER */}

          <div className="overflow-x-auto">

            <table className="w-full text-sm min-w-[700px]">

              {/* ================= HEADER ================= */}

              <thead className="
              text-gray-600 text-xs uppercase
              bg-gradient-to-r from-indigo-100/70 via-white to-purple-100/70
              border-b border-indigo-100
              ">

                <tr>

                  <th className="p-4 text-left">Layout</th>
                  <th className="p-4 text-left">Type</th>
                  <th className="p-4 text-left">Version</th>
                  <th className="p-4 text-left">Uploaded By</th>
                  <th className="p-4 text-left">Date</th>
                  <th className="p-4 text-left">Actions</th>

                </tr>

              </thead>


              {/* ================= BODY ================= */}

              <tbody>

                {layouts.map((l, i) => (

                  <motion.tr
                    key={l.id}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="
                    border-b border-indigo-50
                    hover:bg-gradient-to-r hover:from-indigo-50/60 hover:to-purple-50/60
                    transition
                    group
                    "
                  >

                    {/* LAYOUT */}

                    <td className="p-4 font-medium text-gray-800">
                      {l.name}
                    </td>


                    {/* TYPE */}

                    <td className="p-4">

                      <span className="
                      px-2.5 py-1
                      text-xs rounded-full
                      bg-gradient-to-r from-indigo-100 to-indigo-200
                      text-indigo-700
                      border border-indigo-200
                      ">
                        {l.type}
                      </span>

                    </td>


                    {/* VERSION */}

                    <td className="p-4 text-gray-700 font-medium">
                      {l.version}
                    </td>


                    {/* USER */}

                    <td className="p-4 text-gray-600">
                      {l.uploadedBy}
                    </td>


                    {/* DATE */}

                    <td className="p-4 text-gray-500">
                      {l.date}
                    </td>


                    {/* ACTIONS */}

                    <td className="p-4">

                      <div className="flex items-center gap-2">

                        {/* VIEW */}

                        <motion.button
                          whileHover={{ scale: 1.12 }}
                          className="
                          p-2 rounded-lg
                          bg-gradient-to-br from-indigo-100 to-indigo-200
                          text-indigo-700
                          shadow-sm hover:shadow-md
                          transition
                          "
                        >
                          <FaEye size={14} />
                        </motion.button>


                        {/* DOWNLOAD */}

                        <motion.button
                          whileHover={{ scale: 1.12 }}
                          className="
                          p-2 rounded-lg
                          bg-gradient-to-br from-emerald-100 to-emerald-200
                          text-emerald-700
                          shadow-sm hover:shadow-md
                          transition
                          "
                        >
                          <FaDownload size={14} />
                        </motion.button>


                        {/* HISTORY */}

                        <motion.button
                          whileHover={{ scale: 1.12 }}
                          onClick={() => {
                            setSelected(l);
                            setShowHistory(true);
                          }}
                          className="
                          p-2 rounded-lg
                          bg-gradient-to-br from-blue-100 to-blue-200
                          text-blue-700
                          shadow-sm hover:shadow-md
                          transition
                          "
                        >
                          <FaHistory size={14} />
                        </motion.button>


                        {/* DELETE */}

                        <motion.button
                          whileHover={{ scale: 1.12 }}
                          onClick={() => {
                            setSelected(l);
                            setShowDelete(true);
                          }}
                          className="
                          p-2 rounded-lg
                          bg-gradient-to-br from-red-100 to-red-200
                          text-red-600
                          shadow-sm hover:shadow-md
                          transition
                          "
                        >
                          <FaTrash size={14} />
                        </motion.button>

                      </div>

                    </td>

                  </motion.tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>


      {/* ================= MODALS ================= */}

      {showHistory && (
        <VersionHistoryModal
          layout={selected}
          onClose={() => setShowHistory(false)}
        />
      )}

      {showDelete && (
        <DeleteConfirmModal
          layout={selected}
          onClose={() => setShowDelete(false)}
        />
      )}

    </div>

  );
}