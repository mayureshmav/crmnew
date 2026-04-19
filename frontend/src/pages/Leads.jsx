import { motion } from "framer-motion";
import MainLayout from "../layout/MainLayout";

import LeadStats from "../components/leads/LeadStats";
import LeadFilters from "../components/leads/LeadFilters";
import LeadCard from "../components/leads/LeadCard";
import LeadPipeline from "../components/leads/LeadPipeline";
import LeadFollowup from "../components/leads/LeadFollowup";
import LeadActivityTimeline from "../components/leads/LeadActivityTimeline";

const Leads = () => {

const leads = [
{
id:"LD-001",
name:"Rahul Sharma",
phone:"9876543210",
email:"rahul@gmail.com",
city:"Patna",
assignedRep:"Amit",
source:"IndiaMart",
budget:"12L",
score:"Hot"
},
{
id:"LD-002",
name:"Neha Singh",
phone:"9876543210",
email:"neha@gmail.com",
city:"Delhi",
assignedRep:"Ravi",
source:"Website",
budget:"15L",
score:"Warm"
},
{
id:"LD-003",
name:"Vikas Patel",
phone:"9876543210",
email:"vikas@gmail.com",
city:"Noida",
assignedRep:"Sanjay",
source:"MagicBricks",
budget:"20L",
score:"Cold"
}
];

return (

<MainLayout>

<motion.div
initial={{opacity:0,y:25}}
animate={{opacity:1,y:0}}
transition={{duration:.45}}
className="space-y-10"
>

{/* STATS + HERO */}

<LeadStats />


{/* FILTERS */}

<LeadFilters />


{/* RECENT LEADS */}

<div className="p-6 rounded-2xl bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-100 shadow-inner">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

{leads.map((lead)=>(
<LeadCard key={lead.id} lead={lead}/>
))}

</div>

</div>


{/* PIPELINE */}

<LeadPipeline />


{/* FOLLOW UPS */}

<LeadFollowup />


{/* ACTIVITY TIMELINE */}

<LeadActivityTimeline />

</motion.div>

</MainLayout>

)

}

export default Leads;