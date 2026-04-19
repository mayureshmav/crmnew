import MainLayout from "../layout/MainLayout";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import QuotationDetails from "../components/quotations/QuotationDetails";
import { 
  FaFileInvoiceDollar, 
  FaHourglassHalf, 
  FaEye, 
  FaPlus,
  FaFileSignature,
  FaArrowRight
} from "react-icons/fa";

const Quotations = () => {
  const [selectedQuote, setSelectedQuote] = useState(null);

  const [quotations] = useState([
    {
      id: 1,
      number: "QT-1021",
      version: "v2",
      client: "Rahul Sharma",
      amount: "₹12,50,000",
      date: "12 Mar 2026",
      status: "Pending Approval",
    },
    {
      id: 2,
      number: "QT-1022",
      version: "v1",
      client: "Neha Singh",
      amount: "₹9,80,000",
      date: "15 Mar 2026",
      status: "Approved",
    },
    {
      id: 3,
      number: "QT-1023",
      version: "v3",
      client: "Amit Gupta",
      amount: "₹6,20,000",
      date: "18 Mar 2026",
      status: "Converted",
    }
  ]);

  // Ultra-Premium Status Badges with glowing dots
  const StatusBadge = ({ status }) => {
    const styles = {
      "Approved": { bg: "bg-emerald-500/10", text: "text-emerald-600", border: "border-emerald-500/20", dot: "bg-emerald-500" },
      "Converted": { bg: "bg-purple-500/10", text: "text-purple-600", border: "border-purple-500/20", dot: "bg-purple-500" },
      "Rejected": { bg: "bg-rose-500/10", text: "text-rose-600", border: "border-rose-500/20", dot: "bg-rose-500" },
      "Pending Approval": { bg: "bg-amber-500/10", text: "text-amber-600", border: "border-amber-500/20", dot: "bg-amber-500" }
    };
    const s = styles[status] || styles["Pending Approval"];

    return (
      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-md ${s.bg} ${s.text} ${s.border}`}>
        <span className={`w-1.5 h-1.5 rounded-full ${s.dot} animate-pulse shadow-[0_0_8px_currentColor]`} />
        {status}
      </span>
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { type: "spring", stiffness: 250, damping: 25 } }
  };

  if (selectedQuote) {
    return (
      <MainLayout>
        <QuotationDetails quote={selectedQuote} onBack={() => setSelectedQuote(null)} />
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      {/* COMPLEX MESH BACKGROUND */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-slate-50">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-400/20 blur-[120px] mix-blend-multiply" />
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[60%] rounded-full bg-violet-400/20 blur-[150px] mix-blend-multiply" />
        <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[50%] rounded-full bg-cyan-400/20 blur-[150px] mix-blend-multiply" />
      </div>

      <motion.div variants={containerVariants} initial="hidden" animate="show" className="max-w-[90rem] mx-auto space-y-10 relative z-10 px-4 sm:px-6 lg:px-8 py-8">
        
        {/* HERO HEADER */}
        <motion.div variants={itemVariants} className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="space-y-1">
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-indigo-950 to-violet-900 pb-1">
              Quotations Hub
            </h1>
            <p className="text-slate-500 text-sm sm:text-base font-medium tracking-wide">
              Architect, approve, and finalize your project costings.
            </p>
          </div>

          {/* GLOWING ACTION BUTTON */}
          <motion.button 
            whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -15px rgba(99,102,241,0.6)" }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedQuote({ id: 'new', number: 'Draft', version: 'v1' })}
            className="relative group overflow-hidden flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl text-sm font-bold transition-all shadow-xl shadow-slate-900/20"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            <div className="p-1.5 bg-white/20 rounded-lg backdrop-blur-sm group-hover:bg-white/30 transition-colors">
              <FaPlus className="text-white text-xs" />
            </div>
            Generate Quotation
          </motion.button>
        </motion.div>

        {/* METRICS DASHBOARD - GLASS CARDS */}
        <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Pipeline Value", value: "₹28.5L", icon: FaFileInvoiceDollar, bg: "bg-gradient-to-br from-indigo-500 to-blue-600", shadow: "shadow-indigo-500/30" },
            { title: "Pending Internal", value: "12", icon: FaHourglassHalf, bg: "bg-gradient-to-br from-orange-400 to-rose-500", shadow: "shadow-orange-500/30" },
            { title: "Contract Ready", value: "5", icon: FaFileSignature, bg: "bg-gradient-to-br from-emerald-400 to-teal-600", shadow: "shadow-emerald-500/30" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="relative overflow-hidden bg-white/70 backdrop-blur-2xl p-7 rounded-[2rem] border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] group"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 ${stat.bg} opacity-10 rounded-bl-full transform group-hover:scale-125 transition-transform duration-700 ease-out`} />
              
              <div className="flex justify-between items-start z-10 relative">
                <div className="space-y-2">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.title}</p>
                  <h2 className="text-4xl font-black text-slate-800 tracking-tighter">{stat.value}</h2>
                </div>
                <div className={`p-4 rounded-2xl ${stat.bg} text-white shadow-lg ${stat.shadow}`}>
                  <stat.icon className="text-2xl drop-shadow-md" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* FLOATING ROW TABLE UI */}
        <motion.div variants={itemVariants} className="space-y-4">
          <div className="flex justify-between items-center px-2">
            <h3 className="text-xl font-bold text-slate-800">Recent Documents</h3>
            <button className="text-sm font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-2 group transition-colors">
              View Directory <FaArrowRight className="text-xs transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="w-full overflow-x-auto pb-4">
            <table className="w-full border-separate border-spacing-y-3 text-sm text-left whitespace-nowrap">
              <thead className="text-slate-400 text-xs uppercase tracking-widest font-bold">
                <tr>
                  <th className="px-6 py-2">ID & Revision</th>
                  <th className="px-6 py-2">Client Profile</th>
                  <th className="px-6 py-2">Generated On</th>
                  <th className="px-6 py-2">Valuation</th>
                  <th className="px-6 py-2">Lifecycle Status</th>
                  <th className="px-6 py-2 text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                <AnimatePresence>
                  {quotations.map((q, index) => (
                    <motion.tr
                      key={q.id}
                      initial={{ opacity: 0, scale: 0.98, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                      onClick={() => setSelectedQuote(q)}
                      className="group cursor-pointer"
                    >
                      {/* Using wrapper div inside td to create the "Floating Pill" look */}
                      <td className="p-0">
                        <div className="bg-white/80 backdrop-blur-xl border-y border-l border-white shadow-[0_4px_20px_rgb(0,0,0,0.03)] px-6 py-5 rounded-l-3xl flex items-center gap-3 group-hover:bg-white transition-all">
                          <span className="font-black text-slate-800 group-hover:text-indigo-600 transition-colors text-base">
                            {q.number}
                          </span>
                          <span className="px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-600 text-[10px] font-black tracking-widest border border-indigo-100">
                            {q.version}
                          </span>
                        </div>
                      </td>
                      
                      <td className="p-0">
                        <div className="bg-white/80 backdrop-blur-xl border-y border-white shadow-[0_4px_20px_rgb(0,0,0,0.03)] px-6 py-5 group-hover:bg-white transition-all">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-slate-700 font-black text-sm border-2 border-white shadow-sm">
                              {q.client.charAt(0)}
                            </div>
                            <span className="font-bold text-slate-700 text-base">{q.client}</span>
                          </div>
                        </div>
                      </td>

                      <td className="p-0">
                        <div className="bg-white/80 backdrop-blur-xl border-y border-white shadow-[0_4px_20px_rgb(0,0,0,0.03)] px-6 py-5 text-slate-500 font-semibold group-hover:bg-white transition-all">
                          {q.date}
                        </div>
                      </td>

                      <td className="p-0">
                        <div className="bg-white/80 backdrop-blur-xl border-y border-white shadow-[0_4px_20px_rgb(0,0,0,0.03)] px-6 py-5 font-black text-slate-800 text-base group-hover:bg-white transition-all">
                          {q.amount}
                        </div>
                      </td>

                      <td className="p-0">
                        <div className="bg-white/80 backdrop-blur-xl border-y border-white shadow-[0_4px_20px_rgb(0,0,0,0.03)] px-6 py-5 group-hover:bg-white transition-all">
                          <StatusBadge status={q.status} />
                        </div>
                      </td>

                      <td className="p-0">
                        <div className="bg-white/80 backdrop-blur-xl border-y border-r border-white shadow-[0_4px_20px_rgb(0,0,0,0.03)] px-6 py-5 rounded-r-3xl text-right group-hover:bg-white transition-all">
                          <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedQuote(q);
                            }}
                            className="px-4 py-2.5 bg-slate-50 text-slate-600 group-hover:bg-indigo-600 group-hover:text-white rounded-xl font-bold transition-all shadow-sm flex items-center gap-2 ml-auto"
                          >
                            <FaEye /> <span>Review</span>
                          </motion.button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
          </div>
        </motion.div>
      </motion.div>
    </MainLayout>
  );
};

export default Quotations;