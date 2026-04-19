import { motion } from "framer-motion";
import { FaUsers, FaFire, FaChartLine, FaUserCheck } from "react-icons/fa";

export default function LeadStats(){

return(

<div className="space-y-6">

{/* HERO HEADER */}

<div>

<h1 className="text-3xl font-bold text-gray-800">
Lead Management
</h1>

<p className="text-gray-500 text-sm mt-1">
Track prospects, manage follow-ups and convert opportunities.
</p>

</div>


{/* STATS CONTAINER */}

<div className="p-6 rounded-2xl bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 shadow-inner">

<h2 className="text-lg font-semibold text-gray-800 mb-6">
Lead Overview
</h2>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

{/* Total Leads */}

<motion.div
whileHover={{y:-4}}
className="bg-white p-5 rounded-xl shadow-md"
>

<div className="flex items-center justify-between">

<div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center text-white">
<FaUsers/>
</div>

<h3 className="text-2xl font-bold text-gray-800">
324
</h3>

</div>

<p className="text-gray-600 mt-4">
Total Leads
</p>

<div className="h-1 bg-purple-400 rounded-full mt-3"></div>

</motion.div>


{/* Hot Leads */}

<motion.div
whileHover={{y:-4}}
className="bg-white p-5 rounded-xl shadow-md"
>

<div className="flex items-center justify-between">

<div className="w-12 h-12 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center text-white">
<FaFire/>
</div>

<h3 className="text-2xl font-bold text-gray-800">
86
</h3>

</div>

<p className="text-gray-600 mt-4">
Hot Leads
</p>

<div className="h-1 bg-red-400 rounded-full mt-3"></div>

</motion.div>


{/* Warm Leads */}

<motion.div
whileHover={{y:-4}}
className="bg-white p-5 rounded-xl shadow-md"
>

<div className="flex items-center justify-between">

<div className="w-12 h-12 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-400 flex items-center justify-center text-white">
<FaChartLine/>
</div>

<h3 className="text-2xl font-bold text-gray-800">
142
</h3>

</div>

<p className="text-gray-600 mt-4">
Warm Leads
</p>

<div className="h-1 bg-yellow-400 rounded-full mt-3"></div>

</motion.div>


{/* Converted */}

<motion.div
whileHover={{y:-4}}
className="bg-white p-5 rounded-xl shadow-md"
>

<div className="flex items-center justify-between">

<div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white">
<FaUserCheck/>
</div>

<h3 className="text-2xl font-bold text-gray-800">
54
</h3>

</div>

<p className="text-gray-600 mt-4">
Converted
</p>

<div className="h-1 bg-green-400 rounded-full mt-3"></div>

</motion.div>

</div>

</div>

</div>

)

}