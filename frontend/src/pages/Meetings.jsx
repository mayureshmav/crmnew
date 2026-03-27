import MainLayout from "../layout/MainLayout";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaUserTie } from "react-icons/fa";

const Meetings = () => {

  const [meetings] = useState([
    {
      id: 1,
      client: "Rahul Sharma",
      date: "30 Mar 2026",
      city: "Delhi",
      pm: "Amit",
      status: "Scheduled",
    },
    {
      id: 2,
      client: "Neha Singh",
      date: "02 Apr 2026",
      city: "Gurgaon",
      pm: "Ravi",
      status: "Pending",
    },
    {
      id: 3,
      client: "Amit Gupta",
      date: "05 Apr 2026",
      city: "Noida",
      pm: "Suresh",
      status: "Completed",
    },
  ]);

  return (
    <MainLayout>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-6"
      >

        {/* HEADER */}

        <div className="flex justify-between items-center">

          <h1 className="text-2xl font-semibold text-gray-800">
            Meetings / Site Visits
          </h1>

          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm shadow">
            + Schedule Meeting
          </button>

        </div>

        {/* KPI CARDS */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-blue-50 border border-blue-200 p-5 rounded-xl flex items-center gap-4"
          >

            <FaCalendarAlt className="text-blue-600 text-2xl" />

            <div>
              <p className="text-sm text-gray-600">
                Meetings Today
              </p>

              <h2 className="text-xl font-bold">
                3
              </h2>
            </div>

          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-yellow-50 border border-yellow-200 p-5 rounded-xl flex items-center gap-4"
          >

            <FaUserTie className="text-yellow-600 text-2xl" />

            <div>
              <p className="text-sm text-gray-600">
                Upcoming Meetings
              </p>

              <h2 className="text-xl font-bold">
                5
              </h2>
            </div>

          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-green-50 border border-green-200 p-5 rounded-xl flex items-center gap-4"
          >

            <FaMapMarkerAlt className="text-green-600 text-2xl" />

            <div>
              <p className="text-sm text-gray-600">
                Completed Visits
              </p>

              <h2 className="text-xl font-bold">
                12
              </h2>
            </div>

          </motion.div>

        </div>

        {/* MEETING TABLE */}

        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">

          <div className="p-4 border-b font-medium">
            Scheduled Meetings
          </div>

          <div className="overflow-x-auto">

            <table className="w-full text-sm">

              <thead className="bg-gray-50 text-gray-600">

                <tr>
                  <th className="p-3 text-left">Client</th>
                  <th className="p-3 text-left">City</th>
                  <th className="p-3 text-left">Date</th>
                  <th className="p-3 text-left">Project Manager</th>
                  <th className="p-3 text-left">Status</th>
                </tr>

              </thead>

              <tbody>

                {meetings.map((meeting) => (

                  <motion.tr
                    key={meeting.id}
                    whileHover={{ scale: 1.01 }}
                    className="border-t hover:bg-gray-50"
                  >

                    <td className="p-3 font-medium">
                      {meeting.client}
                    </td>

                    <td className="p-3">
                      {meeting.city}
                    </td>

                    <td className="p-3">
                      {meeting.date}
                    </td>

                    <td className="p-3">
                      {meeting.pm}
                    </td>

                    <td className="p-3">

                      <span
                        className={`text-xs px-3 py-1 rounded-full font-medium
                        ${
                          meeting.status === "Scheduled"
                            ? "bg-blue-100 text-blue-600"
                            : meeting.status === "Completed"
                            ? "bg-green-100 text-green-600"
                            : "bg-yellow-100 text-yellow-600"
                        }`}
                      >
                        {meeting.status}
                      </span>

                    </td>

                  </motion.tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </motion.div>

    </MainLayout>
  );
};

export default Meetings;