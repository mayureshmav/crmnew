import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaArrowLeft, 
  FaCodeBranch, 
  FaUserTie, 
  FaLock, 
  FaUnlockAlt,
  FaChevronDown
} from 'react-icons/fa';

const QuotationHeader = ({ quote, version, setVersion, onBack }) => {
  // Logic to determine if the currently viewed version is an older, read-only version.
  // Assuming 'v2' is the latest active version for this example.
  const isLatestVersion = version === 'v2';

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="relative w-full bg-white/70 backdrop-blur-2xl p-6 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/80 overflow-hidden group"
    >
      {/* Subtle background gradient accent that changes based on version status */}
      <div className={`absolute top-0 left-0 w-full h-1.5 transition-colors duration-500 ${isLatestVersion ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' : 'bg-gradient-to-r from-amber-400 to-orange-500'}`} />

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        
        {/* LEFT COMPONENT: Back Button & Title Area */}
        <div className="flex items-center gap-5">
          
          <motion.button 
            whileHover={{ scale: 1.1, x: -3 }}
            whileTap={{ scale: 0.9 }}
            onClick={onBack} 
            className="p-3 bg-slate-50 text-slate-500 hover:bg-indigo-50 hover:text-indigo-600 rounded-2xl shadow-sm border border-slate-100 transition-colors flex-shrink-0"
          >
            <FaArrowLeft />
          </motion.button>
          
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-2xl font-black tracking-tight text-slate-800">
                {quote?.number || 'New Quotation'}
              </h2>
              
              {/* US-015: Interactive Version Control Dropdown */}
              <div className="relative">
                <select 
                  className={`appearance-none pl-4 pr-10 py-1.5 rounded-xl text-xs font-bold cursor-pointer outline-none transition-all shadow-sm border ${
                    isLatestVersion 
                      ? 'bg-indigo-50 border-indigo-100 text-indigo-700 focus:ring-2 focus:ring-indigo-500/30' 
                      : 'bg-amber-50 border-amber-100 text-amber-700 focus:ring-2 focus:ring-amber-500/30'
                  }`}
                  value={version}
                  onChange={(e) => setVersion(e.target.value)}
                >
                  <option value="v1">Version 1 (Read-only)</option>
                  <option value="v2">Version 2 (Active)</option>
                </select>
                {/* Custom dropdown arrow to replace native styling */}
                <div className={`absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none ${isLatestVersion ? 'text-indigo-400' : 'text-amber-400'}`}>
                  <FaChevronDown className="text-[10px]" />
                </div>
              </div>

              {/* Status Indicator Chip */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={isLatestVersion ? 'active' : 'readonly'}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest ${
                    isLatestVersion 
                      ? 'bg-emerald-500/10 text-emerald-600' 
                      : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  {isLatestVersion ? <FaUnlockAlt /> : <FaLock />}
                  {isLatestVersion ? 'Active Draft' : 'Archived'}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Client Info with Avatar */}
            <div className="flex items-center gap-2 text-sm">
              <div className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 shadow-inner">
                <FaUserTie className="text-[10px]" />
              </div>
              <span className="text-slate-500">Prepared for:</span>
              <span className="font-bold text-slate-700 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-100 shadow-sm">
                {quote?.client || 'Select Client'}
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT COMPONENT: US-015 Create Revision Action */}
        <motion.button 
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="w-full md:w-auto relative overflow-hidden group flex justify-center items-center gap-2 px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-2xl text-sm font-bold transition-all shadow-[0_2px_10px_rgb(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgb(0,0,0,0.06)] hover:border-indigo-200"
        >
          {/* Subtle hover gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
          
          <div className="p-1.5 rounded-lg bg-slate-100 group-hover:bg-indigo-100 text-slate-500 group-hover:text-indigo-600 transition-colors">
            <FaCodeBranch className="text-xs" />
          </div>
          Create Revision
        </motion.button>
        
      </div>
    </motion.div>
  );
};

export default QuotationHeader;