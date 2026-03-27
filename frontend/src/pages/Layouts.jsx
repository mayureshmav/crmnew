import MainLayout from "../layout/MainLayout";
import { motion } from "framer-motion";
import { useState } from "react";

const Layouts = () => {

  const [layouts] = useState([
    {
      id: 1,
      project: "Modern Villa Interior",
      designer: "Rohit",
      file: "villa-layout-v1.dwg",
      status: "Client Review",
    },
    {
      id: 2,
      project: "Office Renovation",
      designer: "Amit",
      file: "office-layout-v2.dwg",
      status: "Approved",
    },
  ]);

  return (
    <MainLayout>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>

        <div className="flex justify-between items-center mb-6">

          <h1 className="text-2xl font-semibold">
            Layouts & Designs
          </h1>

          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm">
            + Upload Layout
          </button>

        </div>

        {/* Layout Table */}

        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">

          <table className="w-full text-sm">

            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="p-3 text-left">Project</th>
                <th className="p-3 text-left">Designer</th>
                <th className="p-3 text-left">File</th>
                <th className="p-3 text-left">Status</th>
              </tr>
            </thead>

            <tbody>

              {layouts.map((layout) => (

                <tr
                  key={layout.id}
                  className="border-t hover:bg-gray-50"
                >

                  <td className="p-3">{layout.project}</td>

                  <td className="p-3">{layout.designer}</td>

                  <td className="p-3 text-indigo-600 cursor-pointer">
                    {layout.file}
                  </td>

                  <td className="p-3">

                    <span className={`text-xs px-2 py-1 rounded-full
                      ${layout.status === "Approved"
                        ? "bg-green-100 text-green-600"
                        : "bg-yellow-100 text-yellow-600"}
                    `}>
                      {layout.status}
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

export default Layouts;