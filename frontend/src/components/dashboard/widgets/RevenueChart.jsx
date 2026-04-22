import { motion } from "framer-motion";
import {
TrendingUp,
CalendarDays
} from "lucide-react";

import {
BarChart,
Bar,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer,
CartesianGrid
} from "recharts";

import { useState } from "react";

export default function RevenueChart(){

/*
|--------------------------------------------------------------------------
| STATE
|--------------------------------------------------------------------------
*/

const [range,setRange] = useState("week");

/*
|--------------------------------------------------------------------------
| DATA (simulate API)
|--------------------------------------------------------------------------
*/

const dataMap = {
week:[
{label:"Mon",revenue:2400},
{label:"Tue",revenue:1398},
{label:"Wed",revenue:9800},
{label:"Thu",revenue:3908},
{label:"Fri",revenue:4800},
{label:"Sat",revenue:3800},
{label:"Sun",revenue:4300}
],
month:[
{label:"Jan",revenue:24000},
{label:"Feb",revenue:18000},
{label:"Mar",revenue:32000},
{label:"Apr",revenue:28000},
{label:"May",revenue:35000},
{label:"Jun",revenue:41000}
],
year:[
{label:"2020",revenue:120000},
{label:"2021",revenue:180000},
{label:"2022",revenue:220000},
{label:"2023",revenue:310000},
{label:"2024",revenue:420000}
]
};

const data = dataMap[range];

/*
|--------------------------------------------------------------------------
| TOOLTIP
|--------------------------------------------------------------------------
*/

const CustomTooltip = ({active,payload})=>{

if(active && payload && payload.length){

return(

<div className="
bg-white
border border-gray-200
shadow-md
rounded-lg
px-3 py-2
text-sm
">

<p className="text-gray-500">
Revenue
</p>

<p className="font-semibold text-gray-800">
${payload[0].value.toLocaleString()}
</p>

</div>

)

}

return null;

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
transition={{duration:.5}}
className="
relative
rounded-2xl
border border-emerald-200
bg-gradient-to-br from-white via-emerald-50 to-teal-50
shadow-lg
p-6
space-y-6
"
>

{/* Glow */}

<div className="absolute -top-20 -right-20 w-80 h-80 bg-emerald-300/30 blur-3xl rounded-full"></div>

<div className="relative space-y-6">

{/* HEADER */}

<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

<div className="flex items-center gap-3">

<div className="
p-2 rounded-lg
bg-emerald-100 text-emerald-600
">

<TrendingUp size={18}/>

</div>

<div>

<h3 className="font-semibold text-gray-800">
Revenue Analytics
</h3>

<p className="text-xs text-gray-500">
Track income growth over time
</p>

</div>

</div>


{/* FILTER */}

<div className="flex items-center gap-2">

<CalendarDays size={14} className="text-gray-400"/>

<select
value={range}
onChange={(e)=>setRange(e.target.value)}
className="
border border-gray-200
rounded-lg
px-3 py-1.5
text-sm
bg-white
focus:ring-2 focus:ring-emerald-500
"
>

<option value="week">This Week</option>
<option value="month">This Month</option>
<option value="year">This Year</option>

</select>

</div>

</div>


{/* CHART */}

<div className="h-[260px] md:h-[300px]">

<ResponsiveContainer width="100%" height="100%">

<BarChart data={data}>

<CartesianGrid strokeDasharray="3 3" opacity={0.2}/>

<XAxis dataKey="label" tick={{fontSize:12}}/>

<YAxis tick={{fontSize:12}}/>

<Tooltip content={<CustomTooltip/>}/>

<Bar
dataKey="revenue"
radius={[6,6,0,0]}
fill="url(#gradient)"
/>

<defs>

<linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">

<stop offset="0%" stopColor="#10b981"/>
<stop offset="100%" stopColor="#06b6d4"/>

</linearGradient>

</defs>

</BarChart>

</ResponsiveContainer>

</div>


{/* FOOTER */}

<div className="
flex items-center justify-between
text-xs text-gray-500
pt-2 border-t
">

<span>Updated in real-time</span>

<span className="text-emerald-600 font-medium">
+18% growth this period
</span>

</div>

</div>

</motion.div>

)

}