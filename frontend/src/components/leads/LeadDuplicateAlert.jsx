import { motion } from "framer-motion";
import {
  FaExclamationTriangle,
  FaUser,
  FaPhone,
  FaEnvelope,
  FaCompressAlt,
  FaTimes,
  FaEye
} from "react-icons/fa";

export default function LeadDuplicateAlert({ duplicateLead, existingLead, onMerge, onIgnore }) {

return (

<motion.div
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
transition={{duration:.35}}
className="relative rounded-xl " 
>

<div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-100 shadow-inner rounded-xl shadow-lg p-6 space-y-6">

{/* HEADER */}

<div className="flex items-center gap-3">

<div className="w-10 h-10 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center text-white">

<FaExclamationTriangle/>

</div>

<div>

<h2 className="font-semibold text-gray-800 text-lg">
Duplicate Lead Detected
</h2>

<p className="text-sm text-gray-500">
A lead with the same phone or email already exists.
</p>

</div>

</div>


{/* LEAD COMPARISON */}

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

{/* NEW LEAD */}

<div className="relative rounded-xl p-[2px] bg-gradient-to-r from-indigo-500 to-blue-500">

<div className="bg-white rounded-xl p-5 shadow-sm">

<h3 className="text-sm font-semibold text-gray-700 mb-4">
New Lead
</h3>

<div className="space-y-3 text-sm">

<div className="flex items-center gap-2 text-gray-600">
<FaUser className="text-indigo-500"/>
{duplicateLead?.name}
</div>

<div className="flex items-center gap-2 text-gray-600">
<FaPhone className="text-indigo-500"/>
{duplicateLead?.phone}
</div>

<div className="flex items-center gap-2 text-gray-600">
<FaEnvelope className="text-indigo-500"/>
{duplicateLead?.email}
</div>

</div>

</div>

</div>


{/* EXISTING LEAD */}

<div className="relative rounded-xl p-[2px] bg-gradient-to-r from-purple-500 to-pink-500">

<div className="bg-white rounded-xl p-5 shadow-sm">

<h3 className="text-sm font-semibold text-gray-700 mb-4">
Existing Lead
</h3>

<div className="space-y-3 text-sm">

<div className="flex items-center gap-2 text-gray-600">
<FaUser className="text-purple-500"/>
{existingLead?.name}
</div>

<div className="flex items-center gap-2 text-gray-600">
<FaPhone className="text-purple-500"/>
{existingLead?.phone}
</div>

<div className="flex items-center gap-2 text-gray-600">
<FaEnvelope className="text-purple-500"/>
{existingLead?.email}
</div>

</div>

</div>

</div>

</div>


{/* ACTIONS */}

<div className="flex flex-col md:flex-row md:justify-end gap-3 pt-2">

<motion.button
whileHover={{scale:1.05}}
whileTap={{scale:.95}}
onClick={onMerge}
className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-white text-sm font-medium bg-gradient-to-r from-green-500 to-emerald-500 shadow-md"
>

<FaCompressAlt/>

Merge Leads

</motion.button>


<motion.button
whileHover={{scale:1.05}}
whileTap={{scale:.95}}
className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-white text-sm font-medium bg-gradient-to-r from-indigo-500 to-blue-500 shadow-md"
>

<FaEye/>

View Existing

</motion.button>


<motion.button
whileHover={{scale:1.05}}
whileTap={{scale:.95}}
onClick={onIgnore}
className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-white text-sm font-medium bg-gradient-to-r from-gray-500 to-gray-700 shadow-md"
>

<FaTimes/>

Ignore

</motion.button>

</div>

</div>

</motion.div>

);

}