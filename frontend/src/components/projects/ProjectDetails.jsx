import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Layers } from "lucide-react";

import TasksModule from "./TasksModule";
import ExpensesModule from "./ExpensesModule";
import MilestonesModule from "./MilestonesModule";
import BudgetModule from "./BudgetModule";
import AuditLogModule from "./AuditLogModule";

export default function ProjectDetails({ project, onBack }) {

const [tab,setTab] = useState("tasks");

const tabs = ["tasks","expenses","milestones","history"];

return(

<motion.div
initial={{opacity:0,y:10}}
animate={{opacity:1,y:0}}
transition={{duration:.4}}
className="relative space-y-6"
>

{/* 🌈 GLOBAL BACKGROUND GLOW */}

<div className="absolute -top-24 left-1/3 w-[500px] h-[500px] bg-indigo-300/20 blur-[120px] rounded-full"></div>

<div className="relative space-y-6">

{/* ================= HEADER ================= */}

<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

<div className="flex items-center gap-3">

<button
onClick={onBack}
className="
flex items-center gap-1
text-sm text-indigo-600
hover:text-indigo-800 transition
"
>
<ArrowLeft size={16}/>
Back
</button>

<div className="h-5 w-[1px] bg-gray-300 hidden md:block"></div>

<h1 className="text-lg md:text-xl font-semibold text-gray-800">
{project.name}
</h1>

</div>

</div>


{/* ================= PROJECT INFO ================= */}

<div className="
grid grid-cols-2 md:grid-cols-4 gap-4
">

{[
{label:"Customer",value:project.customer},
{label:"Project Manager",value:project.pm},
{label:"Status",value:project.status},
{label:"Value",value:project.value}
].map((item,i)=>(

<motion.div
key={i}
whileHover={{y:-3}}
className="
relative
rounded-xl
border border-indigo-200
bg-gradient-to-br from-white via-indigo-50 to-purple-50
p-4
shadow-sm
"
>

<p className="text-xs text-gray-500">
{item.label}
</p>

<p className="text-sm font-semibold text-gray-800">
{item.value}
</p>

</motion.div>

))}

</div>


{/* ================= TABS ================= */}

<div className="flex flex-wrap gap-2 border-b border-gray-200 pb-2">

{tabs.map((t)=>(

<button
key={t}
onClick={()=>setTab(t)}
className={`
px-4 py-1.5 text-sm rounded-lg transition-all
capitalize
${tab===t
? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow"
: "text-gray-500 hover:bg-gray-100"}
`}
>
{t}
</button>

))}

</div>


{/* ================= CONTENT ================= */}

<div className="
relative
rounded-2xl
border border-indigo-200
bg-gradient-to-br from-white via-indigo-50/40 to-purple-50/40
p-5
shadow-lg
min-h-[200px]
">

{/* INNER GLOW */}

<div className="absolute -top-16 -right-16 w-64 h-64 bg-indigo-300/20 blur-3xl rounded-full"></div>

<div className="relative">

{/* 🔹 TASKS */}

{tab === "tasks" && <TasksModule />}



{/* 🔹 EXPENSES */}

{tab === "expenses" && <ExpensesModule />}

{/* 🔹 MILESTONES */}

{tab === "milestones" && <MilestonesModule />}

{/* 🔹 BUDGET */}

{tab === "expenses" && (
<>
<BudgetModule/>

</>
)}
{/* 🔹 HISTORY */}
{tab === "history" && <AuditLogModule />}

</div>

</div>

</div>

</motion.div>

)
}