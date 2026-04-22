import { FaUpload } from "react-icons/fa";
import { motion } from "framer-motion";

export default function LayoutHeader({ onUpload }) {

return(

<div className="relative">

{/* 🌈 GRADIENT BORDER WRAPPER */}

<div className="
p-[1px]
rounded-2xl
bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400
">

<motion.div
initial={{ opacity: 0, y: -10 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.4 }}
className="
relative
flex flex-col md:flex-row md:items-center md:justify-between
gap-4
p-5 md:p-6
rounded-2xl
bg-gradient-to-br from-white via-indigo-50/70 to-purple-50/70
shadow-md
overflow-hidden
"
>

{/* 🔥 PREMIUM GLOW BACKGROUND */}

<div className="absolute -top-20 -left-20 w-64 h-64 bg-indigo-400/20 blur-[120px] rounded-full"></div>
<div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-400/20 blur-[120px] rounded-full"></div>


{/* ================= LEFT ================= */}

<div className="relative z-10">

<h1 className="text-xl md:text-2xl font-semibold text-gray-800 tracking-tight">
Layouts & Designs
</h1>

<p className="text-sm text-gray-500 mt-1 max-w-md">
Upload approved layouts, manage versions, and track design history across projects.
</p>

</div>


{/* ================= RIGHT ================= */}

<div className="relative z-10 flex items-center gap-3 flex-wrap">

{/* STATUS */}

<div className="
hidden sm:flex items-center gap-2
px-3 py-1.5
rounded-lg
bg-gradient-to-r from-emerald-100 to-teal-100
text-emerald-700
text-xs font-medium
border border-emerald-200
">

<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>

Active

</div>


{/* BUTTON */}

<motion.button
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.96 }}
onClick={onUpload}
className="
relative
flex items-center gap-2
px-4 py-2
rounded-xl
text-white text-sm font-medium
bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600
shadow-lg
hover:shadow-xl
transition
overflow-hidden
"
>

{/* ✨ SHINE EFFECT */}

<span className="
absolute inset-0
bg-white/10 opacity-0 hover:opacity-100
transition duration-300
"></span>

<FaUpload className="relative z-10" />

<span className="relative z-10">
Upload Layout
</span>

</motion.button>

</div>

</motion.div>

</div>

</div>

)
}