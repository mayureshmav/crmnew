import MainLayout from "../layout/MainLayout";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaUpload,
  FaDownload,
  FaEye,
  FaDraftingCompass,
  FaCheckCircle
} from "react-icons/fa";

const Layouts = () => {

  const [layouts] = useState([
    {
      id: 1,
      project: "Modern Villa Interior",
      designer: "Rohit",
      file: "villa-layout-v1.dwg",
      type: "AutoCAD",
      status: "Client Review",
    },
    {
      id: 2,
      project: "Office Renovation",
      designer: "Amit",
      file: "office-layout-v2.dwg",
      type: "AutoCAD",
      status: "Approved",
    },
  ]);

  return (
    <MainLayout>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-8"
      >

        {/* HEADER */}

        <div className="flex justify-between items-center">

          <h1 className="text-2xl font-semibold text-gray-800">
            Layouts & Designs
          </h1>

          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2 shadow">
            <FaUpload />
            Upload Layout
          </button>

        </div>

        {/* KPI CARDS */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-blue-50 border border-blue-200 p-5 rounded-xl flex items-center gap-4"
          >

            <FaDraftingCompass className="text-blue-600 text-2xl" />

            <div>
              <p className="text-sm text-gray-600">
                Total Layouts
              </p>

              <h2 className="text-xl font-bold">
                24
              </h2>
            </div>

          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-yellow-50 border border-yellow-200 p-5 rounded-xl flex items-center gap-4"
          >

            <FaDraftingCompass className="text-yellow-600 text-2xl" />

            <div>
              <p className="text-sm text-gray-600">
                Pending Review
              </p>

              <h2 className="text-xl font-bold">
                6
              </h2>
            </div>

          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-green-50 border border-green-200 p-5 rounded-xl flex items-center gap-4"
          >

            <FaCheckCircle className="text-green-600 text-2xl" />

            <div>
              <p className="text-sm text-gray-600">
                Approved Layouts
              </p>

              <h2 className="text-xl font-bold">
                18
              </h2>
            </div>

          </motion.div>

        </div>

        {/* LAYOUT TABLE */}

        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-x-auto">

          <table className="w-full text-sm">

            {/* TABLE HEADER */}

            <thead className="bg-gray-50 text-gray-600 text-xs uppercase">

              <tr>
                <th className="p-4 text-left">Project</th>
                <th className="p-4 text-left">Designer</th>
                <th className="p-4 text-left">File</th>
                <th className="p-4 text-left">Type</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-left">Actions</th>
              </tr>

            </thead>

            {/* TABLE BODY */}

            <tbody>

              {layouts.map((layout, index) => (

                <motion.tr
                  key={layout.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ backgroundColor: "#f9fafb" }}
                  className="border-t"
                >

                  {/* PROJECT */}

                  <td className="p-4 font-medium text-gray-800">
                    {layout.project}
                  </td>

                  {/* DESIGNER */}

                  <td className="p-4">

                    <div className="flex items-center gap-3">

                      <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold text-xs">
                        {layout.designer.charAt(0)}
                      </div>

                      {layout.designer}

                    </div>

                  </td>

                  {/* FILE */}

                  <td className="p-4 text-indigo-600 cursor-pointer font-medium">
                    {layout.file}
                  </td>

                  {/* FILE TYPE */}

                  <td className="p-4">

                    <span className="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full">
                      {layout.type}
                    </span>

                  </td>

                  {/* STATUS */}

                  <td className="p-4">

                    <span
                      className={`text-xs px-3 py-1 rounded-full font-medium
                      ${
                        layout.status === "Approved"
                          ? "bg-green-100 text-green-600"
                          : "bg-yellow-100 text-yellow-600"
                      }`}
                    >
                      {layout.status}
                    </span>

                  </td>

                  {/* ACTIONS */}

                  <td className="p-4">

                    <div className="flex gap-3 text-gray-500">

                      <button className="hover:text-indigo-600">
                        <FaEye />
                      </button>

                      <button className="hover:text-green-600">
                        <FaDownload />
                      </button>

                    </div>

                  </td>

                </motion.tr>

              ))}

            </tbody>

          </table>

        </div>

      </motion.div>

    </MainLayout>
  );
};

export default Layouts;