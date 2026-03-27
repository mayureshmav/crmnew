import MainLayout from "../layout/MainLayout";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaUserTie,
  FaCalendarAlt,
  FaFileInvoice,
} from "react-icons/fa";

const LeadDetails = () => {

  const lead = {
    name: "Rahul Sharma",
    phone: "9876543210",
    city: "Delhi",
    source: "IndiaMart",
    budget: "12L",
    status: "New",
    email: "rahul@gmail.com",
    assignedPM: "Amit Verma",
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
        className="space-y-6"
      >

        {/* PAGE TITLE */}

        <h1 className="text-2xl font-semibold text-gray-800">
          Lead Details
        </h1>

        {/* LEAD PROFILE CARD */}

        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">

            {/* LEFT SECTION */}

            <div className="flex items-center gap-4">

              {/* Avatar */}

              <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-lg">
                {lead.name.charAt(0)}
              </div>

              <div>

                <h2 className="text-xl font-semibold">
                  {lead.name}
                </h2>

                <p className="text-gray-500 flex items-center gap-2 mt-1">
                  <FaPhone /> {lead.phone}
                </p>

                <p className="text-gray-500 flex items-center gap-2">
                  <FaMapMarkerAlt /> {lead.city}
                </p>

              </div>

            </div>

            {/* RIGHT SECTION */}

            <div className="flex flex-wrap gap-3">

              <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2">
                <FaPhone /> Call
              </button>

              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2">
                <FaCalendarAlt /> Schedule Meeting
              </button>

              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2">
                <FaFileInvoice /> Create Quote
              </button>

            </div>

          </div>

        </div>

        {/* LEAD INFORMATION */}

        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">

          <h3 className="font-semibold mb-4">
            Lead Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">

            <div>
              <span className="text-gray-500">Source</span>
              <p className="font-medium">{lead.source}</p>
            </div>

            <div>
              <span className="text-gray-500">Budget</span>
              <p className="font-medium text-green-600">
                ₹{lead.budget}
              </p>
            </div>

            <div>
              <span className="text-gray-500">Email</span>
              <p className="font-medium">{lead.email}</p>
            </div>

            <div>
              <span className="text-gray-500">Assigned PM</span>
              <p className="font-medium flex items-center gap-2">
                <FaUserTie /> {lead.assignedPM}
              </p>
            </div>

          </div>

        </div>

        {/* ACTIVITY TIMELINE */}

        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">

          <h3 className="font-semibold mb-4">
            Activity Timeline
          </h3>

          <div className="space-y-4">

            {activities.map((activity) => (

              <motion.div
                key={activity.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex justify-between items-center border-b pb-3"
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

        {/* NOTES SECTION */}

        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">

          <h3 className="font-semibold mb-4">
            Notes
          </h3>

          <textarea
            placeholder="Add notes about this lead..."
            className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-indigo-200"
            rows="4"
          />

          <button className="mt-3 bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm">
            Save Note
          </button>

        </div>

      </motion.div>

    </MainLayout>
  );
};

export default LeadDetails;