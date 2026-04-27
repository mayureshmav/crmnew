import { useState } from "react";
import { motion } from "framer-motion";
import {
  Plus,
  FileText,
  CheckCircle,
  XCircle,
  Layers
} from "lucide-react";

export default function ExpensesModule(){

/*
|--------------------------------------------------------------------------
| STATE
|--------------------------------------------------------------------------
*/

const [expenses,setExpenses] = useState([
{
id:1,
type:"Material",
vendor:"ABC Suppliers",
amount:50000,
date:"2026-04-20",
status:"Pending",
note:"",
invoice:null
}
]);

const [showForm,setShowForm] = useState(false);

const [form,setForm] = useState({
type:"Material",
vendor:"",
amount:"",
date:"",
note:"",
invoice:null
});

/*
|--------------------------------------------------------------------------
| ADD EXPENSE
|--------------------------------------------------------------------------
*/

const addExpense = ()=>{
if(!form.vendor || !form.amount) return;

setExpenses([
...expenses,
{
...form,
id:Date.now(),
status:"Pending"
}
]);

setShowForm(false);

setForm({
type:"Material",
vendor:"",
amount:"",
date:"",
note:"",
invoice:null
});
};

/*
|--------------------------------------------------------------------------
| STATUS ACTIONS
|--------------------------------------------------------------------------
*/

const approveExpense = (id)=>{
setExpenses(expenses.map(e =>
e.id === id ? {...e,status:"Approved"} : e
));
};

const rejectExpense = (id)=>{
const reason = prompt("Enter rejection reason");
if(!reason) return;

setExpenses(expenses.map(e =>
e.id === id ? {...e,status:"Rejected",note:reason} : e
));
};

/*
|--------------------------------------------------------------------------
| STATUS STYLE (PREMIUM)
|--------------------------------------------------------------------------
*/

const statusStyle = (status)=>{

switch(status){
case "Approved":
return "bg-emerald-100 text-emerald-600 border-emerald-200";
case "Rejected":
return "bg-red-100 text-red-600 border-red-200";
case "Pending":
return "bg-yellow-100 text-yellow-600 border-yellow-200";
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
className="relative space-y-6"
>

{/* 🌈 GLOBAL GLOW */}

<div className="absolute -top-24 left-1/3 w-[450px] h-[450px] bg-indigo-300/20 blur-[120px] rounded-full"></div>

<div className="relative space-y-6">

{/* ================= HEADER ================= */}

<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

<div className="flex items-center gap-2">

<div className="p-2 rounded-lg bg-indigo-100 text-indigo-600">
<Layers size={16}/>
</div>

<h3 className="font-semibold text-gray-800 text-lg">
Expense Management
</h3>

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
<Plus size={14}/> Add Expense
</button>

</div>


{/* ================= FORM ================= */}

{showForm && (

<motion.div
initial={{opacity:0,y:-10}}
animate={{opacity:1,y:0}}
className="
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4
rounded-2xl
border border-indigo-200
bg-gradient-to-br from-white via-indigo-50/60 to-purple-50/60
p-5
shadow-xl
"
>

<select className="input"
onChange={(e)=>setForm({...form,type:e.target.value})}
>
<option>Material</option>
<option>Labor</option>
<option>Transport</option>
<option>Misc</option>
</select>

<input placeholder="Vendor" className="input"
onChange={(e)=>setForm({...form,vendor:e.target.value})}
/>

<input type="number" placeholder="Amount" className="input"
onChange={(e)=>setForm({...form,amount:e.target.value})}
/>

<input type="date" className="input"
onChange={(e)=>setForm({...form,date:e.target.value})}
/>

<input type="file" className="input"
onChange={(e)=>setForm({...form,invoice:e.target.files[0]})}
/>

<textarea placeholder="Description"
className="input col-span-1 md:col-span-2 lg:col-span-3"
onChange={(e)=>setForm({...form,note:e.target.value})}
/>

<button
onClick={addExpense}
className="
col-span-full
bg-gradient-to-r from-indigo-600 to-purple-600
text-white py-2 rounded-xl
shadow hover:scale-[1.02] transition
"
>
Save Expense
</button>

</motion.div>

)}


{/* ================= LIST ================= */}

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

{expenses.map((e,i)=>(

<motion.div
key={e.id}
initial={{opacity:0,y:10}}
animate={{opacity:1,y:0}}
transition={{delay:i*0.05}}
whileHover={{y:-5,scale:1.01}}
className="
group
relative
p-[1px]
rounded-2xl
bg-gradient-to-br from-indigo-200/30 to-purple-200/30
"
>

{/* HOVER GLOW */}
<div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-indigo-400 to-purple-400 blur-xl transition duration-500"></div>

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
₹{e.amount}
</h4>

<span className={`text-xs px-3 py-1 rounded-full border ${statusStyle(e.status)}`}>
{e.status}
</span>

</div>

{/* DETAILS */}

<div className="text-xs text-gray-500 space-y-1">

<p><b>Type:</b> {e.type}</p>
<p><b>Vendor:</b> {e.vendor}</p>
<p><b>Date:</b> {e.date}</p>

{e.invoice && (
<p className="flex items-center gap-1 text-indigo-600">
<FileText size={12}/> Invoice Attached
</p>
)}

</div>

{/* NOTE */}

{e.note && (
<p className="text-xs text-gray-600">
{e.note}
</p>
)}

{/* ACTIONS */}

{e.status === "Pending" && (

<div className="flex justify-end gap-3 pt-2">

<button
onClick={()=>approveExpense(e.id)}
className="text-green-600 hover:scale-110 transition"
>
<CheckCircle size={18}/>
</button>

<button
onClick={()=>rejectExpense(e.id)}
className="text-red-600 hover:scale-110 transition"
>
<XCircle size={18}/>
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