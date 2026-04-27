import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, User, Filter, Activity } from "lucide-react";

export default function AuditLogModule(){

/*
|--------------------------------------------------------------------------
| STATE
|--------------------------------------------------------------------------
*/

const [logs] = useState([
{
id:1,
user:"Amit",
action:"Updated Task",
field:"Status",
oldValue:"In Progress",
newValue:"Completed",
time:"2026-04-26 10:30"
},
{
id:2,
user:"Rohit",
action:"Created Expense",
field:"Amount",
oldValue:"-",
newValue:"₹50000",
time:"2026-04-25 15:10"
}
]);

const [filter,setFilter] = useState("All");

/*
|--------------------------------------------------------------------------
| FILTER
|--------------------------------------------------------------------------
*/

const filteredLogs = logs.filter(l =>
filter === "All" ? true : l.user === filter
);

/*
|--------------------------------------------------------------------------
| UI
|--------------------------------------------------------------------------
*/

return(

<motion.div
initial={{opacity:0,y:10}}
animate={{opacity:1,y:0}}
className="relative space-y-8"
>

{/* 🌈 GLOBAL GLOW */}

<div className="absolute -top-28 left-1/3 w-[500px] h-[500px] bg-indigo-300/20 blur-[140px] rounded-full"></div>

<div className="relative space-y-6">

{/* ================= HEADER ================= */}

<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

<div className="flex items-center gap-3">

<div className="p-2 rounded-xl bg-indigo-100 text-indigo-600 shadow-sm">
<Activity size={18}/>
</div>

<div>
<h3 className="font-semibold text-gray-800 text-lg">
Audit Log / Change History
</h3>
<p className="text-xs text-gray-500">
Track every system change with full transparency
</p>
</div>

</div>

{/* FILTER */}

<div className="flex items-center gap-2">

<Filter size={14} className="text-gray-400"/>

<select
value={filter}
onChange={(e)=>setFilter(e.target.value)}
className="
px-3 py-1.5 text-sm rounded-lg
border border-gray-200
bg-white shadow-sm
focus:ring-2 focus:ring-indigo-500
"
>
<option>All</option>
<option>Amit</option>
<option>Rohit</option>
</select>

</div>

</div>


{/* ================= TIMELINE ================= */}

<div className="relative">

{/* LINE */}

<div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-indigo-200 to-purple-200"></div>

<div className="space-y-6">

{filteredLogs.map((log,i)=>(

<motion.div
key={log.id}
initial={{opacity:0,y:10}}
animate={{opacity:1,y:0}}
transition={{delay:i*0.05}}
className="relative pl-12"
>

{/* DOT */}

<div className="
absolute left-[6px] top-2 w-3 h-3 rounded-full
bg-gradient-to-br from-indigo-500 to-purple-500
shadow
"></div>

{/* CARD */}

<motion.div
whileHover={{y:-4,scale:1.01}}
className="
group
relative
p-[1px]
rounded-2xl
bg-gradient-to-br from-indigo-200/30 to-purple-200/30
"
>

{/* GLOW */}

<div className="
absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
bg-gradient-to-br from-indigo-400 to-purple-400
blur-xl transition duration-500
"></div>

{/* CONTENT */}

<div className="
relative
bg-white/80 backdrop-blur
border border-gray-200
rounded-2xl
p-5
shadow-md
space-y-3
">

{/* TOP */}

<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">

<div className="flex items-center gap-2 font-medium text-gray-800">

<div className="p-1.5 rounded-md bg-gray-100">
<User size={12}/>
</div>

{log.user}

</div>

<div className="flex items-center gap-1 text-xs text-gray-500">

<Clock size={12}/>
{log.time}

</div>

</div>

{/* ACTION */}

<p className="text-sm text-gray-700 font-medium">
{log.action}
</p>

{/* CHANGE BLOCK */}

<div className="
text-xs
bg-gray-50
border border-gray-100
rounded-lg
p-3
space-y-1
">

<p>
<b>Field:</b> {log.field}
</p>

<p className="flex items-center gap-1 flex-wrap">

<b>Change:</b>

<span className="text-red-500 line-through">
{log.oldValue}
</span>

<span className="text-gray-400">→</span>

<span className="text-green-600 font-medium">
{log.newValue}
</span>

</p>

</div>

</div>

</motion.div>

</motion.div>

))}

</div>

</div>

</div>

</motion.div>

)
}