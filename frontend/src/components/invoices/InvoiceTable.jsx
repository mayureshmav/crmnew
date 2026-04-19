import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaFilter, 
  FaSearch, 
  FaEllipsisV, 
  FaMagic, 
  FaCalendarAlt,
  FaFilePdf,
  FaFileCsv,
  FaExclamationCircle
} from "react-icons/fa";

const InvoiceTable = ({ invoices, itemVariants }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredInvoices = invoices.filter(inv => 
    activeFilter === 'All' ? true : inv.status === activeFilter
  );

  // Advanced Gradient Status Badges
  const StatusBadge = ({ status }) => {
    const styles = {
      "Paid": { bg: "from-emerald-500/20 to-emerald-400/10", text: "text-emerald-700", border: "border-emerald-500/30", dot: "bg-emerald-500" },
      "Unpaid": { bg: "from-amber-500/20 to-amber-400/10", text: "text-amber-700", border: "border-amber-500/30", dot: "bg-amber-500" },
      "Overdue": { bg: "from-rose-500/20 to-rose-400/10", text: "text-rose-700", border: "border-rose-500/30", dot: "bg-rose-500" },
      "Draft": { bg: "from-slate-500/20 to-slate-400/10", text: "text-slate-700", border: "border-slate-500/30", dot: "bg-slate-500" }
    };
    const s = styles[status] || styles["Draft"];

    return (
      <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] sm:text-[11px] font-black uppercase tracking-wider border backdrop-blur-md bg-gradient-to-r ${s.bg} ${s.text} ${s.border} shadow-sm`}>
        {status === 'Draft' ? <FaMagic className="text-[10px]" /> : <span className={`w-1.5 h-1.5 rounded-full ${s.dot} animate-pulse shadow-[0_0_8px_currentColor]`} />}
        {status}
      </span>
    );
  };

  return (
    <div className="space-y-6">
      
      {/* ========================================== */}
      {/* RESPONSIVE FILTERS, SEARCH & EXPORT (US-030) */}
      {/* ========================================== */}
      <motion.div variants={itemVariants} className="flex flex-col xl:flex-row justify-between items-center gap-4 bg-white/60 backdrop-blur-xl p-3 rounded-2xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-full overflow-hidden">
        
        {/* Mobile-Scrollable Filter Pills */}
        <div className="flex bg-slate-100/50 p-1.5 rounded-xl w-full xl:w-auto overflow-x-auto hide-scrollbar gap-1 border border-slate-200/50">
          {['All', 'Paid', 'Unpaid', 'Overdue', 'Draft'].map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-black transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                activeFilter === filter 
                ? 'bg-white text-indigo-700 shadow-[0_2px_10px_rgba(0,0,0,0.08)] scale-105' 
                : 'text-slate-500 hover:text-slate-800 hover:bg-white/40'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        
        {/* Search & Export Actions */}
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 w-full xl:w-auto">
          <div className="relative w-full sm:w-64">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search invoices..." 
              className="w-full pl-11 pr-4 py-3 bg-white/80 border border-slate-200 rounded-xl text-sm font-bold text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-300 transition-all shadow-inner"
            />
          </div>
          
          <div className="flex items-center gap-2 ml-auto sm:ml-0">
            {/* US-030: Export to PDF */}
            <motion.button 
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              className="p-3 bg-white border border-slate-200 rounded-xl text-rose-500 hover:bg-rose-50 transition-colors shadow-sm flex items-center gap-2 group"
              title="Export to PDF"
            >
              <FaFilePdf /> <span className="text-xs font-bold hidden sm:block group-hover:text-rose-600">PDF</span>
            </motion.button>
            
            {/* US-030: Export to Excel/CSV */}
            <motion.button 
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              className="p-3 bg-white border border-slate-200 rounded-xl text-emerald-500 hover:bg-emerald-50 transition-colors shadow-sm flex items-center gap-2 group"
              title="Export to Excel"
            >
              <FaFileCsv /> <span className="text-xs font-bold hidden sm:block group-hover:text-emerald-600">CSV</span>
            </motion.button>
          </div>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="w-full">
        
        {/* ========================================== */}
        {/* MOBILE VIEW: FINTECH DATA CARDS (< lg) */}
        {/* ========================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:hidden">
          <AnimatePresence>
            {filteredInvoices.map((inv, index) => {
              const isOverdue = inv.status === 'Overdue';
              
              return (
                <motion.div
                  key={inv.id}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: index * 0.05, type: "spring" }}
                  className={`relative overflow-hidden backdrop-blur-xl p-5 sm:p-6 rounded-3xl border shadow-lg flex flex-col gap-5 transition-all duration-300 ${
                    isOverdue 
                    ? 'bg-rose-50/90 border-rose-200 shadow-rose-500/10' 
                    : 'bg-white/80 border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)]'
                  }`}
                >
                  {/* Subtle Alert Glow for Overdue */}
                  {isOverdue && <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 rounded-full blur-2xl pointer-events-none" />}

                  {/* Header */}
                  <div className="flex justify-between items-start border-b border-slate-200/60 pb-4 relative z-10">
                    <div>
                      <span className={`font-black text-lg ${isOverdue ? 'text-rose-900' : 'text-slate-800'}`}>
                        {inv.id}
                      </span>
                      {isOverdue && (
                        <div className="flex items-center gap-1 mt-1 text-[10px] font-bold text-rose-600 uppercase tracking-widest">
                          <FaExclamationCircle /> Action Required
                        </div>
                      )}
                    </div>
                    <StatusBadge status={inv.status} />
                  </div>
                  
                  {/* Client Info */}
                  <div className="flex justify-between items-center relative z-10">
                    <div>
                      <p className={`font-black text-base ${isOverdue ? 'text-rose-900' : 'text-slate-800'}`}>{inv.client}</p>
                      <p className="text-xs text-slate-500 font-semibold mt-0.5">{inv.description}</p>
                    </div>
                    <button className="p-2.5 text-slate-400 hover:text-indigo-600 bg-white shadow-sm border border-slate-100 rounded-xl transition-all hover:scale-105">
                      <FaEllipsisV className="text-xs" />
                    </button>
                  </div>

                  {/* Financial Footer Block */}
                  <div className={`flex justify-between items-end p-4 rounded-2xl border relative z-10 ${
                    isOverdue ? 'bg-rose-100/50 border-rose-200' : 'bg-slate-50/80 border-slate-100'
                  }`}>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Total Due</p>
                      <span className={`font-black text-2xl tracking-tighter ${isOverdue ? 'text-rose-700' : 'text-slate-800'}`}>
                        {inv.amount}
                      </span>
                    </div>
                    <div className="text-right flex flex-col items-end gap-1.5">
                      <span className={`text-xs font-bold flex items-center gap-1.5 ${isOverdue ? 'text-rose-600' : 'text-slate-500'}`}>
                        <FaCalendarAlt className={isOverdue ? 'text-rose-400' : 'text-slate-400'}/> 
                        {inv.dueDate}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* ========================================== */}
        {/* DESKTOP VIEW: FLOATING GLASS ROWS (lg+) */}
        {/* ========================================== */}
        <div className="hidden lg:block w-full overflow-x-auto pb-8">
          <table className="w-full border-separate border-spacing-y-3 text-sm text-left whitespace-nowrap">
            <thead className="text-slate-400 text-xs uppercase tracking-widest font-black">
              <tr>
                <th className="px-6 py-2">Invoice #</th>
                <th className="px-6 py-2">Client Profile</th>
                <th className="px-6 py-2">Lifecycle Dates</th>
                <th className="px-6 py-2 text-right">Amount</th>
                <th className="px-6 py-2 text-center">Status</th>
                <th className="px-6 py-2">Payment Details</th>
                <th className="px-6 py-2 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              <AnimatePresence>
                {filteredInvoices.map((inv, index) => {
                  // US-030: Overdue logic
                  const isOverdue = inv.status === 'Overdue';
                  // Dynamic class generator based on status
                  const rowClass = isOverdue 
                    ? 'bg-rose-50/90 border-rose-200 group-hover:bg-rose-100/90 shadow-[0_4px_20px_rgba(244,63,94,0.1)]' 
                    : 'bg-white/80 border-white group-hover:bg-white shadow-[0_4px_15px_rgb(0,0,0,0.02)]';
                  const textClass = isOverdue ? 'text-rose-900' : 'text-slate-800';

                  return (
                    <motion.tr
                      key={inv.id}
                      initial={{ opacity: 0, y: 15, scale: 0.99 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ delay: index * 0.05, type: "spring", damping: 25 }}
                      className="group cursor-pointer"
                    >
                      {/* Using internal divs to create the "Floating Row" border effect */}
                      <td className="p-0">
                        <div className={`backdrop-blur-xl border-y border-l px-6 py-5 rounded-l-2xl transition-all h-full flex flex-col justify-center relative ${rowClass}`}>
                          {/* Left Red Accent Line for Overdue */}
                          {isOverdue && <div className="absolute left-0 top-1/4 bottom-1/4 w-1.5 bg-rose-500 rounded-r-md" />}
                          <span className={`font-black text-base ${textClass}`}>{inv.id}</span>
                        </div>
                      </td>
                      
                      <td className="p-0">
                        <div className={`backdrop-blur-xl border-y px-6 py-5 transition-all h-full ${rowClass}`}>
                          <p className={`font-black text-base ${textClass}`}>{inv.client}</p>
                          <p className={`text-xs font-semibold mt-0.5 truncate max-w-[200px] ${isOverdue ? 'text-rose-600' : 'text-slate-500'}`}>
                            {inv.description}
                          </p>
                        </div>
                      </td>
                      
                      <td className="p-0">
                        <div className={`backdrop-blur-xl border-y px-6 py-5 transition-all h-full ${rowClass}`}>
                          <div className="flex flex-col gap-1 text-xs">
                            <span className={`font-semibold ${isOverdue ? 'text-rose-700' : 'text-slate-500'}`}>
                              <span className={isOverdue ? 'text-rose-400' : 'text-slate-400'}>Inv:</span> {inv.date}
                            </span>
                            <span className={`font-black ${isOverdue ? 'text-rose-600' : 'text-slate-700'}`}>
                              <span className={isOverdue ? 'text-rose-400' : 'text-slate-400'}>Due:</span> {inv.dueDate}
                            </span>
                          </div>
                        </div>
                      </td>
                      
                      <td className="p-0">
                        <div className={`backdrop-blur-xl border-y px-6 py-5 text-right transition-all h-full flex items-center justify-end ${rowClass}`}>
                          <span className={`font-black text-xl tracking-tighter ${textClass}`}>{inv.amount}</span>
                        </div>
                      </td>
                      
                      <td className="p-0">
                        <div className={`backdrop-blur-xl border-y px-6 py-5 transition-all h-full flex items-center justify-center ${rowClass}`}>
                          <StatusBadge status={inv.status} />
                        </div>
                      </td>
                      
                      <td className="p-0">
                        <div className={`backdrop-blur-xl border-y px-6 py-5 transition-all h-full ${rowClass}`}>
                           <div className="flex flex-col gap-1 text-xs">
                            <span className={`font-bold ${textClass}`}>
                              <span className={isOverdue ? 'text-rose-400' : 'text-slate-400'}>Mode:</span> {inv.paymentMode}
                            </span>
                            <span className={`font-semibold ${isOverdue ? 'text-rose-700' : 'text-slate-500'}`}>
                              <span className={isOverdue ? 'text-rose-400' : 'text-slate-400'}>Rcvd:</span> {inv.receivedDate}
                            </span>
                          </div>
                        </div>
                      </td>
                      
                      <td className="p-0">
                        <div className={`backdrop-blur-xl border-y border-r px-6 py-5 rounded-r-2xl transition-all h-full flex items-center justify-center ${rowClass}`}>
                          <button className={`p-2.5 rounded-xl transition-all shadow-sm ${
                            isOverdue 
                            ? 'bg-rose-100 text-rose-600 hover:bg-rose-500 hover:text-white' 
                            : 'bg-white text-slate-400 hover:text-indigo-600 border border-slate-100 hover:border-indigo-200'
                          }`}>
                            <FaEllipsisV />
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  );
                })}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default InvoiceTable;