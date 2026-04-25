import { motion } from "framer-motion";
import {
  BarChart3,
  Percent,
  Layers
} from "lucide-react";

export default function ViewToggle({ value, onChange }) {

  const options = [
    {
      label: "Value",
      key: "value",
      icon: BarChart3
    },
    {
      label: "%",
      key: "percentage",
      icon: Percent
    },
    {
      label: "Both",
      key: "both",
      icon: Layers
    }
  ];

  return (

    <div className="
    flex items-center
    bg-white/70 backdrop-blur
    border border-indigo-200
    rounded-xl p-1
    shadow-sm
    ">

      {options.map((opt, i) => {

        const Icon = opt.icon;
        const active = value === opt.key;

        return (

          <motion.button
            key={opt.key}
            onClick={() => onChange(opt.key)}
            whileTap={{ scale: 0.95 }}
            className={`
            relative
            flex items-center gap-1.5
            px-3 py-1.5
            text-xs md:text-sm
            rounded-lg
            transition
            ${active
              ? "text-white"
              : "text-gray-600 hover:text-indigo-600"}
            `}
          >

            {/* ACTIVE BACKGROUND */}

            {active && (
              <motion.div
                layoutId="activeToggle"
                className="
                absolute inset-0
                rounded-lg
                bg-gradient-to-r from-indigo-500 to-purple-500
                shadow-md
                "
              />
            )}

            {/* ICON */}

            <Icon
              size={14}
              className={`
              relative z-10
              ${active ? "text-white" : ""}
              `}
            />

            {/* LABEL */}

            <span className="relative z-10">
              {opt.label}
            </span>

          </motion.button>

        );

      })}

    </div>

  );
}