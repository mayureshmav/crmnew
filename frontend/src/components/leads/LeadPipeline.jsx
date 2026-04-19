import React from "react";
import { motion } from "framer-motion";
import { FaUserCircle, FaArrowRight } from "react-icons/fa";

/* Pipeline Data */

const pipelineData = {
  New: [
    { name: "Rahul Sharma", company: "ABC Realty", score: "Hot" },
    { name: "Neha Singh", company: "Dream Homes", score: "Warm" }
  ],
  Contacted: [
    { name: "Vikas Patel", company: "Urban Build", score: "Cold" }
  ],
  Qualified: [
    { name: "Amit Verma", company: "Skyline Estate", score: "Hot" }
  ],
  Negotiation: [
    { name: "Sonia Kapoor", company: "Prime Land", score: "Warm" }
  ],
  Won: [
    { name: "Karan Mehta", company: "Luxury Living", score: "Hot" }
  ]
};

/* Lead Score Colors */

const scoreGradient = {
  Hot: "from-red-500 to-orange-500",
  Warm: "from-yellow-400 to-orange-400",
  Cold: "from-blue-400 to-indigo-500"
};

export default function LeadPipeline() {

  return (

    <section className="w-full mt-8">

      {/* Section Background */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-100 shadow-inner">

        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Sales Pipeline
        </h2>

        {/* Pipeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">

          {Object.entries(pipelineData).map(([stage, leads], index) => (

            <motion.div
              key={stage}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-xl border-2 border-indigo-500 bg-white shadow-md p-4 min-h-[260px]"
            >

              {/* Column Header */}
              <div className="flex justify-between items-center mb-4">

                <h3 className="text-sm font-semibold text-gray-700">
                  {stage}
                </h3>

                <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                  {leads.length}
                </span>

              </div>

              {/* Lead Cards */}
              <div className="space-y-3">

                {leads.map((lead, i) => (

                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className={`p-[2px] rounded-lg bg-gradient-to-r ${scoreGradient[lead.score]}`}
                  >

                    <div className="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition">

                      <div className="flex items-center gap-3">

                        <FaUserCircle className="text-2xl text-gray-400"/>

                        <div>

                          <p className="text-sm font-medium text-gray-700">
                            {lead.name}
                          </p>

                          <p className="text-xs text-gray-500">
                            {lead.company}
                          </p>

                        </div>

                      </div>

                      {/* Score Badge */}
                      <div className="flex items-center justify-between mt-3">

                        <span
                          className={`text-xs text-white px-2 py-1 rounded-full bg-gradient-to-r ${scoreGradient[lead.score]}`}
                        >
                          {lead.score}
                        </span>

                        <FaArrowRight className="text-gray-400 text-xs"/>

                      </div>

                    </div>

                  </motion.div>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );

}