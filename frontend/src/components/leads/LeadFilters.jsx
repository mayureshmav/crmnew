import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaFilter,
  FaUserTie,
  FaCalendarAlt,
  FaFire
} from "react-icons/fa";

const LeadFilters = () => {

  const [filters, setFilters] = useState({
    search: "",
    status: "",
    source: "",
    rep: "",
    score: "",
    date: ""
  });

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  return (

    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full mb-8"
    >

      {/* Gradient Filter Card */}
      <div className="relative rounded-2xl p-[1px] bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 shadow-lg">

        {/* Inner Card */}
        <div className="rounded-2xl bg-white p-6 backdrop-blur-md">

          {/* Header */}
          <div className="flex items-center justify-between mb-6">

            <div className="flex items-center gap-2">
              <FaFilter className="text-indigo-500 text-lg"/>
              <h3 className="text-lg font-semibold text-gray-800">
                Lead Filters
              </h3>
            </div>

            <span className="text-sm text-gray-500">
              Refine lead search
            </span>

          </div>

          {/* Filter Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">

            {/* Search Lead */}
            <div className="relative col-span-2">

              <FaSearch className="absolute left-3 top-3 text-gray-400"/>

              <input
                type="text"
                name="search"
                placeholder="Search Lead..."
                value={filters.search}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-indigo-400 transition shadow-sm"
              />

            </div>

            {/* Status */}
            <select
              name="status"
              value={filters.status}
              onChange={handleChange}
              className="py-2 px-3 rounded-lg border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-indigo-400 transition"
            >
              <option value="">Status</option>
              <option>New</option>
              <option>Contacted</option>
              <option>Qualified</option>
              <option>Negotiation</option>
              <option>Won</option>
              <option>Lost</option>
            </select>

            {/* Source */}
            <select
              name="source"
              value={filters.source}
              onChange={handleChange}
              className="py-2 px-3 rounded-lg border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-indigo-400 transition"
            >
              <option value="">Source</option>
              <option>Website</option>
              <option>IndiaMart</option>
              <option>MagicBricks</option>
              <option>Referral</option>
              <option>Walk-in</option>
            </select>

            {/* Lead Score */}
            <div className="relative">

              <FaFire className="absolute left-3 top-3 text-orange-400"/>

              <select
                name="score"
                value={filters.score}
                onChange={handleChange}
                className="w-full pl-10 py-2 rounded-lg border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-indigo-400 transition"
              >
                <option value="">Score</option>
                <option>Hot</option>
                <option>Warm</option>
                <option>Cold</option>
              </select>

            </div>

            {/* Assigned Rep */}
            <div className="relative">

              <FaUserTie className="absolute left-3 top-3 text-gray-400"/>

              <input
                name="rep"
                placeholder="Sales Rep"
                value={filters.rep}
                onChange={handleChange}
                className="w-full pl-10 py-2 rounded-lg border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-indigo-400 transition"
              />

            </div>

            {/* Date */}
            <div className="relative">

              <FaCalendarAlt className="absolute left-3 top-3 text-gray-400"/>

              <input
                type="date"
                name="date"
                value={filters.date}
                onChange={handleChange}
                className="w-full pl-10 py-2 rounded-lg border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-indigo-400 transition"
              />

            </div>

          </div>

          {/* Active Filters Preview */}
          <div className="flex flex-wrap gap-2 mt-5">

            {Object.entries(filters).map(([key,value]) => (
              value && (
                <span
                  key={key}
                  className="px-3 py-1 text-xs rounded-full bg-indigo-50 text-indigo-600 border border-indigo-200"
                >
                  {value}
                </span>
              )
            ))}

          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3 mt-6">

            {/* Reset */}
            <button
              onClick={()=>setFilters({
                search:"",
                status:"",
                source:"",
                rep:"",
                score:"",
                date:""
              })}
              className="px-4 py-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 transition"
            >
              Reset
            </button>

            {/* Apply */}
            <motion.button
              whileHover={{ scale:1.05 }}
              whileTap={{ scale:0.95 }}
              className="px-5 py-2 text-white font-medium rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 shadow-md hover:opacity-90 transition"
            >
              Apply Filters
            </motion.button>

          </div>

        </div>
      </div>

    </motion.div>
  );
};

export default LeadFilters;