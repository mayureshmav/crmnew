import MainLayout from "../layout/MainLayout";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaFileInvoice,
  FaCheckCircle,
  FaClock,
  FaEye,
  FaDownload,
  FaEdit
} from "react-icons/fa";

const Quotations = () => {

  const [quotations] = useState([
    {
      id: 1,
      number: "QT-1021",
      client: "Rahul Sharma",
      amount: "₹12,50,000",
      date: "12 Mar 2026",
      status: "Pending",
    },
    {
      id: 2,
      number: "QT-1022",
      client: "Neha Singh",
      amount: "₹9,80,000",
      date: "15 Mar 2026",
      status: "Approved",
    },
    {
      id: 3,
      number: "QT-1023",
      client: "Amit Gupta",
      amount: "₹6,20,000",
      date: "18 Mar 2026",
      status: "Rejected",
    },
    {
      id: 4,
      number: "QT-1024",
      client: "Priya Kapoor",
      amount: "₹4,50,000",
      date: "20 Mar 2026",
      status: "Pending",
    },
  ]);

  const statusStyle = (status) => {
    if (status === "Approved") return "bg-green-100 text-green-600";
    if (status === "Rejected") return "bg-red-100 text-red-600";
    return "bg-yellow-100 text-yellow-600";
  };

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
            Quotations
          </h1>

          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm shadow">
            + Create Quotation
          </button>

        </div>

        {/* STAT CARDS */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-blue-50 border border-blue-200 p-5 rounded-xl flex items-center gap-4"
          >

            <FaFileInvoice className="text-blue-600 text-2xl" />

            <div>
              <p className="text-sm text-gray-600">Total Quotations</p>
              <h2 className="text-xl font-bold">24</h2>
            </div>

          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-yellow-50 border border-yellow-200 p-5 rounded-xl flex items-center gap-4"
          >

            <FaClock className="text-yellow-600 text-2xl" />

            <div>
              <p className="text-sm text-gray-600">Pending Approval</p>
              <h2 className="text-xl font-bold">8</h2>
            </div>

          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-green-50 border border-green-200 p-5 rounded-xl flex items-center gap-4"
          >

            <FaCheckCircle className="text-green-600 text-2xl" />

            <div>
              <p className="text-sm text-gray-600">Approved Quotations</p>
              <h2 className="text-xl font-bold">16</h2>
            </div>

          </motion.div>

        </div>

        {/* QUOTATION TABLE */}

        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-x-auto">

          <table className="w-full text-sm">

            <thead className="bg-gray-50 text-gray-600 text-xs uppercase">

              <tr>
                <th className="p-4 text-left">Quotation</th>
                <th className="p-4 text-left">Client</th>
                <th className="p-4 text-left">Date</th>
                <th className="p-4 text-left">Amount</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-left">Actions</th>
              </tr>

            </thead>

            <tbody>

              {quotations.map((q, index) => (

                <motion.tr
                  key={q.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ backgroundColor: "#f9fafb" }}
                  className="border-t"
                >

                  {/* QUOTATION NUMBER */}

                  <td className="p-4 font-medium text-indigo-600">
                    {q.number}
                  </td>

                  {/* CLIENT */}

                  <td className="p-4">

                    <div className="flex items-center gap-3">

                      <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-xs font-semibold">
                        {q.client.charAt(0)}
                      </div>

                      {q.client}

                    </div>

                  </td>

                  {/* DATE */}

                  <td className="p-4 text-gray-600">
                    {q.date}
                  </td>

                  {/* AMOUNT */}

                  <td className="p-4 font-semibold text-green-600">
                    {q.amount}
                  </td>

                  {/* STATUS */}

                  <td className="p-4">

                    <span
                      className={`text-xs px-3 py-1 rounded-full font-medium ${statusStyle(
                        q.status
                      )}`}
                    >
                      {q.status}
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

                      <button className="hover:text-yellow-600">
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

export default Quotations;