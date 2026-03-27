import MainLayout from "../layout/MainLayout";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaProjectDiagram,
  FaCheckCircle,
  FaClock,
  FaEye,
  FaEdit
} from "react-icons/fa";

const Projects = () => {

  const [projects] = useState([
    {
      id: 1,
      name: "Modern Villa Interior",
      client: "Rahul Sharma",
      pm: "Amit",
      budget: "₹12,50,000",
      progress: 60,
      status: "In Progress",
    },
    {
      id: 2,
      name: "Office Renovation",
      client: "Neha Singh",
      pm: "Ravi",
      budget: "₹9,80,000",
      progress: 30,
      status: "Planning",
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
            Projects
          </h1>

          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm shadow">
            + New Project
          </button>

        </div>

        {/* KPI CARDS */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-blue-50 border border-blue-200 p-5 rounded-xl flex items-center gap-4"
          >

            <FaProjectDiagram className="text-blue-600 text-2xl" />

            <div>
              <p className="text-sm text-gray-600">
                Total Projects
              </p>
              <h2 className="text-xl font-bold">
                12
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
                Completed Projects
              </p>
              <h2 className="text-xl font-bold">
                6
              </h2>
            </div>

          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-yellow-50 border border-yellow-200 p-5 rounded-xl flex items-center gap-4"
          >

            <FaClock className="text-yellow-600 text-2xl" />

            <div>
              <p className="text-sm text-gray-600">
                Ongoing Projects
              </p>
              <h2 className="text-xl font-bold">
                6
              </h2>
            </div>

          </motion.div>

        </div>

        {/* PROJECT TABLE */}

        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-x-auto">

          <table className="w-full text-sm">

            <thead className="bg-gray-50 text-gray-600 text-xs uppercase">

              <tr>
                <th className="p-4 text-left">Project</th>
                <th className="p-4 text-left">Client</th>
                <th className="p-4 text-left">Project Manager</th>
                <th className="p-4 text-left">Budget</th>
                <th className="p-4 text-left">Progress</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-left">Actions</th>
              </tr>

            </thead>

            <tbody>

              {projects.map((project, index) => (

                <motion.tr
                  key={project.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ backgroundColor: "#f9fafb" }}
                  className="border-t"
                >

                  {/* PROJECT NAME */}

                  <td className="p-4 font-medium text-gray-800">
                    {project.name}
                  </td>

                  {/* CLIENT */}

                  <td className="p-4">

                    <div className="flex items-center gap-3">

                      <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-xs font-semibold">
                        {project.client.charAt(0)}
                      </div>

                      {project.client}

                    </div>

                  </td>

                  {/* PM */}

                  <td className="p-4">

                    <div className="flex items-center gap-3">

                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xs font-semibold">
                        {project.pm.charAt(0)}
                      </div>

                      {project.pm}

                    </div>

                  </td>

                  {/* BUDGET */}

                  <td className="p-4 font-semibold text-green-600">
                    {project.budget}
                  </td>

                  {/* PROGRESS */}

                  <td className="p-4 w-48">

                    <div className="w-full bg-gray-200 rounded-full h-2">

                      <div
                        className="bg-indigo-600 h-2 rounded-full"
                        style={{ width: `${project.progress}%` }}
                      />

                    </div>

                    <span className="text-xs text-gray-500">
                      {project.progress}%
                    </span>

                  </td>

                  {/* STATUS */}

                  <td className="p-4">

                    <span
                      className={`text-xs px-3 py-1 rounded-full font-medium
                      ${
                        project.status === "In Progress"
                          ? "bg-green-100 text-green-600"
                          : "bg-yellow-100 text-yellow-600"
                      }`}
                    >
                      {project.status}
                    </span>

                  </td>

                  {/* ACTIONS */}

                  <td className="p-4">

                    <div className="flex gap-3 text-gray-500">

                      <button className="hover:text-indigo-600">
                        <FaEye />
                      </button>

                      <button className="hover:text-green-600">
                        <FaEdit />
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

export default Projects;