import { motion } from 'framer-motion';
import { 
  FaDownload, 
  FaUserCheck, 
  FaPaperPlane, 
  FaFileSignature 
} from 'react-icons/fa';

const QuotationActions = () => {
  // Framer motion orchestration for staggered button entrances
  const containerVariants = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 400, damping: 25 } }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="flex flex-col md:flex-row flex-wrap items-center gap-4 bg-white/60 backdrop-blur-2xl p-4 sm:p-5 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/80 w-full"
    >
      {/* ----------------------------------------------------------------- */}
      {/* US-014: Download / Print Quotation (Neutral Utility)              */}
      {/* ----------------------------------------------------------------- */}
      <motion.button 
        variants={buttonVariants}
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.97 }}
        className="w-full md:w-auto relative group flex items-center justify-center gap-2.5 px-6 py-3.5 bg-slate-50 text-slate-600 rounded-2xl text-sm font-bold transition-all border border-slate-200 hover:border-slate-300 hover:bg-slate-100 hover:shadow-md"
      >
        <div className="p-1.5 rounded-lg bg-white shadow-sm text-slate-500 group-hover:text-slate-700 transition-colors">
          <FaDownload className="text-xs" />
        </div>
        Download PDF
      </motion.button>

      {/* ----------------------------------------------------------------- */}
      {/* US-012: Internal Approval Submission (Warning/Action Needed)      */}
      {/* ----------------------------------------------------------------- */}
      <motion.button 
        variants={buttonVariants}
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.97 }}
        className="w-full md:w-auto relative group flex items-center justify-center gap-2.5 px-6 py-3.5 bg-amber-50/50 text-amber-700 rounded-2xl text-sm font-bold transition-all border border-amber-200/50 hover:border-amber-300 hover:bg-amber-100/50 hover:shadow-md hover:shadow-amber-500/10"
      >
        <div className="p-1.5 rounded-lg bg-amber-100 shadow-sm text-amber-500 group-hover:text-amber-600 transition-colors">
          <FaUserCheck className="text-xs" />
        </div>
        Submit Approval
      </motion.button>

      {/* ----------------------------------------------------------------- */}
      {/* US-013: Send Quotation to Client via Email (Communication)        */}
      {/* ----------------------------------------------------------------- */}
      <motion.button 
        variants={buttonVariants}
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.97 }}
        className="w-full md:w-auto relative group flex items-center justify-center gap-2.5 px-6 py-3.5 bg-blue-50/50 text-blue-700 rounded-2xl text-sm font-bold transition-all border border-blue-200/50 hover:border-blue-300 hover:bg-blue-100/50 hover:shadow-md hover:shadow-blue-500/10"
      >
        <div className="p-1.5 rounded-lg bg-blue-100 shadow-sm text-blue-500 group-hover:text-blue-600 transition-colors">
          <FaPaperPlane className="text-xs" />
        </div>
        Email Client
      </motion.button>

      {/* ----------------------------------------------------------------- */}
      {/* US-017: Convert to Contract (Primary Success Action)              */}
      {/* ----------------------------------------------------------------- */}
      <motion.div variants={buttonVariants} className="w-full md:w-auto md:ml-auto mt-2 md:mt-0">
        <motion.button 
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="w-full relative overflow-hidden group flex items-center justify-center gap-3 px-8 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-2xl text-sm font-black transition-all shadow-[0_8px_20px_rgb(16,185,129,0.3)] hover:shadow-[0_12px_25px_rgb(16,185,129,0.4)]"
        >
          {/* Animated Shimmer Effect */}
          <div className="absolute inset-0 w-full h-full -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
          
          <div className="p-1.5 rounded-lg bg-white/20 backdrop-blur-sm group-hover:bg-white/30 transition-colors">
            <FaFileSignature className="text-sm" />
          </div>
          Convert to Contract
        </motion.button>
      </motion.div>

    </motion.div>
  );
};

export default QuotationActions;