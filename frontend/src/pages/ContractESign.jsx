import React, { useState, useEffect } from "react";
import MainLayout from "../layout/MainLayout";
import { motion } from "framer-motion";
import { FaPaperPlane, FaFileContract, FaSignature } from "react-icons/fa";

function ContractAndESignScreen({ quoteData }) {

  const [status, setStatus] = useState("Draft");
  const [selectedTemplate, setSelectedTemplate] = useState("standard-service");
  const [contractBody, setContractBody] = useState("");
  const [clientSignature, setClientSignature] = useState("");
  const [companySignature, setCompanySignature] = useState("");
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    const mockQuoteData = quoteData || {
      clientName: "Acme Corp",
      totalAmount: "₹12,50,000",
      services: "Web Development & Hosting",
      dateAccepted: new Date().toLocaleDateString(),
    };

    generateContractFromTemplate(selectedTemplate, mockQuoteData);
  }, [selectedTemplate, quoteData]);

  const generateContractFromTemplate = (template, data) => {

    let newBody = `This Contract is entered into by and between Your Company and ${data.clientName}.\n\n`;
    newBody += `Services: ${data.services}\n`;
    newBody += `Total Compensation: ${data.totalAmount}\n\n`;
    newBody += `Terms & Conditions:\n1. Payment due within 30 days.\n2. Work starts after contract signing.`;

    setContractBody(newBody);

  };

  const handleSendToESign = async () => {

    setIsSending(true);

    try {

      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("Sent for Signature");

    } catch (err) {

      console.error(err);

    } finally {

      setIsSending(false);

    }

  };

  const simulateProviderWebhook = () => {

    setStatus("Signed");
    setClientSignature("Client Signed");

  };

  return (

    <MainLayout>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-8"
      >

        {/* HEADER */}

        <div className="flex justify-between items-center">

          <div>

            <h1 className="text-2xl font-semibold text-gray-800 flex items-center gap-3">
              <FaFileContract className="text-indigo-600" />
              Contract & E-Sign
            </h1>

            <p className="text-sm text-gray-500 mt-1">
              Convert quotation into a legally binding agreement
            </p>

          </div>

          <span
            className={`px-4 py-2 rounded-lg text-sm font-medium border shadow-sm
            ${
              status === "Draft"
                ? "bg-slate-100 text-slate-600 border-slate-200"
                : status === "Sent for Signature"
                ? "bg-yellow-100 text-yellow-700 border-yellow-200"
                : "bg-green-100 text-green-700 border-green-200"
            }`}
          >
            {status}
          </span>

        </div>

        {/* GRID */}

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

          {/* CONTRACT EDITOR */}

          <motion.div
            whileHover={{ y: -4 }}
            className="xl:col-span-2 bg-gradient-to-br from-white to-indigo-50 border border-gray-200 rounded-xl shadow-md p-6 transition"
          >

            <h3 className="font-semibold text-gray-700 mb-5 flex items-center gap-2">
              <FaFileContract className="text-indigo-500" />
              Contract Editor
            </h3>

            {/* Template */}

            <div className="mb-5">

              <label className="block text-sm font-medium mb-2 text-gray-600">
                Contract Template
              </label>

              <select
                value={selectedTemplate}
                onChange={(e) => setSelectedTemplate(e.target.value)}
                disabled={status !== "Draft"}
                className="w-full border border-gray-200 rounded-lg p-3 bg-white focus:ring-2 focus:ring-indigo-500 outline-none"
              >

                <option value="standard-service">
                  Standard Service Agreement
                </option>

                <option value="retainer">
                  Monthly Retainer Agreement
                </option>

                <option value="nda">
                  NDA Agreement
                </option>

              </select>

            </div>

            {/* Editor */}

            <textarea
              value={contractBody}
              onChange={(e) => setContractBody(e.target.value)}
              disabled={status !== "Draft"}
              className="w-full h-96 border border-gray-200 rounded-lg p-4 text-sm font-mono bg-white focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
            />

            <p className="text-xs text-gray-400 mt-2">
              Contract auto-generated from quotation.
            </p>

          </motion.div>

          {/* SIDEBAR */}

          <div className="space-y-6">

            {/* SIGNATURE CARD */}

            <motion.div
              whileHover={{ y: -4 }}
              className="bg-gradient-to-br from-white to-indigo-50 border border-gray-200 rounded-xl shadow-md p-6"
            >

              <h3 className="font-semibold text-gray-700 mb-4 flex items-center gap-2">
                <FaSignature className="text-indigo-500" />
                Signatures
              </h3>

              <div className="space-y-4">

                <div>

                  <label className="text-sm font-medium text-gray-600">
                    Company Representative
                  </label>

                  <input
                    type="text"
                    placeholder="Type name to sign"
                    value={companySignature}
                    onChange={(e) =>
                      setCompanySignature(e.target.value)
                    }
                    className="w-full border border-gray-200 rounded-lg p-3 mt-1 focus:ring-2 focus:ring-indigo-500 outline-none"
                  />

                </div>

                <div>

                  <label className="text-sm font-medium text-gray-600">
                    Client Signature
                  </label>

                  <input
                    type="text"
                    placeholder="Waiting for client..."
                    value={clientSignature}
                    readOnly
                    className="w-full border border-gray-200 rounded-lg p-3 mt-1 bg-gray-100 text-gray-400"
                  />

                </div>

              </div>

            </motion.div>

            {/* ACTION CARD */}

            <motion.div
              whileHover={{ y: -4 }}
              className="bg-gradient-to-br from-white to-indigo-50 border border-gray-200 rounded-xl shadow-md p-6"
            >

              <h3 className="font-semibold text-gray-700 mb-4">
                Actions
              </h3>

              <button
                onClick={handleSendToESign}
                disabled={status !== "Draft" || isSending}
                className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg text-white font-medium transition shadow-md
                ${
                  status !== "Draft"
                    ? "bg-indigo-300 cursor-not-allowed"
                    : "bg-gradient-to-r from-indigo-600 to-blue-600 hover:scale-[1.02]"
                }`}
              >

                <FaPaperPlane />

                {isSending ? "Sending..." : "Send for Signature"}

              </button>

              {status === "Sent for Signature" && (

                <button
                  onClick={simulateProviderWebhook}
                  className="mt-4 w-full py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm transition"
                >
                  Simulate Client Signed
                </button>

              )}

            </motion.div>

          </div>

        </div>

      </motion.div>

    </MainLayout>

  );

}

export default ContractAndESignScreen;