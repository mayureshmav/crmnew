import { useState } from "react";
import { motion } from "framer-motion";
import {
  Plus,
  Calendar,
  User,
  Layers,
  Trash2,
  Pencil
} from "lucide-react";

import DelayPanel from "./DelayPanel";

export default function TasksModule(){

/*
|--------------------------------------------------------------------------
| STATE
|--------------------------------------------------------------------------
*/

const [tasks,setTasks] = useState([
{
id:1,
name:"Design Planning",
owner:"Rohit",
status:"In Progress",
projStart:"2026-04-01",
projEnd:"2026-04-10",
notes:"Initial concept phase",
dependency:"None"
}
]);

const [showForm,setShowForm] = useState(false);
const [editingTask,setEditingTask] = useState(null);

const [newTask,setNewTask] = useState({
name:"",
owner:"",
status:"Not Started",
projStart:"",
projEnd:"",
notes:"",
dependency:""
});

/*
|--------------------------------------------------------------------------
| ADD / UPDATE TASK
|--------------------------------------------------------------------------
*/

const saveTask = ()=>{

if(!newTask.name) return;

if(editingTask){
  // UPDATE
  setTasks(tasks.map(t =>
    t.id === editingTask.id ? {...t,...newTask} : t
  ));
}else{
  // ADD
  setTasks([
    ...tasks,
    { ...newTask, id: Date.now() }
  ]);
}

resetForm();

};

const resetForm = ()=>{
setShowForm(false);
setEditingTask(null);
setNewTask({
name:"",
owner:"",
status:"Not Started",
projStart:"",
projEnd:"",
notes:"",
dependency:""
});
};

/*
|--------------------------------------------------------------------------
| DELETE
|--------------------------------------------------------------------------
*/

const deleteTask = (id)=>{
setTasks(tasks.filter(t=>t.id !== id));
};

/*
|--------------------------------------------------------------------------
| EDIT
|--------------------------------------------------------------------------
*/

const editTask = (task)=>{
setEditingTask(task);
setNewTask(task);
setShowForm(true);
};

/*
|--------------------------------------------------------------------------
| STATUS CHANGE (INLINE)
|--------------------------------------------------------------------------
*/

const updateStatus = (id,status)=>{
setTasks(tasks.map(t =>
t.id === id ? {...t,status} : t
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
case "Delayed":
return "bg-red-100 text-red-600 border-red-200";
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

<div className="space-y-6">

{/* HEADER */}

<div className="flex justify-between items-center">

<div className="flex items-center gap-2">

<div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
<Layers size={16}/>
</div>

<h3 className="font-semibold text-gray-800">
Project Tasks
</h3>

</div>

<button
onClick={()=>setShowForm(!showForm)}
className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-xl text-sm shadow"
>
<Plus size={14}/> Add Task
</button>

</div>


{/* FORM */}

{showForm && (

<motion.div
initial={{opacity:0,y:-10}}
animate={{opacity:1,y:0}}
className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 bg-white p-5 rounded-xl border shadow"
>

<input
placeholder="Task Name"
className="input"
value={newTask.name}
onChange={(e)=>setNewTask({...newTask,name:e.target.value})}
/>

<input
placeholder="Owner"
className="input"
value={newTask.owner}
onChange={(e)=>setNewTask({...newTask,owner:e.target.value})}
/>

<select
className="input"
value={newTask.status}
onChange={(e)=>setNewTask({...newTask,status:e.target.value})}
>
<option>Not Started</option>
<option>In Progress</option>
<option>Completed</option>
<option>Delayed</option>
</select>

<input
type="date"
className="input"
value={newTask.projStart}
onChange={(e)=>setNewTask({...newTask,projStart:e.target.value})}
/>

<input
type="date"
className="input"
value={newTask.projEnd}
onChange={(e)=>setNewTask({...newTask,projEnd:e.target.value})}
/>

<input
placeholder="Dependency"
className="input"
value={newTask.dependency}
onChange={(e)=>setNewTask({...newTask,dependency:e.target.value})}
/>

<textarea
placeholder="Notes"
className="input col-span-full"
value={newTask.notes}
onChange={(e)=>setNewTask({...newTask,notes:e.target.value})}
/>

<button
onClick={saveTask}
className="bg-indigo-600 text-white py-2 rounded-lg col-span-full"
>
{editingTask ? "Update Task" : "Save Task"}
</button>

</motion.div>

)}
{/* DELAY PANEL */}
<DelayPanel tasks={tasks} />


{/* TASK LIST */}

<div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">

{tasks.map((t,i)=>(

<motion.div
key={t.id}
initial={{opacity:0,y:10}}
animate={{opacity:1,y:0}}
transition={{delay:i*0.05}}
className="p-4 rounded-xl border bg-gradient-to-br from-white via-indigo-50 to-purple-50 shadow"
>

{/* HEADER */}

<div className="flex justify-between">

<h4 className="font-medium">{t.name}</h4>

<select
value={t.status}
onChange={(e)=>updateStatus(t.id,e.target.value)}
className={`text-xs px-2 py-1 rounded border ${statusStyle(t.status)}`}
>
<option>Not Started</option>
<option>In Progress</option>
<option>Completed</option>
<option>Delayed</option>
</select>

</div>

{/* DETAILS */}

<div className="text-xs text-gray-500 mt-2 space-y-1">

<p><User size={12}/> {t.owner}</p>
<p><Calendar size={12}/> {t.projStart} → {t.projEnd}</p>
<p>Dep: {t.dependency}</p>

</div>

{/* NOTES */}

{t.notes && (
<p className="text-xs mt-2">{t.notes}</p>
)}

{/* ACTIONS */}

<div className="flex justify-end gap-3 mt-3 text-gray-500">

<button onClick={()=>editTask(t)} className="hover:text-indigo-600">
<Pencil size={14}/>
</button>

<button onClick={()=>deleteTask(t.id)} className="hover:text-red-600">
<Trash2 size={14}/>
</button>

</div>

</motion.div>

))}

</div>

</div>

)
}