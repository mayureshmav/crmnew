import MainLayout from "../layout/MainLayout";
import { motion } from "framer-motion";
import { FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const LeadDetails = () => {

  const lead = {
    name: "Rahul Sharma",
    phone: "9876543210",
    city: "Delhi",
    source: "IndiaMart",
    budget: "12L",
    status: "New"
  };

  const activities = [
    { id: 1, text: "Lead created", date: "Today" },
    { id: 2, text: "Initial call completed", date: "Yesterday" },
    { id: 3, text: "Meeting scheduled", date: "2 days ago" }
  ];

  return (
    <MainLayout>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >

        <h1 className="text-2xl font-semibold mb-6">
          Lead Details
        </h1>

        {/* Lead Info Card */}

        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm mb-6">

          <div className="flex flex-col md:flex-row md:items-center justify-between">

            <div>

              <h2 className="text-xl font-semibold">
                {lead.name}
              </h2>

              <p className="text-gray-500 flex items-center gap-2 mt-2">
                <FaPhone /> {lead.phone}
              </p>

              <p className="text-gray-500 flex items-center gap-2 mt-1">
                <FaMapMarkerAlt /> {lead.city}
              </p>

            </div>

            <div className="mt-4 md:mt-0">

              <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded text-sm">
                {lead.source}
              </span>

              <p className="mt-2 font-medium">
                Budget: ₹{lead.budget}
              </p>

            </div>

          </div>

        </div>

        {/* Activity Timeline */}

        <div className="bg-white border border-gray-200 rounded-xl p-6">

          <h3 className="font-semibold mb-4">
            Activity Timeline
          </h3>

          <div className="space-y-4">

            {activities.map((activity) => (

              <motion.div
                key={activity.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex justify-between items-center border-b pb-2"
              >

                <p className="text-gray-700">
                  {activity.text}
                </p>

                <span className="text-sm text-gray-400">
                  {activity.date}
                </span>

              </motion.div>

            ))}

          </div>

        </div>

      </motion.div>

    </MainLayout>
  );
};

export default LeadDetails;