import { motion } from "framer-motion";
import {
Users,
Activity,
Clock,
Building2,
TrendingUp,
TrendingDown
} from "lucide-react";

import { useEffect, useState } from "react";

export default function KPICards(){

/*
|--------------------------------------------------------------------------
| STATE
|--------------------------------------------------------------------------
*/

const [stats,setStats] = useState([
{
title:"Total Leads",
value:142,
icon:Users,
gradient:"from-indigo-500 to-purple-500",
bg:"from-indigo-50 to-purple-50",
trend:"+12%",
trendUp:true
},
{
title:"Active Users",
value:36,
icon:Activity,
gradient:"from-emerald-500 to-teal-500",
bg:"from-emerald-50 to-teal-50",
trend:"+5%",
trendUp:true
},
{
title:"Avg Response Time",
value:"2.4h",
icon:Clock,
gradient:"from-orange-500 to-amber-500",
bg:"from-orange-50 to-amber-50",
trend:"-8%",
trendUp:false
},
{
title:"Departments",
value:7,
icon:Building2,
gradient:"from-blue-500 to-indigo-500",
bg:"from-blue-50 to-indigo-50",
trend:"+1",
trendUp:true
}
])

/*
|--------------------------------------------------------------------------
| LIVE UPDATE (SIMULATION)
|--------------------------------------------------------------------------
*/

useEffect(()=>{

const interval = setInterval(()=>{

setStats(prev=>prev.map((item,i)=>{

if(i===1){ // simulate live update

const change = Math.floor(Math.random()*3)

return {
...item,
value: Math.max(10, item.value + (Math.random()>0.5?change:-change)),
trend:`${change}`,
trendUp: Math.random()>0.5
}

}

return item

}))

},4000)

return ()=>clearInterval(interval)

},[])


/*
|--------------------------------------------------------------------------
| ANIMATION VARIANTS
|--------------------------------------------------------------------------
*/

const container = {
hidden:{opacity:0},
show:{
opacity:1,
transition:{staggerChildren:.1}
}
}

const card = {
hidden:{opacity:0,y:20},
show:{opacity:1,y:0}
}


/*
|--------------------------------------------------------------------------
| LAYOUT
|--------------------------------------------------------------------------
*/

return(

<motion.div
variants={container}
initial="hidden"
animate="show"
className="
relative
grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4
gap-6
"
>

{/* GLOBAL GLOW */}

<div className="absolute -top-20 left-1/4 w-72 h-72 bg-indigo-300/20 blur-3xl rounded-full"></div>

{stats.map((stat,i)=>{

const Icon = stat.icon

return(

<motion.div
key={i}
variants={card}
whileHover={{y:-6,scale:1.02}}
transition={{type:"spring",stiffness:200}}
className="
group
relative
rounded-2xl
p-[1px]   /* gradient border trick */
bg-gradient-to-br from-white/40 to-white/10
"
>

{/* Gradient Border */}

<div className={`
absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
bg-gradient-to-br ${stat.gradient}
blur-md transition duration-500
`}></div>

{/* Card */}

<div className={`
relative
rounded-2xl
bg-gradient-to-br ${stat.bg}
backdrop-blur-xl
border border-white/40
shadow-lg
p-5
flex flex-col justify-between
h-full
`}>

{/* TOP */}

<div className="flex items-center justify-between">

{/* Icon */}

<div className={`
p-3 rounded-xl
bg-gradient-to-br ${stat.gradient}
text-white shadow-md
`}>

<Icon size={20}/>

</div>

{/* Trend */}

<div className="flex items-center gap-1 text-xs font-medium">

{stat.trendUp ? (
<TrendingUp size={14} className="text-emerald-500"/>
) : (
<TrendingDown size={14} className="text-red-500"/>
)}

<span className={stat.trendUp ? "text-emerald-600" : "text-red-500"}>
{stat.trend}
</span>

</div>

</div>


{/* VALUE */}

<div className="mt-4">

<p className="text-sm text-gray-500">
{stat.title}
</p>

<motion.h3
key={stat.value}
initial={{scale:.9,opacity:0}}
animate={{scale:1,opacity:1}}
transition={{duration:.3}}
className="
text-2xl md:text-3xl
font-bold
text-gray-800
tracking-tight
"
>

{stat.value}

</motion.h3>

</div>


{/* FOOTER */}

<div className="mt-4 flex items-center justify-between text-xs text-gray-400">

<span>Updated just now</span>

<span className="opacity-0 group-hover:opacity-100 transition">
View details →
</span>

</div>

</div>

</motion.div>

)

})}

</motion.div>

)

}