import { motion } from "framer-motion";
import { FaUsers } from "react-icons/fa";
import MainLayout from "../layout/MainLayout";

import LeadStats from "../components/leads/LeadStats";
import LeadFilters from "../components/leads/LeadFilters";
import LeadCard from "../components/leads/LeadCard";
import LeadPipeline from "../components/leads/LeadPipeline";
import LeadFollowup from "../components/leads/LeadFollowup";
import LeadActivityTimeline from "../components/leads/LeadActivityTimeline";
import LeadTable from "../components/leads/LeadTable";
import LeadAssignmentModal from "../components/leads/LeadAssignmentModal";
import LeadScoreConfig from "../components/leads/LeadScoreConfig";
import LeadImportStatus from "../components/leads/LeadImportStatus";
import LeadDuplicateAlert from "../components/leads/LeadDuplicateAlert";

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
className="space-y-12"
>

{/* DASHBOARD HERO */}

<LeadStats />


{/* IMPORT STATUS (PORTAL API) */}

<LeadImportStatus />


{/* SCORING RULES */}

<LeadScoreConfig />


{/* FILTERS */}

<LeadFilters />


{/* PIPELINE */}

<LeadPipeline />


{/* RECENT LEADS CARDS */}

<div className="p-6 rounded-2xl bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-100 shadow-inner">

  {/* HEADER */}

  <div className="flex items-center justify-between mb-6">

    <div className="flex items-center gap-3">

      <motion.div
        animate={{
          boxShadow:[
            "0 0 0px rgba(79,70,229,0.3)",
            "0 0 14px rgba(79,70,229,0.6)",
            "0 0 0px rgba(79,70,229,0.3)"
          ]
        }}
        transition={{
          duration:2,
          repeat:Infinity
        }}
        className="w-10 h-10 rounded-lg bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center text-white"
      >
        <FaUsers/>
      </motion.div>

      <div>

        <h2 className="text-lg font-semibold text-gray-800">
          Recent Leads
        </h2>

        <p className="text-sm text-gray-500">
          Latest captured prospects
        </p>

      </div>

    </div>

    <span className="text-xs text-indigo-600 font-medium">
      Live Leads
    </span>

  </div>


  {/* CARDS GRID */}

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

    {leads.map((lead)=>(
      <LeadCard key={lead.id} lead={lead}/>
    ))}

  </div>

</div>


{/* FULL LEAD TABLE */}

<LeadTable />


{/* FOLLOW UPS */}

<LeadFollowup />


{/* ACTIVITY HISTORY */}

<LeadActivityTimeline />


{/* DUPLICATE ALERT (shows only when duplicate detected) */}

<LeadDuplicateAlert />


{/* ASSIGNMENT MODAL */}

<LeadAssignmentModal />

</motion.div>

</MainLayout>

)

}

export default Leads;