import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaSyncAlt, 
  FaHardHat, 
  FaBoxes, 
  FaTruck, 
  FaMagic, 
  FaPenFancy,
  FaCalculator
} from 'react-icons/fa';

const CostingBreakdown = ({ costItems, setCostItems, isManualEdit, setIsManualEdit, totalAmount }) => {

  // Update item function (US-011)
  const updateCostItem = (id, field, value) => {
    setCostItems(items => items.map(item => 
      item.id === id ? { ...item, [field]: Number(value) || value } : item
    ));
  };

  // Reset function (US-010 & US-011)
  const resetToAuto = () => {
    setIsManualEdit(false);
    // In a real app, this would fetch the original rate master values from your API
    alert("System rates restored from Rate Master (US-010).");
  };

  // Premium Category Styling & Icons
  const getCategoryTheme = (category) => {
    switch(category) {
      case 'Materials': return { icon: FaBoxes, color: 'text-blue-500', bg: 'bg-blue-500/10', border: 'border-blue-500/20' };
      case 'Labour': return { icon: FaHardHat, color: 'text-amber-500', bg: 'bg-amber-500/10', border: 'border-amber-500/20' };
      case 'Overhead': return { icon: FaTruck, color: 'text-purple-500', bg: 'bg-purple-500/10', border: 'border-purple-500/20' };
      default: return { icon: FaCalculator, color: 'text-slate-500', bg: 'bg-slate-500/10', border: 'border-slate-500/20' };
    }
  };

  return (
    <div className="bg-white/60 backdrop-blur-2xl rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/80 p-6 sm:p-8 h-full flex flex-col relative overflow-hidden group">
      
      {/* Subtle Background Glow inside the card */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none" />

      {/* HEADER & CONTROLS */}
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center mb-8 gap-6 relative z-10">
        <div>
          <h3 className="text-2xl font-black text-slate-800 tracking-tight flex items-center gap-3">
            Costing Breakdown 
            {isManualEdit && <span className="px-2.5 py-1 bg-amber-100 text-amber-700 text-[10px] uppercase tracking-widest rounded-lg font-black animate-pulse">Edit Mode Active</span>}
          </h3>
          <p className="text-sm font-semibold text-slate-500 mt-1">
            {isManualEdit ? "Manually overriding auto-generated estimates." : "Powered by automated Rate Master estimations."}
          </p>
        </div>
        
        <div className="flex flex-wrap items-center gap-4">
          {/* US-011: Reset to Auto Button */}
          <AnimatePresence>
            {isManualEdit && (
              <motion.button 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={resetToAuto} 
                className="flex items-center gap-2 text-sm text-slate-500 hover:text-indigo-600 font-bold transition-colors px-4 py-2 rounded-xl hover:bg-indigo-50"
              >
                <FaSyncAlt className="animate-spin-slow" /> Reset to Auto
              </motion.button>
            )}
          </AnimatePresence>
          
          {/* US-010 / US-011: Premium Toggle Switch */}
          <div className="flex items-center bg-slate-100/80 p-1.5 rounded-2xl border border-slate-200/50 backdrop-blur-sm shadow-inner relative">
            <button 
              onClick={() => setIsManualEdit(false)}
              className={`relative z-10 flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${!isManualEdit ? 'text-indigo-700' : 'text-slate-500 hover:text-slate-700'}`}
            >
              <FaMagic className={!isManualEdit ? 'text-indigo-500' : ''} /> Auto-Gen
            </button>
            <button 
              onClick={() => setIsManualEdit(true)}
              className={`relative z-10 flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${isManualEdit ? 'text-amber-700' : 'text-slate-500 hover:text-slate-700'}`}
            >
              <FaPenFancy className={isManualEdit ? 'text-amber-500' : ''} /> Manual
            </button>

            {/* Sliding Pill Animation */}
            <motion.div 
              className="absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-white rounded-xl shadow-[0_2px_8px_rgb(0,0,0,0.08)] pointer-events-none"
              animate={{ x: isManualEdit ? '100%' : '0%' }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              style={{ left: '6px' }}
            />
          </div>
        </div>
      </div>

      {/* FLOATING LEDGER ITEMS */}
      <div className="flex-1 overflow-x-auto pb-4 relative z-10">
        <div className="min-w-[800px]">
          {/* Column Headers */}
          <div className="grid grid-cols-12 gap-4 px-6 py-3 text-[11px] font-black uppercase tracking-widest text-slate-400 mb-2">
            <div className="col-span-3">Category</div>
            <div className="col-span-4">Item Description</div>
            <div className="col-span-1 text-center">Qty</div>
            <div className="col-span-1">Unit</div>
            <div className="col-span-1 text-right">Rate (₹)</div>
            <div className="col-span-2 text-right">Amount (₹)</div>
          </div>

          {/* Rows */}
          <div className="space-y-3">
            <AnimatePresence>
              {costItems.map((item, index) => {
                const theme = getCategoryTheme(item.category);
                const Icon = theme.icon;

                return (
                  <motion.div 
                    key={item.id} 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="grid grid-cols-12 gap-4 items-center px-4 py-3.5 bg-white/50 hover:bg-white rounded-2xl border border-white shadow-[0_4px_15px_rgb(0,0,0,0.02)] transition-all group"
                  >
                    {/* Category Label */}
                    <div className="col-span-3 flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl ${theme.bg} ${theme.color} border ${theme.border}`}>
                        <Icon className="text-sm" />
                      </div>
                      <span className="font-bold text-slate-700">{item.category}</span>
                    </div>

                    {/* Description */}
                    <div className="col-span-4 pr-4">
                      {isManualEdit ? (
                        <input 
                          type="text" 
                          value={item.desc} 
                          onChange={(e) => updateCostItem(item.id, 'desc', e.target.value)} 
                          className="w-full px-3 py-2 bg-white border border-amber-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 rounded-xl outline-none text-slate-700 font-semibold shadow-sm transition-all"
                        />
                      ) : <span className="font-semibold text-slate-600 group-hover:text-slate-900 transition-colors">{item.desc}</span>}
                    </div>

                    {/* Quantity */}
                    <div className="col-span-1">
                      {isManualEdit ? (
                        <input 
                          type="number" 
                          value={item.qty} 
                          onChange={(e) => updateCostItem(item.id, 'qty', e.target.value)} 
                          className="w-full px-2 py-2 text-center bg-white border border-amber-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 rounded-xl outline-none text-slate-700 font-bold shadow-sm transition-all"
                        />
                      ) : <div className="text-center font-bold text-slate-700">{item.qty}</div>}
                    </div>

                    {/* Unit */}
                    <div className="col-span-1 font-semibold text-slate-400">{item.unit}</div>

                    {/* Rate */}
                    <div className="col-span-1">
                      {isManualEdit ? (
                        <input 
                          type="number" 
                          value={item.rate} 
                          onChange={(e) => updateCostItem(item.id, 'rate', e.target.value)} 
                          className="w-full px-2 py-2 text-right bg-white border border-amber-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 rounded-xl outline-none text-slate-700 font-bold shadow-sm transition-all"
                        />
                      ) : <div className="text-right font-bold text-slate-600">{item.rate.toLocaleString()}</div>}
                    </div>

                    {/* Auto-Calculated Amount */}
                    <div className="col-span-2 text-right">
                      <span className="font-black text-slate-800 text-lg">
                        {(item.qty * item.rate).toLocaleString()}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* GRAND TOTAL SUMMARY CARD */}
      <div className="mt-8 pt-6 border-t border-slate-100/60 flex justify-end relative z-10">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="relative overflow-hidden bg-slate-900 text-white p-6 rounded-[2rem] shadow-xl shadow-slate-900/20 w-full sm:w-80"
        >
          {/* Animated Gradient Background inside the total card */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-transparent pointer-events-none" />
          
          <div className="relative z-10 space-y-3">
            <div className="flex justify-between items-center text-slate-400 font-semibold text-sm">
              <span>Subtotal</span>
              <span className="text-white font-bold">₹{totalAmount.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center text-slate-400 font-semibold text-sm">
              <span>Taxes & Contingency (18%)</span>
              <span className="text-white font-bold">₹{(totalAmount * 0.18).toLocaleString()}</span>
            </div>
            
            <div className="h-px w-full bg-slate-700/50 my-4" />
            
            <div className="flex justify-between items-end">
              <span className="text-xs font-black uppercase tracking-widest text-indigo-400 mb-1">Grand Total</span>
              <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300">
                ₹{(totalAmount * 1.18).toLocaleString()}
              </span>
            </div>
          </div>
        </motion.div>
      </div>

    </div>
  );
};

export default CostingBreakdown;