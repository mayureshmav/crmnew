import MainLayout from "../layout/MainLayout";
import { motion } from "framer-motion";
import { useState } from "react";

const Quotations = () => {

  const [quotations, setQuotations] = useState([
    {
      id: 1,
      client: "Rahul Sharma",
      amount: "₹12,50,000",
      status: "Pending",
    },
    {
      id: 2,
      client: "Neha Singh",
      amount: "₹9,80,000",
      status: "Approved",
    },
  ]);

  return (
    <MainLayout>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>

        <div className="flex justify-between items-center mb-6">

          <h1 className="text-2xl font-semibold">
            Quotations
          </h1>

          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm">
            + Create Quotation
          </button>

        </div>

        {/* Quotation Table */}

        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">

          <table className="w-full text-sm">

            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="p-3 text-left">Client</th>
                <th className="p-3 text-left">Amount</th>
                <th className="p-3 text-left">Status</th>
              </tr>
            </thead>

            <tbody>

              {quotations.map((q) => (

                <tr
                  key={q.id}
                  className="border-t hover:bg-gray-50"
                >

                  <td className="p-3">{q.client}</td>

                  <td className="p-3">{q.amount}</td>

                  <td className="p-3">

                    <span className={`text-xs px-2 py-1 rounded-full
                      ${q.status === "Approved"
                        ? "bg-green-100 text-green-600"
                        : "bg-yellow-100 text-yellow-600"}
                    `}>
                      {q.status}
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

export default Quotations;