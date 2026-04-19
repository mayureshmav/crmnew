import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

// Importing the modular feature components
import QuotationHeader from './QuotationHeader';
import QuotationActions from './QuotationActions';
import CostingBreakdown from './CostingBreakdown';
import PaymentSchedule from './PaymentSchedule';

const QuotationDetails = ({ quote, onBack }) => {
  // ---------------------------------------------------------
  // 1. SHARED STATE MANAGEMENT
  // ---------------------------------------------------------
  
  // US-015: Version Control State
  const [version, setVersion] = useState(quote?.version || 'v1');
  
  // US-010 & US-011: Costing & Edit Mode State
  const [isManualEdit, setIsManualEdit] = useState(false);
  const [costItems, setCostItems] = useState([
    { id: 1, category: "Materials", desc: "Premium Cement", qty: 50, unit: "Bags", rate: 450 },
    { id: 2, category: "Labour", desc: "Skilled Workers", qty: 10, unit: "Days", rate: 800 },
    { id: 3, category: "Overhead", desc: "Transportation", qty: 1, unit: "Trip", rate: 5000 },
  ]);

  // US-016: Payment Schedule State
  const [milestones, setMilestones] = useState([
    { id: 1, name: "Advance Payment", percentage: 40, dueDate: "2026-04-01" },
    { id: 2, name: "Mid-Project", percentage: 40, dueDate: "2026-05-15" },
    { id: 3, name: "Completion", percentage: 20, dueDate: "2026-06-30" },
  ]);

  // ---------------------------------------------------------
  // 2. DERIVED CALCULATIONS
  // ---------------------------------------------------------
  
  // useMemo ensures we only recalculate the total when costItems actually change
  const totalAmount = useMemo(() => {
    return costItems.reduce((acc, item) => acc + (item.qty * item.rate), 0);
  }, [costItems]);


  // ---------------------------------------------------------
  // 3. PREMIUM ANIMATION ORCHESTRATION
  // ---------------------------------------------------------
  
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        ease: "easeOut"
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 280, damping: 25 } 
    }
  };

  // ---------------------------------------------------------
  // 4. RENDER UI
  // ---------------------------------------------------------
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 lg:space-y-8 relative z-10 w-full"
    >
      {/* Subtle Background Radial Glow for the detail view */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-gradient-to-b from-indigo-500/5 to-transparent blur-[100px] -z-10 pointer-events-none rounded-full" />

      {/* HEADER: Handles Back navigation and US-015 (Version Control) */}
      <motion.div variants={childVariants} className="w-full">
        <QuotationHeader 
          quote={quote} 
          version={version} 
          setVersion={setVersion} 
          onBack={onBack} 
        />
      </motion.div>

      {/* ACTIONS: Handles US-012, US-013, US-014, and US-017 workflows */}
      <motion.div variants={childVariants} className="w-full">
        <QuotationActions />
      </motion.div>

      {/* MAIN CONTENT GRID - Upgraded to a 12-column layout for classic proportions */}
      <motion.div variants={childVariants} className="grid grid-cols-1 xl:grid-cols-12 gap-6 lg:gap-8 items-start pb-12">
        
        {/* LEFT/MAIN SECTION (Takes up 8/12 columns on large screens) */}
        <div className="xl:col-span-8 h-full transition-all duration-300">
          <CostingBreakdown 
            costItems={costItems}
            setCostItems={setCostItems}
            isManualEdit={isManualEdit}
            setIsManualEdit={setIsManualEdit}
            totalAmount={totalAmount}
          />
        </div>

        {/* RIGHT SECTION (Takes up 4/12 columns on large screens) */}
        <div className="xl:col-span-4 h-full transition-all duration-300">
          <PaymentSchedule 
            milestones={milestones}
            setMilestones={setMilestones}
            totalAmount={totalAmount}
          />
        </div>

      </motion.div>
      
    </motion.div>
  );
};

export default QuotationDetails;