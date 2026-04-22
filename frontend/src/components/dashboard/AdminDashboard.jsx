import { motion } from "framer-motion";
import {
BarChart3,
Users,
TrendingUp,
Activity,
LayoutDashboard
} from "lucide-react";


// widgets
import KPICards from "./widgets/KPICards";
import RevenueChart from "./widgets/RevenueChart";
import SalesChart from "./widgets/SalesChart";
import ActivityFeed from "./widgets/ActivityFeed";

export default function AdminDashboard(){

return(

<motion.div
initial={{opacity:0,y:10}}
animate={{opacity:1,y:0}}
transition={{duration:.5}}
className="
relative
space-y-5
overflow-hidden

"
>

{/* 🌈 GLOBAL BACKGROUND GLOW */}

<div className="absolute -top-24 left-1/3 w-[500px] h-[500px] bg-indigo-300/20 blur-[120px] rounded-full"></div>
<div className="absolute -bottom-24 right-1/3 w-[500px] h-[500px] bg-purple-300/20 blur-[120px] rounded-full"></div>

<div className="relative space-y-8">

{/* ========================================================= */}
{/* 🔥 HEADER */}
{/* ========================================================= */}

<motion.div
initial={{opacity:0,y:-10}}
animate={{opacity:1,y:0}}
className="
flex flex-col md:flex-row md:items-center md:justify-between
gap-4
p-6
rounded-2xl
border border-indigo-200
bg-gradient-to-r from-indigo-50 via-white to-purple-50
shadow-sm
"
>

<div className="flex items-center gap-3">

<div className="
p-3 rounded-xl
bg-gradient-to-br from-indigo-500 to-purple-500
text-white shadow-md
">

<LayoutDashboard size={22}/>

</div>

<div>

<h2 className="text-xl md:text-2xl font-bold text-gray-800">
Admin Dashboard
</h2>

<p className="text-sm text-gray-500">
Monitor CRM performance, revenue and activities in real-time
</p>

</div>

</div>

<div className="
flex items-center gap-2
text-indigo-600 text-sm font-medium
bg-indigo-100 px-3 py-1.5 rounded-lg
">

<BarChart3 size={16}/>
Live Analytics

</div>

</motion.div>


{/* ========================================================= */}
{/* 📊 KPI SECTION */}
{/* ========================================================= */}

<motion.div
initial={{opacity:0,y:10}}
animate={{opacity:1,y:0}}
transition={{delay:.1}}
className="
rounded-2xl
border border-indigo-200
bg-gradient-to-br from-white via-indigo-50 to-purple-50
p-5
shadow-md
"
>

<KPICards/>

</motion.div>


{/* ========================================================= */}
{/* 📈 CHART SECTION */}
{/* ========================================================= */}

<div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

{/* Revenue */}

<motion.div
initial={{opacity:0,y:10}}
animate={{opacity:1,y:0}}
transition={{delay:.2}}
className="
rounded-2xl
border border-emerald-200
bg-gradient-to-br from-white via-emerald-50 to-teal-50
p-5
shadow-md
"
>

<div className="flex items-center justify-between mb-4">

<div className="flex items-center gap-2">

<div className="p-2 rounded-lg bg-emerald-100 text-emerald-600">
<TrendingUp size={16}/>
</div>

<h3 className="font-semibold text-gray-800">
Revenue Overview
</h3>

</div>

<span className="text-xs text-emerald-600 font-medium">
+12% growth
</span>

</div>

<RevenueChart/>

</motion.div>


{/* Sales */}

<motion.div
initial={{opacity:0,y:10}}
animate={{opacity:1,y:0}}
transition={{delay:.25}}
className="
rounded-2xl
border border-blue-200
bg-gradient-to-br from-white via-blue-50 to-indigo-50
p-5
shadow-md
"
>

<div className="flex items-center justify-between mb-4">

<div className="flex items-center gap-2">

<div className="p-2 rounded-lg bg-blue-100 text-blue-600">
<Users size={16}/>
</div>

<h3 className="font-semibold text-gray-800">
Sales Performance
</h3>

</div>

<span className="text-xs text-blue-600 font-medium">
Live data
</span>

</div>

<SalesChart/>

</motion.div>

</div>


{/* ========================================================= */}
{/* 🧠 ACTIVITY + PERFORMANCE */}
{/* ========================================================= */}

<div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

{/* Activity Feed */}

<motion.div
initial={{opacity:0,y:10}}
animate={{opacity:1,y:0}}
transition={{delay:.3}}
className="
xl:col-span-2
rounded-2xl
border border-purple-200
bg-gradient-to-br from-white via-purple-50 to-indigo-50
p-5
shadow-md
"
>

<div className="flex items-center justify-between mb-4">

<div className="flex items-center gap-2">

<div className="p-2 rounded-lg bg-purple-100 text-purple-600">
<Activity size={16}/>
</div>

<h3 className="font-semibold text-gray-800">
Recent Activities
</h3>

</div>

<span className="text-xs text-purple-600 font-medium">
Live feed
</span>

</div>

<ActivityFeed/>

</motion.div>


{/* Quick Stats Panel */}

<motion.div
initial={{opacity:0,y:10}}
animate={{opacity:1,y:0}}
transition={{delay:.35}}
className="
rounded-2xl
border border-amber-200
bg-gradient-to-br from-white via-amber-50 to-orange-50
p-5
shadow-md
space-y-4
"
>

<h3 className="font-semibold text-gray-800">
Quick Insights
</h3>

<div className="space-y-3">

<div className="bg-white border rounded-lg p-3 flex justify-between">
<span className="text-sm text-gray-500">Conversion Rate</span>
<span className="font-semibold text-gray-800">24%</span>
</div>

<div className="bg-white border rounded-lg p-3 flex justify-between">
<span className="text-sm text-gray-500">Active Deals</span>
<span className="font-semibold text-gray-800">18</span>
</div>

<div className="bg-white border rounded-lg p-3 flex justify-between">
<span className="text-sm text-gray-500">Revenue</span>
<span className="font-semibold text-gray-800">$12.4K</span>
</div>

</div>

</motion.div>

</div>

</div>

</motion.div>

)

}