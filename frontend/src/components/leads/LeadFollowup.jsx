import React from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaCalendarAlt,
  FaMapMarkerAlt
} from "react-icons/fa";

/* Follow-up Data */

const followups = [
  {
    id: 1,
    name: "Rahul Sharma",
    company: "ABC Realty",
    type: "Call",
    time: "Today 4:00 PM"
  },
  {
    id: 2,
    name: "Neha Singh",
    company: "Dream Homes",
    type: "Meeting",
    time: "Tomorrow 11:30 AM"
  },
  {
    id: 3,
    name: "Vikas Patel",
    company: "Urban Build",
    type: "Visit",
    time: "Today 6:30 PM"
  }
];

/* Theme Colors */

const theme = {
  Call: {
    border: "border-blue-500",
    icon: "bg-blue-100 text-blue-600",
    badge: "bg-blue-500",
    accent: "text-blue-600"
  },
  Meeting: {
    border: "border-green-500",
    icon: "bg-green-100 text-green-600",
    badge: "bg-green-500",
    accent: "text-green-600"
  },
  Visit: {
    border: "border-orange-500",
    icon: "bg-orange-100 text-orange-600",
    badge: "bg-orange-500",
    accent: "text-orange-600"
  }
};

/* Icon Mapping */

const icon = {
  Call: <FaPhoneAlt />,
  Meeting: <FaCalendarAlt />,
  Visit: <FaMapMarkerAlt />
};

export default function LeadFollowup() {

  return (

    <section className="w-full mt-8">

      {/* Section Background */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-100 shadow-inner">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">

          <h2 className="text-xl font-semibold text-gray-800">
            Follow-Up Activities
          </h2>

          <span className="text-sm text-gray-500">
            Upcoming interactions
          </span>

        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {followups.map((item, index) => {

            const t = theme[item.type];

            return (

              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.04 }}
                className={`bg-white border-2 ${t.border} rounded-xl shadow-md hover:shadow-lg transition p-5`}
              >

                {/* Header Row */}
                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    {/* Icon */}
                    <div className={`p-3 rounded-lg ${t.icon}`}>
                      {icon[item.type]}
                    </div>

                    <div>

                      <h3 className="text-sm font-semibold text-gray-800">
                        {item.name}
                      </h3>

                      <p className="text-xs text-gray-500">
                        {item.company}
                      </p>

                    </div>

                  </div>

                  {/* Badge */}
                  <span className={`text-white text-xs px-3 py-1 rounded-full ${t.badge}`}>
                    {item.type}
                  </span>

                </div>

                {/* Divider */}
                <div className="my-4 border-t border-gray-100"></div>

                {/* Time */}
                <div className="flex justify-between items-center">

                  <span className="text-sm text-gray-600">
                    Scheduled Time
                  </span>

                  <span className={`text-sm font-medium ${t.accent}`}>
                    {item.time}
                  </span>

                </div>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>

  );
}