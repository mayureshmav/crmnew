import { motion } from "framer-motion";
import {
  Download,
  FileText,
  Image,
  ChevronDown
} from "lucide-react";
import { useState } from "react";

export default function ExportButton({ onExport }) {

  const [open, setOpen] = useState(false);

  const options = [
    {
      label: "Export Chart",
      icon: Image,
      type: "chart"
    },
    {
      label: "Export Data",
      icon: FileText,
      type: "data"
    }
  ];

  return (

    <div className="relative">

      {/* 🌈 BUTTON */}

      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setOpen(!open)}
        className="
        flex items-center gap-2
        px-4 py-2
        rounded-xl
        bg-gradient-to-r from-indigo-500 to-purple-500
        text-white
        shadow-md hover:shadow-lg
        transition
        text-sm font-medium
        "
      >

        <Download size={16} />

        Export

        <ChevronDown size={14} className="opacity-80" />

      </motion.button>


      {/* ================= DROPDOWN ================= */}

      {open && (

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="
          absolute right-0 mt-2 w-44 z-50
          rounded-xl
          bg-gradient-to-br from-white via-indigo-50/40 to-purple-50/40
          border border-gray-200
          shadow-xl
          p-2
          space-y-1
          "
        >

          {options.map((opt,i)=>{

            const Icon = opt.icon;

            return(

              <motion.div
                key={opt.type}
                whileHover={{ scale: 1.02 }}
                onClick={() => {
                  onExport?.(opt.type);
                  setOpen(false);
                }}
                className="
                flex items-center gap-2
                px-3 py-2 rounded-lg
                text-sm cursor-pointer
                text-gray-700
                hover:bg-indigo-100 hover:text-indigo-600
                transition
                "
              >

                <Icon size={16} />

                {opt.label}

              </motion.div>

            )

          })}

        </motion.div>

      )}

    </div>

  );
}