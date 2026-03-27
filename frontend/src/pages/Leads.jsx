import MainLayout from "../layout/MainLayout";
import LeadCard from "../components/LeadCard";
import LeadTable from "../components/LeadTable";
import { motion } from "framer-motion";
import LeadPipeline from "../components/LeadPipeline";

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
      >

        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">

          <h1 className="text-2xl font-semibold text-gray-800">
            Leads
          </h1>

          <input
            type="text"
            placeholder="Search leads..."
            className="border border-gray-200 rounded-lg px-3 py-2 text-sm mt-3 md:mt-0"
          />

        </div>

        {/* Lead Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">

          {leads.map((lead) => (
            <LeadCard key={lead.id} lead={lead} />
          ))}

        </div>

        {/* Lead Pipeline */}
        
        <div className="mb-10">
        <LeadPipeline />
        </div>

        {/* Lead Table */}

        <LeadTable leads={leads} />

      </motion.div>

    </MainLayout>
  );
};

export default Leads;