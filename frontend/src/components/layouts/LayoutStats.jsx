import { motion } from "framer-motion";
import {
  FaDraftingCompass,
  FaClock,
  FaCheckCircle
} from "react-icons/fa";

export default function LayoutStats({ layouts }) {

  const total = layouts.length;
  const approved = layouts.filter(l => l.status === "Approved").length;
  const pending = total - approved;

  const cards = [
    {
      label: "Total Layouts",
      value: total,
      icon: FaDraftingCompass,
      borderGradient: "from-indigo-500 via-purple-500 to-indigo-500",
      bgGradient: "from-indigo-50 via-white to-indigo-100",
      iconBg: "bg-indigo-600 text-white"
    },
    {
      label: "Pending Review",
      value: pending,
      icon: FaClock,
      borderGradient: "from-yellow-400 via-amber-400 to-yellow-500",
      bgGradient: "from-yellow-50 via-white to-amber-100",
      iconBg: "bg-yellow-500 text-white"
    },
    {
      label: "Approved Layouts",
      value: approved,
      icon: FaCheckCircle,
      borderGradient: "from-emerald-500 via-teal-500 to-emerald-500",
      bgGradient: "from-emerald-50 via-white to-teal-100",
      iconBg: "bg-emerald-600 text-white"
    }
  ];

  return (

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

      {cards.map((c, i) => {

        const Icon = c.icon;

        return (

          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className={`
            p-[1.5px]
            rounded-2xl
            bg-gradient-to-r ${c.borderGradient}
            shadow-[0_8px_30px_rgba(0,0,0,0.08)]
            `}
          >

            {/* INNER CARD */}

            <div className={`
            relative
            rounded-2xl
            p-5 md:p-6
            bg-gradient-to-br ${c.bgGradient}
            border border-white/60
            backdrop-blur
            overflow-hidden
            transition
            `}>

              {/* ✨ LIGHT REFLECTION */}

              <div className="absolute -top-10 -right-10 w-36 h-36 bg-white/40 blur-3xl rounded-full"></div>

              {/* 🔥 CONTENT */}

              <div className="relative flex items-center gap-4">

                {/* ICON */}

                <div className={`
                p-3 rounded-xl
                ${c.iconBg}
                shadow-lg
                `}>
                  <Icon size={18} />
                </div>

                {/* TEXT */}

                <div>

                  <p className="text-sm text-gray-500">
                    {c.label}
                  </p>

                  <h2 className="text-xl md:text-2xl font-semibold text-gray-800 tracking-tight">
                    {c.value}
                  </h2>

                </div>

              </div>

            </div>

          </motion.div>

        );

      })}

    </div>

  );
}