import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaCalendarAlt, 
  FaPercentage, 
  FaPlus, 
  FaTrashAlt, 
  FaCheckCircle, 
  FaExclamationTriangle 
} from 'react-icons/fa';

const PaymentSchedule = ({ milestones, setMilestones, totalAmount }) => {
  const finalTotal = totalAmount * 1.18; // Including tax

  // Calculate the current allocated percentage
  const totalPercentage = milestones.reduce((sum, ms) => sum + (Number(ms.percentage) || 0), 0);
  const isPerfect = totalPercentage === 100;
  const isOver = totalPercentage > 100;

  // Handlers for interactions
  const updateMilestone = (id, field, value) => {
    setMilestones(current => current.map(ms => 
      ms.id === id ? { ...ms, [field]: value } : ms
    ));
  };

  const removeMilestone = (id) => {
    setMilestones(current => current.filter(ms => ms.id !== id));
  };

  const addMilestone = () => {
    const newId = milestones.length > 0 ? Math.max(...milestones.map(m => m.id)) + 1 : 1;
    const remaining = 100 - totalPercentage;
    setMilestones([...milestones, { 
      id: newId, 
      name: "New Milestone", 
      percentage: remaining > 0 ? remaining : 0, 
      dueDate: "" 
    }]);
  };

  // Determine validation colors
  const progressColor = isPerfect ? 'bg-emerald-500' : isOver ? 'bg-rose-500' : 'bg-amber-500';
  const progressGlow = isPerfect ? 'shadow-[0_0_15px_rgba(16,185,129,0.5)]' : isOver ? 'shadow-[0_0_15px_rgba(244,63,94,0.5)]' : 'shadow-none';

  return (
    <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-slate-700/50 p-6 sm:p-8 h-full flex flex-col relative overflow-hidden group">
      
      {/* Ambient glowing orb in the background */}
      <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none" />

      {/* HEADER & VALIDATION (US-016) */}
      <div className="mb-8 relative z-10">
        <div className="flex justify-between items-end mb-2">
          <div>
            <h3 className="text-2xl font-black text-white tracking-tight">Schedule</h3>
            <p className="text-xs font-semibold text-slate-400 mt-1 uppercase tracking-widest">Milestone Breakdown</p>
          </div>
          
          {/* Validation Status Icon */}
          <div className="flex items-center gap-2">
            <span className={`text-2xl ${isPerfect ? 'text-emerald-400' : isOver ? 'text-rose-400' : 'text-amber-400'}`}>
              {isPerfect ? <FaCheckCircle /> : <FaExclamationTriangle />}
            </span>
          </div>
        </div>

        {/* Dynamic Progress Bar */}
        <div className="mt-4 space-y-2">
          <div className="flex justify-between text-xs font-bold text-slate-300">
            <span>Allocated</span>
            <span className={isPerfect ? 'text-emerald-400' : isOver ? 'text-rose-400' : 'text-amber-400'}>
              {totalPercentage}% / 100%
            </span>
          </div>
          <div className="h-2.5 w-full bg-slate-800 rounded-full overflow-hidden border border-slate-700/50">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(totalPercentage, 100)}%` }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className={`h-full rounded-full transition-colors duration-300 ${progressColor} ${progressGlow}`}
            />
          </div>
          {isOver && <p className="text-xs text-rose-400 font-semibold text-right animate-pulse">Exceeds 100% total!</p>}
        </div>
      </div>

      {/* MILESTONE LIST */}
      <div className="flex-1 space-y-4 overflow-y-auto pr-1 custom-scrollbar relative z-10">
        <AnimatePresence>
          {milestones.map((ms, idx) => (
            <motion.div 
              key={ms.id} 
              initial={{ opacity: 0, x: 20, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
              className="bg-white/5 hover:bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/10 transition-colors group/card relative"
            >
              {/* Delete Button (appears on hover) */}
              <button 
                onClick={() => removeMilestone(ms.id)}
                className="absolute -top-3 -right-3 p-2 bg-slate-800 text-slate-400 hover:bg-rose-500 hover:text-white rounded-full opacity-0 group-hover/card:opacity-100 transition-all shadow-lg scale-75 hover:scale-100"
              >
                <FaTrashAlt className="text-xs" />
              </button>

              <div className="space-y-4">
                {/* Milestone Name Input */}
                <div className="flex items-center justify-between border-b border-slate-600/50 pb-2">
                  <input 
                    type="text" 
                    value={ms.name}
                    onChange={(e) => updateMilestone(ms.id, 'name', e.target.value)}
                    className="bg-transparent font-bold text-white outline-none w-full placeholder-slate-500 text-base"
                    placeholder="Milestone Name"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4 items-end">
                  {/* Percentage Input */}
                  <div className="space-y-1 relative">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
                      <FaPercentage className="text-indigo-400" /> Share (%)
                    </label>
                    <div className="relative">
                      <input 
                        type="number" 
                        value={ms.percentage}
                        onChange={(e) => updateMilestone(ms.id, 'percentage', e.target.value)}
                        className="bg-slate-800/50 text-white w-full px-3 py-2 rounded-xl text-sm font-bold border border-slate-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all pr-8"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 font-bold text-sm">%</span>
                    </div>
                  </div>

                  {/* Date Input */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
                      <FaCalendarAlt className="text-cyan-400" /> Due Date
                    </label>
                    <input 
                      type="date" 
                      value={ms.dueDate}
                      onChange={(e) => updateMilestone(ms.id, 'dueDate', e.target.value)}
                      className="bg-slate-800/50 text-slate-200 w-full px-3 py-2 rounded-xl text-sm font-bold border border-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all [color-scheme:dark]"
                    />
                  </div>
                </div>

                {/* Auto-Calculated Fiat Amount */}
                <div className="pt-2 flex justify-between items-center">
                  <span className="text-xs text-slate-500 font-semibold">Calculated Amount</span>
                  <span className="font-black text-lg text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.3)]">
                    ₹{(finalTotal * ((Number(ms.percentage) || 0) / 100)).toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* ADD MILESTONE BUTTON */}
      <motion.button 
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={addMilestone}
        className="mt-6 w-full py-4 border-2 border-dashed border-indigo-500/30 text-indigo-300 rounded-2xl text-sm font-black uppercase tracking-widest hover:bg-indigo-500/10 hover:border-indigo-400 transition-all flex justify-center items-center gap-2 relative z-10"
      >
        <FaPlus /> Add Milestone
      </motion.button>

    </div>
  );
};

export default PaymentSchedule;