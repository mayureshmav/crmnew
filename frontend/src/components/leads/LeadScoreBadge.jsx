import { motion } from "framer-motion";
import { useMemo } from "react";

const scoreConfig = {
  Hot: {
    gradient: "from-red-500 via-pink-500 to-orange-400",
    glow: "shadow-red-400/40",
    label: "Hot Lead",
  },
  Warm: {
    gradient: "from-yellow-400 via-amber-400 to-orange-400",
    glow: "shadow-yellow-400/40",
    label: "Warm Lead",
  },
  Cold: {
    gradient: "from-blue-500 via-indigo-500 to-purple-500",
    glow: "shadow-indigo-400/40",
    label: "Cold Lead",
  },
};

const badgeVariants = {
  initial: {
    scale: 0.9,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.08,
    transition: {
      duration: 0.2,
    },
  },
};

export default function LeadScoreBadge({ score = "Cold" }) {

  const config = useMemo(() => {
    return scoreConfig[score] || scoreConfig.Cold;
  }, [score]);

  return (
    <motion.div
      variants={badgeVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="relative inline-flex items-center"
    >
      <div
        className={`
        relative
        px-3
        py-[5px]
        rounded-full
        text-[11px]
        font-semibold
        text-white
        bg-gradient-to-r
        ${config.gradient}
        shadow-lg
        ${config.glow}
        backdrop-blur-md
        tracking-wide
        cursor-default
        transition-all
        duration-300
        `}
      >
        {score}
      </div>

      <div
        className={`
        absolute
        inset-0
        rounded-full
        blur-md
        opacity-50
        bg-gradient-to-r
        ${config.gradient}
        -z-10
        `}
      />
    </motion.div>
  );
}