import { motion } from "framer-motion";
import { BarChart3, Sparkles } from "lucide-react";

export default function DashboardHeader({
title,
subtitle,
tag = "Live",
actions
}){

return(

<motion.div
initial={{opacity:0,y:-20}}
animate={{opacity:1,y:0}}
transition={{duration:.5}}
className="
relative
overflow-hidden
rounded-2xl
border border-indigo-200
bg-gradient-to-r from-white via-indigo-50 to-purple-50
shadow-md
p-5 md:p-6
"
>

{/* Glow Effect */}

<div className="absolute -top-20 -right-20 w-72 h-72 bg-indigo-300/20 blur-3xl rounded-full"></div>

<div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-4">

{/* LEFT */}

<div className="space-y-1">

<div className="flex items-center gap-2">

<Sparkles size={18} className="text-indigo-500"/>

<h2 className="text-xl md:text-2xl font-bold text-gray-800">
{title}
</h2>

</div>

<p className="text-sm text-gray-500 max-w-xl">
{subtitle}
</p>

</div>

{/* RIGHT */}

<div className="flex items-center gap-3 flex-wrap">

{/* Tag */}

<div className="
flex items-center gap-2
bg-indigo-100 text-indigo-600
px-3 py-1.5
rounded-lg
text-sm font-medium
">

<BarChart3 size={16}/>
{tag}

</div>

{/* Custom Actions */}

{actions}

</div>

</div>

</motion.div>

)

}