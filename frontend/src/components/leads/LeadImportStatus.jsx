import { motion } from "framer-motion";
import {
FaGlobe,
FaBuilding,
FaSyncAlt,
FaCheckCircle,
FaExclamationTriangle
} from "react-icons/fa";

const sources = [
{
name:"Website",
icon:<FaGlobe/>,
gradient:"from-indigo-500 to-blue-500",
total:120,
success:105,
failed:5,
duplicate:10,
lastSync:"10 min ago"
},
{
name:"IndiaMart",
icon:<FaBuilding/>,
gradient:"from-orange-500 to-red-500",
total:86,
success:70,
failed:6,
duplicate:10,
lastSync:"30 min ago"
},
{
name:"MagicBricks",
icon:<FaBuilding/>,
gradient:"from-purple-500 to-pink-500",
total:64,
success:58,
failed:2,
duplicate:4,
lastSync:"1 hour ago"
}
];

export default function LeadImportStatus(){

return(

<div className=" rounded-2xl bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-100 shadow-inner p-6 space-y-6">

{/* HEADER */}

<div>

<h2 className="text-xl font-semibold text-gray-800">
Lead Import Status
</h2>

<p className="text-sm text-gray-500 mt-1">
Monitor automatic lead imports from external sources.
</p>

</div>


{/* SOURCE CARDS */}

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

{sources.map((src)=>{

const successRate = Math.round((src.success/src.total)*100)

return(

<motion.div
key={src.name}
whileHover={{y:-6}}
className={`

relative
rounded-xl
p-[2px]
bg-gradient-to-r ${src.gradient}

`}
>

<div className="bg-white rounded-xl p-5 shadow-md space-y-4">

{/* SOURCE HEADER */}

<div className="flex items-center justify-between">

<div className="flex items-center gap-3">

<div className={`

w-10 h-10
rounded-lg
flex items-center justify-center
text-white
bg-gradient-to-r ${src.gradient}

`}>

{src.icon}

</div>

<div>

<h3 className="font-semibold text-gray-800">
{src.name}
</h3>

<p className="text-xs text-gray-400">
Last sync {src.lastSync}
</p>

</div>

</div>

<FaSyncAlt className="text-gray-400"/>

</div>


{/* PROGRESS BAR */}

<div>

<div className="flex justify-between text-xs text-gray-500 mb-1">

<span>Import Success</span>

<span>{successRate}%</span>

</div>

<div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">

<div
style={{width:`${successRate}%`}}
className={`h-full bg-gradient-to-r ${src.gradient}`}
></div>

</div>

</div>


{/* STATS */}

<div className="grid grid-cols-3 text-center text-sm">

<div>

<p className="font-semibold text-gray-800">
{src.success}
</p>

<p className="text-gray-400 text-xs">
Success
</p>

</div>

<div>

<p className="font-semibold text-yellow-500">
{src.duplicate}
</p>

<p className="text-gray-400 text-xs">
Duplicate
</p>

</div>

<div>

<p className="font-semibold text-red-500">
{src.failed}
</p>

<p className="text-gray-400 text-xs">
Failed
</p>

</div>

</div>


{/* STATUS */}

<div className="flex items-center justify-between text-sm">

<div className="flex items-center gap-2 text-green-600">

<FaCheckCircle/>

<span>Import Active</span>

</div>

<button
className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
>

View Logs

</button>

</div>

</div>

</motion.div>

)

})}

</div>


{/* ALERT AREA */}

<div className="flex items-center gap-3 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-sm text-yellow-700">

<FaExclamationTriangle/>

Some imports detected duplicate leads. Review logs to prevent duplicates.

</div>

</div>

)

}