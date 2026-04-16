import { useState } from "react";
import MainLayout from "../layout/MainLayout";
import LeadCard from "../components/leads/LeadCard";
import LeadTable from "../components/leads/LeadTable";
import LeadPipeline from "../components/leads/LeadPipeline";
import LeadFormModal from "../components/leads/LeadFormModal";

import LeadScoreBadge from "../components/leads/LeadScoreBadge";

import LeadStats from "../components/leads/LeadStats";

import LeadFollowup from "../components/leads/LeadFollowup";

import LeadFilters from "../components/leads/LeadFilters";





import { motion } from "framer-motion";
import {
FaUserPlus,
FaChartLine,
FaHandshake,
FaUsers
} from "react-icons/fa";

const Leads = () => {

const [showModal,setShowModal] = useState(false)

const leads = [
{
id:"LD-001",
name:"Rahul Sharma",
phone:"9876543210",
email:"rahul@gmail.com",
source:"IndiaMart",
budget:"12L",
status:"New",
score:"Hot"
},
{
id:"LD-002",
name:"Amit Kumar",
phone:"9876543210",
email:"amit@gmail.com",
source:"MagicBricks",
budget:"18L",
status:"Meeting",
score:"Warm"
},
{
id:"LD-003",
name:"Neha Singh",
phone:"9876543210",
email:"neha@gmail.com",
source:"Website",
budget:"10L",
status:"Won",
score:"Cold"
}
]

return (

<MainLayout>

<motion.div
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
transition={{duration:.5}}
className="space-y-8"
>

{/* HEADER */}

<div className="flex flex-col md:flex-row justify-between gap-4">

<h1 className="text-3xl font-bold text-gray-800">
Lead Management
</h1>

<div className="flex gap-3">

<input
type="text"
placeholder="Search leads..."
className="border border-gray-200 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-indigo-400"
/>

<button
onClick={()=>setShowModal(true)}
className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow hover:scale-105 transition"
>

<FaUserPlus/>
Add Lead

</button>

</div>

</div>


{/* KPI SECTION */}

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<motion.div
whileHover={{scale:1.05}}
className="bg-white shadow-lg border rounded-xl p-5 flex items-center gap-4"
>

<FaUsers className="text-indigo-600 text-3xl"/>

<div>
<p className="text-gray-500 text-sm">
Total Leads
</p>
<h2 className="text-xl font-bold">
128
</h2>
</div>

</motion.div>


<motion.div
whileHover={{scale:1.05}}
className="bg-white shadow-lg border rounded-xl p-5 flex items-center gap-4"
>

<FaChartLine className="text-yellow-500 text-3xl"/>

<div>
<p className="text-gray-500 text-sm">
Pipeline Leads
</p>
<h2 className="text-xl font-bold">
72
</h2>
</div>

</motion.div>


<motion.div
whileHover={{scale:1.05}}
className="bg-white shadow-lg border rounded-xl p-5 flex items-center gap-4"
>

<FaHandshake className="text-green-600 text-3xl"/>

<div>
<p className="text-gray-500 text-sm">
Closed Deals
</p>
<h2 className="text-xl font-bold">
24
</h2>
</div>

</motion.div>

</div>


{/* RECENT LEADS */}

<div>

<h2 className="text-lg font-semibold mb-4">
Recent Leads
</h2>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

{leads.map((lead)=>(
<LeadCard key={lead.id} lead={lead}/>
))}

</div>

</div>


{/* PIPELINE */}

<div>

<h2 className="text-lg font-semibold mb-4">
Lead Pipeline
</h2>

<LeadPipeline/>

</div>


{/* LEAD TABLE */}

<div>

<h2 className="text-lg font-semibold mb-4">
All Leads
</h2>

<LeadTable leads={leads}/>

</div>

</motion.div>


{/* ADD LEAD MODAL */}

{showModal && (
<LeadFormModal close={()=>setShowModal(false)}/>
)}

</MainLayout>
)

}

export default Leads