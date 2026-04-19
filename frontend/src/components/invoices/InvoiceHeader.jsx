import { motion } from "framer-motion";
import { FaPlus, FaMagic, FaBell, FaCog } from "react-icons/fa";

const InvoiceHeader = ({ itemVariants }) => {
  return (
    <motion.div 
      variants={itemVariants} 
      className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6 w-full"
    >
      {/* LEFT CONTENT: Title & System Status (US-029) */}
      <div className="space-y-2.5 w-full xl:w-auto text-left">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-900 pb-1">
            Invoice Management
          </h1>
          
          {/* US-029 System Status Indicator */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 w-max backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.1)]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-emerald-700">
              Milestone Auto-Sync On
            </span>
          </div>
        </div>
        
        <p className="text-slate-500 text-xs sm:text-sm lg:text-base font-semibold tracking-wide max-w-2xl">
          Track receivables, manage overdue payments, and review auto-generated milestone drafts.
        </p>
      </div>

      {/* RIGHT CONTENT: Action Buttons (US-029) */}
      <div className="flex flex-col sm:flex-row items-center gap-3 w-full xl:w-auto">
        
        {/* Settings/Config Icon (Implicit for US-029 Alert-only mode config) */}
        <motion.button
          whileHover={{ scale: 1.05, rotate: 15 }}
          whileTap={{ scale: 0.95 }}
          className="hidden sm:flex p-4 bg-white/60 backdrop-blur-xl rounded-2xl text-slate-400 hover:text-indigo-600 border border-white/80 shadow-[0_4px_15px_rgb(0,0,0,0.02)] hover:shadow-md transition-all flex-shrink-0"
        >
          <FaCog className="text-lg" />
        </motion.button>

        {/* US-029: Pending Drafts Notification Button */}
        <motion.button 
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="w-full sm:w-auto relative group flex items-center justify-center gap-3 bg-white/80 backdrop-blur-2xl px-6 py-3.5 sm:py-4 rounded-2xl text-sm font-bold transition-all border border-indigo-100 shadow-[0_8px_20px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_25px_rgba(99,102,241,0.15)] hover:border-indigo-300 text-slate-700"
        >
          <div className="relative">
            <FaBell className="text-indigo-500 text-base group-hover:animate-wiggle" />
            {/* Notification Dot */}
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-rose-500 border-2 border-white rounded-full" />
          </div>
          <span>Review Drafts</span>
          <span className="bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-lg text-xs font-black">
            3
          </span>
        </motion.button>

        {/* Primary Manual Action (US-029 point 5: "Manual invoice generation available at any time") */}
        <motion.button 
          whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -15px rgba(15,23,42,0.4)" }}
          whileTap={{ scale: 0.98 }}
          className="w-full sm:w-auto relative group overflow-hidden flex justify-center items-center gap-3 bg-slate-900 text-white px-6 py-3.5 sm:py-4 rounded-2xl text-sm font-bold transition-all shadow-xl shadow-slate-900/20 flex-shrink-0"
        >
          {/* Shimmer / Gradient reveal effect */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-slate-800 to-indigo-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
          
          <div className="p-1.5 bg-white/10 rounded-lg backdrop-blur-sm group-hover:bg-white/20 transition-colors border border-white/5">
            <FaPlus className="text-indigo-300 text-xs" />
          </div>
          Create Manual
        </motion.button>

      </div>
    </motion.div>
  );
};

export default InvoiceHeader;