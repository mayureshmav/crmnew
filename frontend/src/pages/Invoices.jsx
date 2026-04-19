import MainLayout from "../layout/MainLayout";
import { motion } from "framer-motion";
import { useState } from "react";

// Importing modular components
import InvoiceHeader from "../components/invoices/InvoiceHeader";
import InvoiceKPIs from "../components/invoices/InvoiceKPIs";
import InvoiceTable from "../components/invoices/InvoiceTable";

const Invoices = () => {
  // Global Mock Data
  const [invoices] = useState([
    {
      id: "INV-2026-081", date: "01 Apr 2026", client: "Rahul Sharma", description: "Advance Payment - Phase 1", amount: "₹5,00,000", dueDate: "15 Apr 2026", status: "Paid", receivedDate: "10 Apr 2026", paymentMode: "Bank Transfer"
    },
    {
      id: "INV-2026-082", date: "12 Apr 2026", client: "Neha Singh", description: "Mid-Project Milestone", amount: "₹3,92,000", dueDate: "26 Apr 2026", status: "Unpaid", receivedDate: "-", paymentMode: "-"
    },
    {
      id: "INV-2026-083", date: "20 Mar 2026", client: "Amit Gupta", description: "Final Delivery Handover", amount: "₹1,24,000", dueDate: "05 Apr 2026", status: "Overdue", receivedDate: "-", paymentMode: "-"
    },
    {
      id: "INV-2026-084", date: "Auto-Generated", client: "Priya Kapoor", description: "Milestone 2 Completed", amount: "₹2,50,000", dueDate: "TBD", status: "Draft", receivedDate: "-", paymentMode: "-"
    }
  ]);

  // ADVANCED ANIMATION ORCHESTRATION
  // Using custom spring physics for a premium, heavy, and smooth feel
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.08,
        delayChildren: 0.1,
        ease: [0.25, 0.4, 0.25, 1] // Custom cubic bezier for buttery smoothness
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
    show: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { type: "spring", stiffness: 200, damping: 20, mass: 0.8 } 
    }
  };

  return (
    <MainLayout>
      {/* PREMIUM DYNAMIC BACKGROUND 
        Matches the screenshot's frosty, cool-toned indigo/blue aesthetic 
      */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-gradient-to-br from-[#e8edfcf0] to-[#dfe5f8]">
        {/* Top left bright highlight to create depth */}
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-white/70 blur-[120px]" />
        
        {/* Subtle deep indigo mesh on the right to balance the layout */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-400/15 blur-[150px] mix-blend-multiply" />
      </div>

      {/* MAIN CONTENT WRAPPER
        Full responsive fluid padding: tight on mobile, expanding beautifully on 4k screens 
      */}
      <motion.div 
        variants={containerVariants} 
        initial="hidden" 
        animate="show" 
        className="max-w-[1600px] mx-auto space-y-8 sm:space-y-10 relative z-10 px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12"
      >
        {/* Header Section */}
        <InvoiceHeader itemVariants={itemVariants} />

        {/* Top Level Financial Metrics */}
        <InvoiceKPIs containerVariants={containerVariants} itemVariants={itemVariants} />

        {/* Data Table & Filtering Interface */}
        <InvoiceTable invoices={invoices} itemVariants={itemVariants} />
        
      </motion.div>
    </MainLayout>
  );
};

export default Invoices;