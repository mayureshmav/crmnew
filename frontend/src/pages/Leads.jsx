import MainLayout from "../layout/MainLayout";
import LeadCard from "../components/LeadCard";
import LeadTable from "../components/LeadTable";
import LeadPipeline from "../components/LeadPipeline";
import { motion } from "framer-motion";
import { FaUserPlus, FaChartLine, FaHandshake, FaUsers } from "react-icons/fa";

const leads = [
  {
    id: 1,
    name: "Rahul Sharma",
    phone: "9876543210",
    city: "Delhi",
    source: "IndiaMart",
    budget: "12L",
    status: "New",
  },
  {
    id: 2,
    name: "Amit Kumar",
    phone: "9876543210",
    city: "Noida",
    source: "MagicBricks",
    budget: "18L",
    status: "Meeting",
  },
  {
    id: 3,
    name: "Neha Singh",
    phone: "9876543210",
    city: "Gurgaon",
    source: "Website",
    budget: "10L",
    status: "Won",
  },
];

const Leads = () => {
  return (
    <MainLayout>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-8"
      >

        {/* HEADER */}

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">

          <h1 className="text-2xl font-semibold text-gray-800">
            Leads Management
          </h1>

          <div className="flex gap-3">

            <input
              type="text"
              placeholder="Search leads..."
              className="border border-gray-200 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-indigo-200"
            />

            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2 shadow">
              <FaUserPlus />
              Add Lead
            </button>

          </div>

        </div>

        {/* KPI CARDS */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-blue-50 border border-blue-200 p-5 rounded-xl flex items-center gap-4"
          >

            <FaUsers className="text-blue-600 text-2xl" />

            <div>
              <p className="text-sm text-gray-600">
                Total Leads
              </p>

              <h2 className="text-xl font-bold">
                128
              </h2>
            </div>

          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-yellow-50 border border-yellow-200 p-5 rounded-xl flex items-center gap-4"
          >

            <FaChartLine className="text-yellow-600 text-2xl" />

            <div>
              <p className="text-sm text-gray-600">
                Leads In Pipeline
              </p>

              <h2 className="text-xl font-bold">
                72
              </h2>
            </div>

          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-green-50 border border-green-200 p-5 rounded-xl flex items-center gap-4"
          >

            <FaHandshake className="text-green-600 text-2xl" />

            <div>
              <p className="text-sm text-gray-600">
                Closed Deals
              </p>

              <h2 className="text-xl font-bold">
                24
              </h2>
            </div>

          </motion.div>

        </div>

        {/* LEAD CARDS */}

        <div>

          <h2 className="text-lg font-medium mb-4 text-gray-700">
            Recent Leads
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {leads.map((lead) => (
              <LeadCard key={lead.id} lead={lead} />
            ))}

          </div>

        </div>

        {/* LEAD PIPELINE */}

        <div>

          <h2 className="text-lg font-medium mb-4 text-gray-700">
            Lead Pipeline
          </h2>

          <LeadPipeline />

        </div>

        {/* LEAD TABLE */}

        <div>

          <h2 className="text-lg font-medium mb-4 text-gray-700">
            All Leads
          </h2>

          <LeadTable leads={leads} />

        </div>

      </motion.div>

    </MainLayout>
  );
};

export default Leads;