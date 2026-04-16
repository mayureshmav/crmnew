import { motion } from "framer-motion";
import { FaUsers, FaChartLine, FaHandshake, FaFire } from "react-icons/fa";

const stats = [
{
title: "Total Leads",
value: 128,
icon: FaUsers,
gradient: "from-indigo-500 to-purple-600",
},
{
title: "Active Pipeline",
value: 72,
icon: FaChartLine,
gradient: "from-yellow-400 to-orange-500",
},
{
title: "Closed Deals",
value: 24,
icon: FaHandshake,
gradient: "from-green-500 to-emerald-600",
},
{
title: "Hot Leads",
value: 19,
icon: FaFire,
gradient: "from-pink-500 to-red-500",
},
];

export default function LeadStats() {

return (

<div className="grid md:grid-cols-4 gap-6">

{stats.map((item,i)=>{

const Icon = item.icon;

return(

<motion.div
key={i}
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
whileHover={{scale:1.05}}
transition={{duration:.35}}
className="relative overflow-hidden rounded-xl bg-white/70 backdrop-blur-lg border border-gray-200 shadow-lg p-6"
>

<div
className={`absolute inset-0 opacity-10 bg-gradient-to-r ${item.gradient}`}
/>

<div className="flex items-center justify-between">

<div>

<p className="text-sm text-gray-500">
{item.title}
</p>

<h2 className="text-2xl font-bold text-gray-800">
{item.value}
</h2>

</div>

<div
className={`p-3 rounded-lg bg-gradient-to-r ${item.gradient} text-white shadow-md`}
>
<Icon size={18}/>
</div>

</div>

</motion.div>

)

})}

</div>

)

}