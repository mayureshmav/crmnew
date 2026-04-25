import { motion } from "framer-motion";
import {
User,
Phone,
Mail,
MessageCircle,
Flame,
CircleDot,
Snowflake,
ArrowUpRight,
TrendingUp
} from "lucide-react";

export default function AILeadWidget(){

/*
|-------------------------------------------------------------------------- 
| DATA (UPDATED FOR AI LEAD SCORE)
|-------------------------------------------------------------------------- 
*/

const leads = [
{
id:1,
name:"Rahul Sharma",
project:"Luxury Villa",
status:"Hot",
score:92,
lastActivity:"2 days ago"
},
{
id:2,
name:"Amit Verma",
project:"Office Interior",
status:"Warm",
score:68,
lastActivity:"5 days ago"
},
{
id:3,
name:"Neha Singh",
project:"Retail Store",
status:"Cold",
score:40,
lastActivity:"15 days ago"
}
];

/*
|-------------------------------------------------------------------------- 
| STYLE HELPERS (UNCHANGED STYLE, ONLY LOGIC TUNED)
|-------------------------------------------------------------------------- 
*/

const getStatus = (status)=>{

switch(status){

case "Hot":
return {
bg:"bg-red-100 text-red-600",
gradient:"from-red-500 to-pink-500",
icon:<Flame size={12}/>
};

case "Warm":
return {
bg:"bg-yellow-100 text-yellow-600",
gradient:"from-yellow-500 to-orange-500",
icon:<CircleDot size={12}/>
};

default:
return {
bg:"bg-blue-100 text-blue-600",
gradient:"from-blue-500 to-indigo-500",
icon:<Snowflake size={12}/>
};

}

};

/*
|-------------------------------------------------------------------------- 
| LAYOUT (SAME DESIGN, ONLY CONTENT UPDATED)
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
border border-indigo-200
bg-gradient-to-br from-white via-indigo-50 to-purple-50
shadow-lg
p-5
space-y-5
"
>

{/* GLOBAL GLOW */}

<div className="absolute -top-20 -right-20 w-72 h-72 bg-indigo-300/20 blur-3xl rounded-full"></div>

<div className="relative space-y-5">

{/* ================= HEADER ================= */}

<div className="flex items-center justify-between">

<div className="flex items-center gap-2">

<div className="p-2 rounded-lg bg-indigo-100 text-indigo-600">
<TrendingUp size={16}/>
</div>

<div>
<h3 className="font-semibold text-gray-800">
AI Lead Score
</h3>
<p className="text-xs text-gray-500">
Prioritized leads based on conversion probability
</p>
</div>

</div>

<span className="text-xs text-indigo-600 font-medium">
High Score First
</span>

</div>


{/* ================= LIST (UNCHANGED STRUCTURE) ================= */}

<div className="space-y-3">

{leads
.sort((a,b)=>b.score - a.score) // 🔥 important (new logic)
.map((lead,i)=>{

const style = getStatus(lead.status);

return(

<motion.div
key={lead.id}
initial={{opacity:0,y:10}}
animate={{opacity:1,y:0}}
transition={{delay:i*0.05}}
whileHover={{y:-4,scale:1.01}}
className="
group
relative
p-[1px]
rounded-xl
bg-gradient-to-br from-white/30 to-white/10
"
>

{/* Hover Gradient Border */}

<div className={`
absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100
bg-gradient-to-br ${style.gradient}
blur-md transition duration-500
`}></div>

{/* CARD */}

<div className="
relative
bg-white/80 backdrop-blur
border border-gray-200
rounded-xl
p-4
shadow-sm
space-y-3
">

{/* TOP */}

<div className="flex items-center justify-between">

<div className="flex items-center gap-3">

<div className="p-2 bg-gray-100 rounded-lg">
<User size={16}/>
</div>

<div>

<p className="text-sm font-medium text-gray-800">
{lead.name}
</p>

<p className="text-xs text-gray-500">
{lead.project}
</p>

</div>

</div>

<span className={`
flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium
${style.bg}
`}>

{style.icon}
{lead.status}

</span>

</div>


{/* MID INFO (UPDATED) */}

<div className="flex items-center justify-between text-xs text-gray-500">

<span className="font-medium text-indigo-600">
Score: {lead.score}
</span>

<span>
Last: {lead.lastActivity}
</span>

</div>


{/* ACTIONS (UNCHANGED) */}

<div className="flex items-center justify-between pt-2 border-t">

<div className="flex gap-2">

<button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200">
<Phone size={14}/>
</button>

<button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200">
<MessageCircle size={14}/>
</button>

<button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200">
<Mail size={14}/>
</button>

</div>

<button className="flex items-center gap-1 text-xs text-indigo-600 font-medium">

Open
<ArrowUpRight size={14}/>

</button>

</div>

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

<span>{leads.length} prioritized leads</span>

<span className="text-indigo-600 font-medium cursor-pointer">
View details →
</span>

</div>

</div>

</motion.div>

)
}