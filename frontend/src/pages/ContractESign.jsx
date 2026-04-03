import React, { useState, useEffect } from 'react';
import MainLayout from "../layout/MainLayout";
import { motion } from "framer-motion";

export default function ContractAndESignScreen({ quoteData }) {
  // --- STATE ---
  const [status, setStatus] = useState('Draft');
  const [selectedTemplate, setSelectedTemplate] = useState('standard-service');
  const [contractBody, setContractBody] = useState('');
  const [clientSignature, setClientSignature] = useState('');
  const [companySignature, setCompanySignature] = useState('');
  const [isSending, setIsSending] = useState(false);

  // --- AUTOMATION HOOK 1: Auto-populate from Quote ---
  useEffect(() => {
    const mockQuoteData = quoteData || {
      clientName: "Acme Corp",
      totalAmount: "₹12,50,000", 
      services: "Web Development & Hosting",
      dateAccepted: new Date().toLocaleDateString()
    };

    generateContractFromTemplate(selectedTemplate, mockQuoteData);
  }, [selectedTemplate, quoteData]);

  const generateContractFromTemplate = (template, data) => {
    let newBody = `This Contract is entered into by and between Your Company and ${data.clientName}.\n\n`;
    newBody += `Services to be provided: ${data.services}\n`;
    newBody += `Total Compensation: ${data.totalAmount}\n\n`;
    newBody += `Terms and Conditions:\n1. Payment is due net 30 days.\n2. Work commences upon final signature.`;
    
    setContractBody(newBody);
  };

  // --- AUTOMATION HOOK 2: Send to eSign Provider ---
  const handleSendToESign = async () => {
    setIsSending(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('Sent for Signature');
    } catch (error) {
      console.error("Failed to send contract", error);
    } finally {
      setIsSending(false);
    }
  };

  // --- AUTOMATION HOOK 3: Webhook Simulation (On Signed) ---
  const simulateProviderWebhook = () => {
    setStatus('Signed');
  };

  // --- UI RENDER ---
  return (
    <MainLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-8"
      >
        {/* Header & Status */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">Contract & E-Sign</h1>
            <p className="text-gray-600 text-sm mt-1">Convert Quote #QT-1021 into a binding agreement.</p>
          </div>
          
          <div className={`px-4 py-2 rounded-lg font-medium text-sm shadow-sm border ${
            status === 'Draft' ? 'bg-slate-100 text-slate-600 border-slate-200' : 
            status === 'Sent for Signature' ? 'bg-yellow-100 text-yellow-600 border-yellow-200' : 
            'bg-green-100 text-green-600 border-green-200' 
          }`}>
            {status}
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          
          {/* Main Contract Editor */}
          <div className="xl:col-span-2 bg-white border border-gray-200 rounded-xl shadow-sm p-6">
            <div className="mb-5">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Contract Template</label>
              <select 
                value={selectedTemplate}
                onChange={(e) => setSelectedTemplate(e.target.value)}
                className="w-full border border-gray-200 text-gray-700 rounded-lg shadow-sm p-3 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none transition-all bg-gray-50 hover:bg-white"
                disabled={status !== 'Draft'}
              >
                <option value="standard-service">Standard Service Agreement</option>
                <option value="retainer">Monthly Retainer Agreement</option>
                <option value="nda">Non-Disclosure Agreement</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Contract Body (Editable)</label>
              <textarea 
                value={contractBody}
                onChange={(e) => setContractBody(e.target.value)}
                className="w-full h-96 border border-gray-200 text-gray-700 rounded-lg shadow-sm p-4 font-mono text-sm leading-relaxed focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none transition-all bg-gray-50 hover:bg-white resize-none"
                disabled={status !== 'Draft'}
              />
              <p className="text-xs text-gray-500 mt-2">Auto-populated from accepted quote. Edit as needed before sending.</p>
            </div>
          </div>

          {/* Sidebar: Signatures & Actions */}
          <div className="space-y-6">
            
            {/* Signatures Panel */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
              <h3 className="text-base font-semibold text-gray-800 mb-5 border-b border-gray-200 pb-3">Signatures</h3>
              
              <div className="mb-5">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Company Representative</label>
                <input 
                  type="text" 
                  placeholder="Type name to sign..."
                  value={companySignature}
                  onChange={(e) => setCompanySignature(e.target.value)}
                  className="w-full border border-gray-200 text-gray-700 rounded-lg shadow-sm p-3 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none transition-all bg-gray-50 hover:bg-white"
                  disabled={status === 'Signed'}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Client Signature</label>
                <input 
                  type="text" 
                  placeholder="Pending client e-sign..."
                  value={clientSignature}
                  readOnly
                  className="w-full border border-gray-200 rounded-lg shadow-sm p-3 bg-gray-50 text-gray-400 cursor-not-allowed outline-none"
                />
                {status === 'Sent for Signature' && (
                  <span className="text-xs text-yellow-600 mt-2 flex items-center gap-1 font-medium">
                    ⏳ Awaiting client action...
                  </span>
                )}
              </div>
            </div>

            {/* Integration & Actions Panel */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
              <h3 className="text-base font-semibold text-gray-800 mb-5 border-b border-gray-200 pb-3">Actions</h3>
              
              <button 
                onClick={handleSendToESign}
                disabled={status !== 'Draft' || isSending}
                className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition-all shadow-sm flex justify-center items-center gap-2 ${
                  status !== 'Draft' || isSending 
                    ? 'bg-indigo-300 cursor-not-allowed' 
                    : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-md'
                }`}
              >
                {isSending ? (
                   <>
                     <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                     Sending...
                   </>
                ) : 'Send via eSign Provider'}
              </button>

              {status === 'Sent for Signature' && (
                <div className="mt-5 pt-5 border-t border-gray-200">
                  <p className="text-xs text-gray-500 mb-3 uppercase font-bold tracking-wider">Dev Tool</p>
                  <button 
                    onClick={simulateProviderWebhook}
                    className="w-full py-2.5 px-4 bg-gray-50 text-gray-700 border border-gray-200 rounded-lg font-medium hover:bg-gray-100 transition-colors text-sm"
                  >
                    Simulate "Client Signed"
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>

      </motion.div>
    </MainLayout>
  );
}