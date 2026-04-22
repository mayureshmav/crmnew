import { motion } from "framer-motion";
import {
LineChart,
Line,
AreaChart,
Area,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer,
CartesianGrid,
Legend
} from "recharts";

import {
TrendingUp,
CalendarDays
} from "lucide-react";

import { useState } from "react";

export default function SalesChart(){

/*
|--------------------------------------------------------------------------
| STATE
|--------------------------------------------------------------------------
*/

const [range,setRange] = useState("week");

/*
|--------------------------------------------------------------------------
| DATA
|--------------------------------------------------------------------------
*/

const dataMap = {
week:[
{label:"Mon",sales:120,target:150},
{label:"Tue",sales:200,target:180},
{label:"Wed",sales:170,target:200},
{label:"Thu",sales:250,target:220},
{label:"Fri",sales:300,target:260},
{label:"Sat",sales:280,target:240},
{label:"Sun",sales:220,target:210}
],
month:[
{label:"Jan",sales:1200,target:1500},
{label:"Feb",sales:1800,target:1700},
{label:"Mar",sales:2400,target:2100},
{label:"Apr",sales:2800,target:2600},
{label:"May",sales:3200,target:3000},
{label:"Jun",sales:3600,target:3400}
],
year:[
{label:"2020",sales:12000,target:15000},
{label:"2021",sales:18000,target:20000},
{label:"2022",sales:26000,target:24000},
{label:"2023",sales:34000,target:30000},
{label:"2024",sales:42000,target:38000}
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

<p className="text-gray-500">Sales</p>
<p className="font-semibold text-indigo-600">
${payload[0].value.toLocaleString()}
</p>

<p className="text-gray-500 mt-1">Target</p>
<p className="font-semibold text-emerald-600">
${payload[1].value.toLocaleString()}
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
border border-blue-200
bg-gradient-to-br from-white via-blue-50 to-indigo-50
shadow-lg
p-6
space-y-6
"
>

{/* Glow */}

<div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-300/30 blur-3xl rounded-full"></div>

<div className="relative space-y-6">

{/* HEADER */}

<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

<div className="flex items-center gap-3">

<div className="
p-2 rounded-lg
bg-blue-100 text-blue-600
">

<TrendingUp size={18}/>

</div>

<div>

<h3 className="font-semibold text-gray-800">
Sales Performance
</h3>

<p className="text-xs text-gray-500">
Compare actual sales vs targets
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
focus:ring-2 focus:ring-blue-500
"
>

<option value="week">This Week</option>
<option value="month">This Month</option>
<option value="year">This Year</option>

</select>

</div>

</div>


{/* CHART */}

<div className="w-full min-h-[300px]">

<ResponsiveContainer width="100%" height="100%">

<LineChart data={data}>

<CartesianGrid strokeDasharray="3 3" opacity={0.2}/>

<XAxis dataKey="label" tick={{fontSize:12}}/>

<YAxis tick={{fontSize:12}}/>

<Tooltip content={<CustomTooltip/>}/>

<Legend />

{/* Area Gradient */}

<defs>

<linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
<stop offset="0%" stopColor="#6366f1" stopOpacity={0.4}/>
<stop offset="100%" stopColor="#6366f1" stopOpacity={0}/>
</linearGradient>

</defs>

{/* Area */}

<Area
type="monotone"
dataKey="sales"
stroke="none"
fill="url(#salesGradient)"
/>

{/* Sales Line */}

<Line
type="monotone"
dataKey="sales"
stroke="#6366f1"
strokeWidth={3}
dot={{r:3}}
activeDot={{r:6}}
/>

{/* Target Line */}

<Line
type="monotone"
dataKey="target"
stroke="#10b981"
strokeWidth={2}
strokeDasharray="5 5"
dot={false}
/>

</LineChart>

</ResponsiveContainer>

</div>


{/* FOOTER */}

<div className="
flex items-center justify-between
text-xs text-gray-500
pt-2 border-t
">

<span>Data updates live</span>

<span className="text-blue-600 font-medium">
Sales outperforming targets
</span>

</div>

</div>

</motion.div>

)

}