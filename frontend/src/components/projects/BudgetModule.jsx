import { useState } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, TrendingUp, Wallet } from "lucide-react";

export default function BudgetModule(){

/*
|--------------------------------------------------------------------------
| STATE
|--------------------------------------------------------------------------
*/

const [budgets,setBudgets] = useState([
{type:"Material",limit:100000,used:50000},
{type:"Labor",limit:80000,used:30000}
]);

/*
|--------------------------------------------------------------------------
| ADD EXPENSE SIMULATION
|--------------------------------------------------------------------------
*/

const addExpense = (type,amount)=>{

setBudgets(prev =>
prev.map(b => {

if(b.type !== type) return b;

return {
...b,
used: b.used + amount
};

})
);

};

/*
|--------------------------------------------------------------------------
| HELPERS
|--------------------------------------------------------------------------
*/

const getUtilization = (b)=>{
return Math.min((b.used / b.limit) * 100,100);
};

const isOverrun = (b)=>{
return b.used > b.limit;
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

{/* 🌈 GLOBAL BACKGROUND GLOW */}

<div className="absolute -top-24 left-1/3 w-[500px] h-[500px] bg-purple-300/20 blur-[140px] rounded-full"></div>

<div className="relative space-y-6">

{/* ================= HEADER ================= */}

<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

<div className="flex items-center gap-3">

<div className="p-2 rounded-xl bg-indigo-100 text-indigo-600 shadow-sm">
<Wallet size={18}/>
</div>

<div>
<h3 className="font-semibold text-gray-800 text-lg">
Budget Utilization
</h3>
<p className="text-xs text-gray-500">
Track spending vs allocated budget
</p>
</div>

</div>

</div>


{/* ================= CARDS ================= */}

<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">

{budgets.map((b,i)=>{

const percent = getUtilization(b);
const over = isOverrun(b);

return(

<motion.div
key={i}
initial={{opacity:0,y:10}}
animate={{opacity:1,y:0}}
transition={{delay:i*0.05}}
whileHover={{y:-6,scale:1.01}}
className="
group
relative
p-[1.5px]
rounded-2xl
bg-gradient-to-br
"
style={{
background: over
? "linear-gradient(135deg, #f87171, #fb923c)"
: "linear-gradient(135deg, #6366f1, #a855f7)"
}}
>

{/* GLOW EFFECT */}

<div className="
absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
blur-xl transition duration-500
"
style={{
background: over
? "linear-gradient(135deg, #ef4444, #f97316)"
: "linear-gradient(135deg, #6366f1, #a855f7)"
}}
></div>

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

{/* HEADER */}

<div className="flex justify-between items-center">

<h4 className="font-semibold text-gray-800">
{b.type}
</h4>

{over && (
<span className="text-red-600 text-xs flex items-center gap-1 font-medium">
<AlertTriangle size={12}/> Overrun
</span>
)}

</div>

{/* VALUES */}

<div className="flex justify-between text-sm">

<div>
<p className="text-gray-500 text-xs">Used</p>
<p className="font-semibold text-gray-800">₹{b.used}</p>
</div>

<div>
<p className="text-gray-500 text-xs">Limit</p>
<p className="font-semibold text-gray-800">₹{b.limit}</p>
</div>

</div>

{/* PROGRESS BAR */}

<div>

<div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">

<motion.div
initial={{width:0}}
animate={{width:`${percent}%`}}
transition={{duration:.8}}
className="h-full"
style={{
background: over
? "linear-gradient(90deg,#ef4444,#f97316)"
: "linear-gradient(90deg,#6366f1,#a855f7)"
}}
></motion.div>

</div>

<p className="text-xs text-gray-500 mt-1">
{percent.toFixed(0)}% used
</p>

</div>

{/* ACTION */}

<div className="flex justify-end">

<button
onClick={()=>addExpense(b.type,10000)}
className="
flex items-center gap-1
text-xs font-medium
text-indigo-600
hover:text-indigo-800
transition
"
>
<TrendingUp size={14}/> Add Expense
</button>

</div>

</div>

</motion.div>

)

})}

</div>

</div>

</motion.div>

)
}