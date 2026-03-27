import MainLayout from "../layout/MainLayout";
import { motion } from "framer-motion";
import { useState } from "react";

const Meetings = () => {

  const [meetings, setMeetings] = useState([
    {
      id: 1,
      client: "Rahul Sharma",
      date: "2026-03-30",
      city: "Delhi",
      pm: "Amit",
      status: "Scheduled",
    },
    {
      id: 2,
      client: "Neha Singh",
      date: "2026-04-02",
      city: "Gurgaon",
      pm: "Ravi",
      status: "Pending",
    },
  ]);

  return (
    <MainLayout>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>

        <div className="flex justify-between items-center mb-6">

          <h1 className="text-2xl font-semibold">
            Meetings / Site Visits
          </h1>

          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm">
            + Schedule Meeting
          </button>

        </div>

        {/* Meeting Table */}

        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">

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

                <tr
                  key={meeting.id}
                  className="border-t hover:bg-gray-50"
                >

                  <td className="p-3">{meeting.client}</td>

                  <td className="p-3">{meeting.city}</td>

                  <td className="p-3">{meeting.date}</td>

                  <td className="p-3">{meeting.pm}</td>

                  <td className="p-3">

                    <span className={`text-xs px-2 py-1 rounded-full
                      ${meeting.status === "Scheduled"
                        ? "bg-green-100 text-green-600"
                        : "bg-yellow-100 text-yellow-600"}
                    `}>
                      {meeting.status}
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

export default Meetings;