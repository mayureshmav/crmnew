import React from "react";
import { motion } from "framer-motion";
import {
  FaEye,
  FaEdit,
  FaPhoneAlt,
  FaUserTie,
  FaPlus
} from "react-icons/fa";

/* Lead Sample Data */
const leads = [
  {
    id: 1,
    name: "Rahul Sharma",
    phone: "9876543210",
    source: "Website",
    status: "New",
    score: "Hot",
    rep: "Amit"
  },
  {
    id: 2,
    name: "Neha Singh",
    phone: "9123456789",
    source: "IndiaMart",
    status: "Qualified",
    score: "Warm",
    rep: "Ravi"
  },
  {
    id: 3,
    name: "Vikas Patel",
    phone: "9988776655",
    source: "Referral",
    status: "Negotiation",
    score: "Cold",
    rep: "Sonia"
  }
];

/* Badge Colors */

const scoreColor = {
  Hot: "from-red-500 to-orange-500",
  Warm: "from-yellow-400 to-orange-400",
  Cold: "from-blue-400 to-indigo-500"
};

const statusColor = {
  New: "bg-indigo-100 text-indigo-600",
  Qualified: "bg-green-100 text-green-600",
  Negotiation: "bg-yellow-100 text-yellow-700"
};

export default function LeadTable() {

  return (

    <section className="w-full">

      {/* Background Theme */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-50 via-purple-50 to-blue-50 shadow-inner">

        {/* Card */}
        <div className="relative rounded-2xl p-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500">

          <div className="bg-white rounded-2xl p-6 shadow-lg">

            {/* Header */}
            <div className="flex items-center justify-between mb-6">

              <h2 className="text-xl font-semibold text-gray-800">
                Lead Management
              </h2>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 text-white text-sm rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 shadow-md"
              >
                <FaPlus />
                Add Lead
              </motion.button>

            </div>

            {/* Table */}
            <div className="overflow-x-auto">

              <table className="min-w-full text-sm">

                {/* Table Head */}
                <thead>

                  <tr className="text-left text-white bg-gradient-to-r from-indigo-500 to-purple-600">

                    <th className="py-3 px-4 rounded-l-lg">Lead</th>
                    <th className="px-4">Phone</th>
                    <th className="px-4">Source</th>
                    <th className="px-4">Status</th>
                    <th className="px-4">Score</th>
                    <th className="px-4">Assigned Rep</th>
                    <th className="px-4 rounded-r-lg text-center">Actions</th>

                  </tr>

                </thead>

                {/* Table Body */}
                <tbody>

                  {leads.map((lead, index) => (

                    <motion.tr
                      key={lead.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{
                        backgroundColor: "#f9fafb"
                      }}
                      className="border-b group transition"
                    >

                      {/* Lead Name */}
                      <td className="py-3 px-4 font-medium text-gray-700">
                        {lead.name}
                      </td>

                      {/* Phone */}
                      <td className="px-4 text-gray-600 flex items-center gap-2">

                        <FaPhoneAlt className="text-xs text-gray-400" />
                        {lead.phone}

                      </td>

                      {/* Source */}
                      <td className="px-4 text-gray-600">
                        {lead.source}
                      </td>

                      {/* Status */}
                      <td className="px-4">

                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColor[lead.status]}`}>
                          {lead.status}
                        </span>

                      </td>

                      {/* Score */}
                      <td className="px-4">

                        <span className={`px-3 py-1 text-white rounded-full text-xs bg-gradient-to-r ${scoreColor[lead.score]}`}>
                          {lead.score}
                        </span>

                      </td>

                      {/* Assigned Rep */}
                      <td className="px-4 flex items-center gap-2 text-gray-600">

                        <FaUserTie className="text-gray-400" />
                        {lead.rep}

                      </td>

                      {/* Actions */}
                      <td className="px-4">

                        <div className="flex justify-center gap-2">

                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            className="p-2 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100"
                          >
                            <FaEye />
                          </motion.button>

                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            className="p-2 rounded-lg bg-green-50 text-green-600 hover:bg-green-100"
                          >
                            <FaEdit />
                          </motion.button>

                        </div>

                      </td>

                    </motion.tr>

                  ))}

                </tbody>

              </table>

            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-6">

              <p className="text-sm text-gray-500">
                Showing 1–3 of 24 leads
              </p>

              <div className="flex gap-2">

                <button className="px-3 py-1 border rounded-lg hover:bg-gray-50">
                  Prev
                </button>

                <button className="px-3 py-1 rounded-lg text-white bg-gradient-to-r from-indigo-500 to-purple-600">
                  1
                </button>

                <button className="px-3 py-1 border rounded-lg hover:bg-gray-50">
                  2
                </button>

                <button className="px-3 py-1 border rounded-lg hover:bg-gray-50">
                  Next
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}