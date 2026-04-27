import { motion } from "framer-motion";
import { AlertTriangle, Clock } from "lucide-react";

export default function DelayPanel({ tasks = [] }) {

/*
|--------------------------------------------------------------------------
| DELAY LOGIC
|--------------------------------------------------------------------------
*/

const today = new Date();

const delayedTasks = tasks.filter(t => {
  if (!t.projEnd) return false;

  const endDate = new Date(t.projEnd);

  return (
    !t.actualEnd &&
    endDate < today
  );
});

/*
|--------------------------------------------------------------------------
| UI
|--------------------------------------------------------------------------
*/

return(

<motion.div
initial={{opacity:0,y:10}}
animate={{opacity:1,y:0}}
className="relative space-y-6"
>

{/* 🌈 GLOBAL RED GLOW */}

<div className="absolute -top-24 right-1/4 w-[400px] h-[400px] bg-red-300/20 blur-[120px] rounded-full"></div>

<div className="relative space-y-5">

{/* ================= HEADER ================= */}

<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

<div className="flex items-center gap-3">

<div className="p-2 rounded-xl bg-red-100 text-red-600 shadow-sm">
<AlertTriangle size={18}/>
</div>

<div>
<h3 className="font-semibold text-gray-800 text-lg">
Delay Alerts
</h3>
<p className="text-xs text-gray-500">
Tasks that missed their planned deadlines
</p>
</div>

</div>

<span className="
text-xs font-medium px-3 py-1 rounded-full
bg-red-100 text-red-600 border border-red-200
">
{delayedTasks.length} Delayed
</span>

</div>


{/* ================= CONTENT ================= */}

{delayedTasks.length === 0 ? (

<motion.div
initial={{opacity:0}}
animate={{opacity:1}}
className="
p-6 rounded-2xl border
bg-gradient-to-br from-white via-indigo-50/40 to-purple-50/40
text-center text-gray-500 shadow-sm
"
>

<p className="text-sm">
No delays detected 🎉
</p>

<p className="text-xs mt-1">
All tasks are on track
</p>

</motion.div>

) : (

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

{delayedTasks.map((t,i)=>(

<motion.div
key={t.id}
initial={{opacity:0,y:10}}
animate={{opacity:1,y:0}}
transition={{delay:i*0.05}}
whileHover={{y:-5,scale:1.01}}
className="
group
relative
p-[1.5px]
rounded-2xl
bg-gradient-to-br from-red-300/30 to-orange-300/30
"
>

{/* HOVER GLOW */}

<div className="
absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
bg-gradient-to-br from-red-500 to-orange-500
blur-xl transition duration-500
"></div>

{/* CARD */}

<div className="
relative
rounded-2xl
bg-white/80 backdrop-blur
border border-gray-200
p-5
shadow-md
space-y-3
">

{/* TOP */}

<div className="flex justify-between items-center">

<h4 className="font-semibold text-gray-800">
{t.name}
</h4>

<span className="
text-xs px-3 py-1 rounded-full
bg-red-100 text-red-600 border border-red-200
">
Delayed
</span>

</div>

{/* DETAILS */}

<div className="text-xs text-gray-500 space-y-1">

<p className="flex items-center gap-1">
<Clock size={12}/> Due: {t.projEnd}
</p>

{t.owner && (
<p>
Owner: {t.owner}
</p>
)}

</div>

{/* WARNING */}

<div className="
text-xs text-red-600 font-medium
bg-red-50 border border-red-100
px-3 py-2 rounded-lg
">
⚠ This task has crossed its deadline and needs attention
</div>

</div>

</motion.div>

))}

</div>

)}

</div>

</motion.div>

)
}