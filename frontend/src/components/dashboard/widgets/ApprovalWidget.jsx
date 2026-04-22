import { motion, AnimatePresence } from "framer-motion";
import {
CheckCircle,
XCircle,
Clock,
FileText,
User
} from "lucide-react";
import { useState } from "react";

export default function ApprovalWidget(){

/*
|--------------------------------------------------------------------------
| STATE
|--------------------------------------------------------------------------
*/

const [approvals,setApprovals] = useState([
{
id:1,
title:"Quotation #Q102",
client:"TechSoft",
amount:"₹45,000",
requestedBy:"Rahul",
status:"Pending"
},
{
id:2,
title:"Invoice #INV88",
client:"FinanceHub",
amount:"₹18,000",
requestedBy:"Amit",
status:"Pending"
}
]);

/*
|--------------------------------------------------------------------------
| ACTION HANDLERS
|--------------------------------------------------------------------------
*/

const handleAction = (id,type)=>{

setApprovals(prev =>
prev.map(item =>
item.id === id ? {...item, status:type} : item
)
);

};

/*
|--------------------------------------------------------------------------
| STYLE HELPERS
|--------------------------------------------------------------------------
*/

const statusStyle = (status)=>{

switch(status){

case "Approved":
return "bg-emerald-100 text-emerald-600";

case "Rejected":
return "bg-red-100 text-red-600";

default:
return "bg-yellow-100 text-yellow-600";

}

};

const statusIcon = (status)=>{

switch(status){

case "Approved":
return <CheckCircle size={14}/>;

case "Rejected":
return <XCircle size={14}/>;

default:
return <Clock size={14}/>;

}

};

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
border border-orange-200
bg-gradient-to-br from-white via-orange-50 to-amber-50
shadow-md
p-5
space-y-5
"
>

{/* Glow */}

<div className="absolute -top-16 -right-16 w-60 h-60 bg-orange-300/20 blur-3xl rounded-full"></div>

<div className="relative space-y-5">

{/* HEADER */}

<div className="flex items-center justify-between">

<div className="flex items-center gap-2">

<div className="p-2 rounded-lg bg-orange-100 text-orange-600">
<FileText size={16}/>
</div>

<h3 className="font-semibold text-gray-800">
Pending Approvals
</h3>

</div>

<span className="text-xs text-orange-600 font-medium">
Action Required
</span>

</div>

{/* LIST */}

<div className="space-y-3">

<AnimatePresence>

{approvals.map((item)=>{

return(

<motion.div
key={item.id}
initial={{opacity:0,y:10}}
animate={{opacity:1,y:0}}
exit={{opacity:0,y:-10}}
layout
className="
bg-white/80 backdrop-blur
border border-gray-200
rounded-xl
p-4
shadow-sm
space-y-3
"
>

{/* TOP */}

<div className="flex items-center justify-between">

<div className="flex items-center gap-3">

<div className="p-2 bg-gray-100 rounded-lg">
<User size={14}/>
</div>

<div>

<p className="text-sm font-medium text-gray-800">
{item.title}
</p>

<p className="text-xs text-gray-500">
{item.client}
</p>

</div>

</div>

<span className={`
flex items-center gap-1 text-xs px-2 py-1 rounded-full
${statusStyle(item.status)}
`}>

{statusIcon(item.status)}
{item.status}

</span>

</div>


{/* DETAILS */}

<div className="flex items-center justify-between text-xs text-gray-500">

<span>Amount: {item.amount}</span>
<span>By: {item.requestedBy}</span>

</div>


{/* ACTIONS */}

{item.status === "Pending" && (

<div className="flex gap-2 pt-2">

<motion.button
whileTap={{scale:0.95}}
onClick={()=>handleAction(item.id,"Approved")}
className="
flex-1
bg-gradient-to-r from-emerald-500 to-teal-500
text-white text-xs
py-2 rounded-lg
shadow-sm
"
>

Approve

</motion.button>

<motion.button
whileTap={{scale:0.95}}
onClick={()=>handleAction(item.id,"Rejected")}
className="
flex-1
bg-gradient-to-r from-red-500 to-rose-500
text-white text-xs
py-2 rounded-lg
shadow-sm
"
>

Reject

</motion.button>

</div>

)}

</motion.div>

)

})}

</AnimatePresence>

</div>


{/* FOOTER */}

<div className="
flex items-center justify-between
text-xs text-gray-500
pt-2 border-t
">

<span>Handle approvals quickly ⚡</span>

<span className="text-orange-600 font-medium cursor-pointer">
View all →
</span>

</div>

</div>

</motion.div>

)

}