import { motion } from "framer-motion";
import { 
  FaFileInvoiceDollar, 
  FaMoneyCheckAlt, 
  FaRegClock,
  FaArrowUp,
  FaArrowDown
} from "react-icons/fa";

const InvoiceKPIs = ({ containerVariants, itemVariants }) => {
  // Enhanced Data Structure: Added trend data for a more professional SaaS feel
  const kpis = [
    { 
      title: "Total Invoiced", 
      value: "₹24.5L", 
      subtitle: "Across 32 invoices", 
      trend: "+12.5%", 
      isPositive: true,
      icon: FaFileInvoiceDollar, 
      gradient: "from-blue-500 to-indigo-600", 
      shadow: "shadow-blue-500/30",
      glow: "bg-blue-500/5"
    },
    { 
      title: "Payment Received", 
      value: "₹18.2L", 
      subtitle: "74% collection rate", 
      trend: "+8.2%", 
      isPositive: true,
      icon: FaMoneyCheckAlt, 
      gradient: "from-emerald-400 to-teal-500", 
      shadow: "shadow-emerald-500/30",
      glow: "bg-emerald-500/5"
    },
    { 
      title: "Pending Amount", 
      value: "₹6.3L", 
      subtitle: "Includes overdue", 
      trend: "-2.4%", 
      isPositive: false, // Less pending is a good thing, but we'll mark it red for urgency in UI
      icon: FaRegClock, 
      gradient: "from-amber-400 to-orange-500", 
      shadow: "shadow-amber-500/30",
      glow: "bg-orange-500/5"
    }
  ];

  return (
    <motion.div 
      variants={containerVariants} 
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
    >
      {kpis.map((stat, i) => (
        <motion.div
          key={i}
          variants={itemVariants}
          whileHover={{ y: -6, scale: 1.01 }}
          className="relative overflow-hidden bg-white/70 backdrop-blur-2xl p-6 sm:p-7 rounded-[2rem] border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 group flex flex-col justify-between h-full"
        >
          {/* Ambient Corner Glow - Expands on hover */}
          <div className={`absolute -right-10 -top-10 w-40 h-40 ${stat.glow} rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none`} />
          
          <div className="flex justify-between items-start z-10 relative mb-4">
            <div className="space-y-1.5">
              <p className="text-[10px] sm:text-xs font-black text-slate-400 uppercase tracking-widest">
                {stat.title}
              </p>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-800 tracking-tighter">
                {stat.value}
              </h2>
            </div>
            
            {/* Premium Floating Icon Block */}
            <div className={`p-4 rounded-2xl bg-gradient-to-br ${stat.gradient} text-white shadow-lg ${stat.shadow} transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300`}>
              <stat.icon className="text-xl sm:text-2xl drop-shadow-md" />
            </div>
          </div>

          {/* Subtitle & Trend Indicator */}
          <div className="flex items-center justify-between mt-2 z-10 relative border-t border-slate-100/60 pt-4">
            <p className="text-xs font-semibold text-slate-500">
              {stat.subtitle}
            </p>
            
            {/* Contextual Trend Badge */}
            <div className={`flex items-center gap-1 px-2 py-1 rounded-md text-[10px] font-black tracking-wider ${stat.isPositive ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : 'bg-rose-50 text-rose-600 border border-rose-100'}`}>
              {stat.isPositive ? <FaArrowUp /> : <FaArrowDown />}
              {stat.trend}
            </div>
          </div>
          
          {/* Subtle Glass Reflection Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default InvoiceKPIs;