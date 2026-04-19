import React from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaCalendarAlt,
  FaUserPlus,
  FaUserTie,
  FaClock
} from "react-icons/fa";

/* Activity Data */

const activities = [
  {
    id: 1,
    title: "Lead Created",
    description: "Lead added by Admin",
    time: "2 hours ago",
    type: "created"
  },
  {
    id: 2,
    title: "Lead Assigned",
    description: "Assigned to Amit Sharma",
    time: "1 hour ago",
    type: "assignment"
  },
  {
    id: 3,
    title: "Call Logged",
    description: "Initial call with client",
    time: "45 minutes ago",
    type: "call"
  },
  {
    id: 4,
    title: "Meeting Scheduled",
    description: "Site visit discussion",
    time: "20 minutes ago",
    type: "meeting"
  },
  {
    id: 5,
    title: "Follow-up Added",
    description: "Follow-up tomorrow 11:30 AM",
    time: "5 minutes ago",
    type: "followup"
  }
];

/* Theme System */

const theme = {
  call: {
    border: "border-blue-500",
    icon: "bg-blue-100 text-blue-600",
    accent: "text-blue-600"
  },
  meeting: {
    border: "border-green-500",
    icon: "bg-green-100 text-green-600",
    accent: "text-green-600"
  },
  followup: {
    border: "border-orange-500",
    icon: "bg-orange-100 text-orange-600",
    accent: "text-orange-600"
  },
  assignment: {
    border: "border-purple-500",
    icon: "bg-purple-100 text-purple-600",
    accent: "text-purple-600"
  },
  created: {
    border: "border-indigo-500",
    icon: "bg-indigo-100 text-indigo-600",
    accent: "text-indigo-600"
  }
};

/* Icon Mapping */

const icon = {
  call: <FaPhoneAlt />,
  meeting: <FaCalendarAlt />,
  followup: <FaClock />,
  assignment: <FaUserTie />,
  created: <FaUserPlus />
};

export default function LeadActivityTimeline() {

  return (

    <section className="w-full mt-8">

      {/* Background */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-100 shadow-inner">

        {/* Header */}
        <div className="mb-6">

          <h2 className="text-xl font-semibold text-gray-800">
            Activity Timeline
          </h2>

          <p className="text-sm text-gray-500">
            Complete interaction history for this lead
          </p>

        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gray-200"></div>

          <div className="space-y-6">

            {activities.map((item, index) => {

              const t = theme[item.type];

              return (

                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="relative flex items-start gap-4"
                >

                  {/* Timeline Icon */}
                  <div className={`z-10 p-2 rounded-full border-2 ${t.border} bg-white`}>
                    <div className={`p-2 rounded-full ${t.icon}`}>
                      {icon[item.type]}
                    </div>
                  </div>

                  {/* Activity Card */}
                  <div
                    className={`flex-1 border-2 ${t.border} rounded-xl bg-white shadow-sm p-4`}
                  >

                    <div className="flex items-center justify-between">

                      <h3 className={`text-sm font-semibold ${t.accent}`}>
                        {item.title}
                      </h3>

                      <span className="text-xs text-gray-500">
                        {item.time}
                      </span>

                    </div>

                    <p className="text-sm text-gray-600 mt-2">
                      {item.description}
                    </p>

                  </div>

                </motion.div>

              );

            })}

          </div>

        </div>

      </div>

    </section>

  );

}