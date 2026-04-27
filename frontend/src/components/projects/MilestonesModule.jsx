import { useState } from "react";
import { motion } from "framer-motion";
import {
  Plus,
  CheckCircle,
  Calendar,
  TrendingUp,
  Target
} from "lucide-react";

export default function MilestonesModule(){

/*
|--------------------------------------------------------------------------
| STATE
|--------------------------------------------------------------------------
*/

const [milestones,setMilestones] = useState([
{
id:1,
title:"Design Phase",
progress:60,
date:"2026-04-25",
notes:"Initial layout completed",
status:"In Progress"
}
]);

const [showForm,setShowForm] = useState(false);

const [form,setForm] = useState({
title:"",
progress:0,
date:"",
notes:"",
status:"Not Started"
});

/*
|--------------------------------------------------------------------------
| ADD
|--------------------------------------------------------------------------
*/

const addMilestone = ()=>{
if(!form.title) return;

setMilestones([
...milestones,
{...form,id:Date.now()}
]);

setShowForm(false);

setForm({
title:"",
progress:0,
date:"",
notes:"",
status:"Not Started"
});
};

/*
|--------------------------------------------------------------------------
| COMPLETE
|--------------------------------------------------------------------------
*/

const markComplete = (id)=>{
setMilestones(milestones.map(m =>
m.id === id ? {...m,status:"Completed",progress:100} : m
));
};

/*
|--------------------------------------------------------------------------
| STATUS STYLE
|--------------------------------------------------------------------------
*/

const statusStyle = (status)=>{
switch(status){
case "Completed":
return "bg-green-100 text-green-600 border-green-200";
case "In Progress":
return "bg-blue-100 text-blue-600 border-blue-200";
default:
return "bg-gray-100 text-gray-600 border-gray-200";
}
};

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

<div className="absolute -top-24 right-1/3 w-[450px] h-[450px] bg-purple-300/20 blur-[140px] rounded-full"></div>

<div className="relative space-y-6">

{/* ================= HEADER ================= */}

<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

<div className="flex items-center gap-3">

<div className="p-2 rounded-xl bg-indigo-100 text-indigo-600 shadow-sm">
<Target size={18}/>
</div>

<div>
<h3 className="font-semibold text-gray-800 text-lg">
Milestones & Progress
</h3>
<p className="text-xs text-gray-500">
Track project achievements and completion stages
</p>
</div>

</div>

<button
onClick={()=>setShowForm(!showForm)}
className="
flex items-center gap-2
bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500
text-white px-4 py-2 rounded-xl text-sm shadow-lg
hover:scale-[1.03] transition
"
>
<Plus size={14}/> Add Milestone
</button>

</div>


{/* ================= FORM ================= */}

{showForm && (

<motion.div
initial={{opacity:0,y:-10}}
animate={{opacity:1,y:0}}
className="
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4
rounded-2xl border border-indigo-200
bg-gradient-to-br from-white via-indigo-50/60 to-purple-50/60
p-5 shadow-xl
"
>

<input
placeholder="Milestone Title"
className="input"
onChange={(e)=>setForm({...form,title:e.target.value})}
/>

<input
type="number"
placeholder="Progress %"
className="input"
onChange={(e)=>setForm({...form,progress:e.target.value})}
/>

<input
type="date"
className="input"
onChange={(e)=>setForm({...form,date:e.target.value})}
/>

<textarea
placeholder="Notes"
className="input col-span-full"
onChange={(e)=>setForm({...form,notes:e.target.value})}
/>

<button
onClick={addMilestone}
className="
col-span-full
bg-gradient-to-r from-indigo-600 to-purple-600
text-white py-2 rounded-xl
shadow hover:scale-[1.02] transition
"
>
Save Milestone
</button>

</motion.div>

)}


{/* ================= LIST ================= */}

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

{milestones.map((m,i)=>(

<motion.div
key={m.id}
initial={{opacity:0,y:10}}
animate={{opacity:1,y:0}}
transition={{delay:i*0.05}}
whileHover={{y:-5,scale:1.01}}
className="
group
relative
p-[1.5px]
rounded-2xl
bg-gradient-to-br from-indigo-200/30 to-purple-200/30
"
>

{/* HOVER GLOW */}

<div className="
absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
bg-gradient-to-br from-indigo-400 to-purple-400
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
space-y-4
">

{/* TOP */}

<div className="flex justify-between items-center">

<h4 className="font-semibold text-gray-800">
{m.title}
</h4>

<span className={`text-xs px-3 py-1 rounded-full border ${statusStyle(m.status)}`}>
{m.status}
</span>

</div>

{/* PROGRESS */}

<div>

<div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">

<motion.div
initial={{width:0}}
animate={{width:`${m.progress}%`}}
transition={{duration:.8}}
className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
/>

</div>

<div className="flex justify-between text-xs text-gray-500 mt-1">

<span>{m.progress}% Complete</span>

<span className="flex items-center gap-1">
<TrendingUp size={12}/> Progress
</span>

</div>

</div>

{/* DETAILS */}

<div className="text-xs text-gray-500">

<p className="flex items-center gap-1">
<Calendar size={12}/> {m.date}
</p>

</div>

{/* NOTES */}

{m.notes && (
<p className="text-xs text-gray-600">
{m.notes}
</p>
)}

{/* ACTION */}

{m.status !== "Completed" && (

<div className="flex justify-end">

<button
onClick={()=>markComplete(m.id)}
className="
text-green-600 flex items-center gap-1 text-sm font-medium
hover:scale-105 transition
"
>
<CheckCircle size={14}/> Mark Complete
</button>

</div>

)}

</div>

</motion.div>

))}

</div>

</div>

</motion.div>

)
}