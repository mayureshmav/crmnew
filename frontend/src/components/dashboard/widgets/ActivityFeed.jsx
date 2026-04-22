import { motion } from "framer-motion";
import {
User,
CheckCircle,
Clock,
TrendingUp,
FileText,
ShieldCheck
} from "lucide-react";

import { useEffect, useState } from "react";

export default function ActivityFeed(){

/*
|--------------------------------------------------------------------------
| STATE
|--------------------------------------------------------------------------
*/

const [activities,setActivities] = useState([
{
id:1,
name:"Rahul Sharma",
action:"created a new lead",
type:"lead",
time:"2 min ago"
},
{
id:2,
name:"Admin",
action:"approved quotation",
type:"approval",
time:"5 min ago"
},
{
id:3,
name:"System",
action:"generated monthly report",
type:"system",
time:"10 min ago"
},
{
id:4,
name:"Priya",
action:"closed a deal",
type:"deal",
time:"15 min ago"
}
]);

/*
|--------------------------------------------------------------------------
| REAL-TIME SIMULATION
|--------------------------------------------------------------------------
*/

useEffect(()=>{

const demo = [
{name:"Amit",action:"added new client",type:"lead"},
{name:"System",action:"backup completed",type:"system"},
{name:"Neha",action:"updated project status",type:"deal"},
{name:"Admin",action:"approved invoice",type:"approval"}
];

const interval = setInterval(()=>{

const random = demo[Math.floor(Math.random()*demo.length)];

const newActivity = {
id:Date.now(),
...random,
time:"just now"
};

setActivities(prev => [newActivity,...prev.slice(0,6)])

},10000);

return ()=>clearInterval(interval);

},[]);

/*
|--------------------------------------------------------------------------
| TYPE STYLING
|--------------------------------------------------------------------------
*/

function getStyle(type){

switch(type){

case "lead":
return {
icon:<User size={14}/>,
color:"bg-indigo-100 text-indigo-600",
gradient:"from-indigo-500 to-purple-500"
};

case "deal":
return {
icon:<TrendingUp size={14}/>,
color:"bg-emerald-100 text-emerald-600",
gradient:"from-emerald-500 to-teal-500"
};

case "approval":
return {
icon:<CheckCircle size={14}/>,
color:"bg-blue-100 text-blue-600",
gradient:"from-blue-500 to-indigo-500"
};

default:
return {
icon:<FileText size={14}/>,
color:"bg-gray-100 text-gray-600",
gradient:"from-gray-500 to-gray-700"
};

}

}

/*
|--------------------------------------------------------------------------
| LAYOUT
|--------------------------------------------------------------------------
*/

return(

<motion.div
initial={{opacity:0,y:10}}
animate={{opacity:1,y:0}}
transition={{duration:.5}}
className="
relative
rounded-2xl
border border-purple-200
bg-gradient-to-br from-white via-purple-50 to-indigo-50
shadow-lg
p-6
space-y-6
"
>

{/* Glow */}

<div className="absolute -top-20 -right-20 w-80 h-80 bg-purple-300/30 blur-3xl rounded-full"></div>

<div className="relative space-y-6">

{/* HEADER */}

<div className="flex items-center justify-between">

<div className="flex items-center gap-2">

<div className="p-2 rounded-lg bg-purple-100 text-purple-600">
<Clock size={16}/>
</div>

<h3 className="font-semibold text-gray-800">
Activity Feed
</h3>

</div>

<span className="text-xs text-purple-600 font-medium">
Live Updates
</span>

</div>


{/* TIMELINE */}

<div className="space-y-4">

{activities.map((item,i)=>{

const style = getStyle(item.type);

return(

<motion.div
key={item.id}
initial={{opacity:0,x:-10}}
animate={{opacity:1,x:0}}
whileHover={{x:6}}
transition={{delay:i*0.05}}
className="
flex items-start gap-4
bg-white/80 backdrop-blur
border border-gray-200
rounded-xl
p-4
shadow-sm
"
>

{/* ICON */}

<div className={`
p-2 rounded-lg
${style.color}
`}>

{style.icon}

</div>


{/* CONTENT */}

<div className="flex-1">

<p className="text-sm text-gray-700">

<span className="font-medium text-gray-800">
{item.name}
</span>{" "}
{item.action}

</p>

<div className="flex items-center gap-2 text-xs text-gray-500 mt-1">

<Clock size={12}/>
{item.time}

</div>

</div>


{/* STATUS DOT */}

<div className={`
w-2 h-2 rounded-full
bg-gradient-to-r ${style.gradient}
mt-2
`} />

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

<span>Showing latest activities</span>

<span className="text-purple-600 font-medium">
Auto-refresh enabled
</span>

</div>

</div>

</motion.div>

)

}