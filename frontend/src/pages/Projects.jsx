import MainLayout from "../layout/MainLayout";
import { motion } from "framer-motion";
import { useState } from "react";

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

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>

        <div className="flex justify-between items-center mb-6">

          <h1 className="text-2xl font-semibold">
            Projects
          </h1>

          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm">
            + New Project
          </button>

        </div>

        {/* Project Table */}

        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">

          <table className="w-full text-sm">

            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="p-3 text-left">Project</th>
                <th className="p-3 text-left">Client</th>
                <th className="p-3 text-left">Project Manager</th>
                <th className="p-3 text-left">Budget</th>
                <th className="p-3 text-left">Progress</th>
                <th className="p-3 text-left">Status</th>
              </tr>
            </thead>

            <tbody>

              {projects.map((project) => (

                <tr
                  key={project.id}
                  className="border-t hover:bg-gray-50"
                >

                  <td className="p-3">{project.name}</td>

                  <td className="p-3">{project.client}</td>

                  <td className="p-3">{project.pm}</td>

                  <td className="p-3">{project.budget}</td>

                  <td className="p-3 w-48">

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

                  <td className="p-3">

                    <span className={`text-xs px-2 py-1 rounded-full
                      ${project.status === "In Progress"
                        ? "bg-green-100 text-green-600"
                        : "bg-yellow-100 text-yellow-600"}
                    `}>
                      {project.status}
                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </motion.div>

    </MainLayout>
  );
};

export default Projects;