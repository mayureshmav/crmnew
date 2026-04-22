import { motion } from "framer-motion";
import {
CheckSquare,
Clock,
AlertCircle,
Circle,
CheckCircle2
} from "lucide-react";
import { useState } from "react";

export default function TasksWidget(){

/*
|--------------------------------------------------------------------------
| STATE
|--------------------------------------------------------------------------
*/

const [tasks,setTasks] = useState([
{
id:1,
title:"Follow up with Rahul",
priority:"High",
due:"Today 3 PM",
completed:false
},
{
id:2,
title:"Prepare quotation",
priority:"Medium",
due:"Today 6 PM",
completed:false
},
{
id:3,
title:"Client meeting",
priority:"High",
due:"Tomorrow",
completed:true
}
]);

/*
|--------------------------------------------------------------------------
| HANDLERS
|--------------------------------------------------------------------------
*/

const toggleTask = (id)=>{
setTasks(prev =>
prev.map(task =>
task.id === id ? {...task, completed:!task.completed} : task
)
);
};

/*
|--------------------------------------------------------------------------
| HELPERS
|--------------------------------------------------------------------------
*/

const getPriorityStyle = (priority)=>{

switch(priority){
case "High":
return "bg-red-100 text-red-600";
case "Medium":
return "bg-yellow-100 text-yellow-600";
default:
return "bg-blue-100 text-blue-600";
}

};

const completedCount = tasks.filter(t=>t.completed).length;
const progress = (completedCount / tasks.length) * 100;

/*
|--------------------------------------------------------------------------
| LAYOUT
|--------------------------------------------------------------------------
*/

return(

<motion.div
initial={{opacity:0,y:10}}
animate={{opacity:1,y:0}}
transition={{duration:.4}}
className="
relative
rounded-2xl
border border-emerald-200
bg-gradient-to-br from-white via-emerald-50 to-teal-50
shadow-md
p-5
space-y-5
"
>

{/* Glow */}

<div className="absolute -top-16 -right-16 w-60 h-60 bg-emerald-300/20 blur-3xl rounded-full"></div>

<div className="relative space-y-5">

{/* HEADER */}

<div className="flex items-center justify-between">

<div className="flex items-center gap-2">

<div className="p-2 rounded-lg bg-emerald-100 text-emerald-600">
<CheckSquare size={16}/>
</div>

<h3 className="font-semibold text-gray-800">
My Tasks
</h3>

</div>

<span className="text-xs text-emerald-600 font-medium">
{completedCount}/{tasks.length} Done
</span>

</div>

{/* PROGRESS BAR */}

<div>

<div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">

<motion.div
initial={{width:0}}
animate={{width:`${progress}%`}}
transition={{duration:.5}}
className="h-2 bg-gradient-to-r from-emerald-500 to-teal-500"
/>

</div>

</div>

{/* TASK LIST */}

<div className="space-y-3">

{tasks.map((task)=>{

return(

<motion.div
key={task.id}
layout
whileHover={{y:-3}}
className="
flex items-center justify-between
bg-white/80 backdrop-blur
border border-gray-200
rounded-xl
p-3
shadow-sm
"
>

{/* LEFT */}

<div className="flex items-center gap-3">

<button onClick={()=>toggleTask(task.id)}>

{task.completed ? (
<CheckCircle2 className="text-emerald-500" size={18}/>
) : (
<Circle className="text-gray-400" size={18}/>
)}

</button>

<div>

<p className={`
text-sm font-medium
${task.completed ? "line-through text-gray-400" : "text-gray-800"}
`}>
{task.title}
</p>

<div className="flex items-center gap-2 text-xs text-gray-500 mt-1">

<Clock size={12}/>
{task.due}

</div>

</div>

</div>

{/* RIGHT */}

<div className="flex items-center gap-2">

<span className={`
px-2 py-1 rounded-full text-xs font-medium
${getPriorityStyle(task.priority)}
`}>
{task.priority}
</span>

{task.priority === "High" && !task.completed && (
<AlertCircle size={14} className="text-red-500"/>
)}

</div>

</motion.div>

)

})}

</div>

{/* FOOTER */}

<div className="
flex items-center justify-between
text-xs text-gray-500
pt-2 border-t
">

<span>Stay productive 🚀</span>

<span className="text-emerald-600 font-medium cursor-pointer">
Manage →
</span>

</div>

</div>

</motion.div>

)

}