import { motion } from "framer-motion";
import LeadScoreBadge from "./LeadScoreBadge";
import LeadFollowup from "./LeadFollowup";

export default function LeadTable({leads=[]}){

return(

<div className="bg-white/70 backdrop-blur-lg border rounded-xl shadow-lg overflow-x-auto">

<table className="min-w-full text-sm">

<thead className="bg-gray-50">

<tr className="text-gray-600 text-left">

<th className="p-4">Lead</th>
<th className="p-4">Phone</th>
<th className="p-4">Source</th>
<th className="p-4">Budget</th>
<th className="p-4">Score</th>
<th className="p-4">Followup</th>
<th className="p-4">Status</th>

</tr>

</thead>

<tbody>

{leads.map((lead,i)=>{

const overdue =
lead.nextFollowup &&
new Date(lead.nextFollowup) < new Date()

return(

<motion.tr
key={lead.id}
initial={{opacity:0}}
animate={{opacity:1}}
whileHover={{backgroundColor:"#f9fafb"}}
className={`border-t ${overdue?"bg-red-50":""}`}
>

<td className="p-4 font-medium text-gray-800">
{lead.name}
</td>

<td className="p-4">
{lead.phone}
</td>

<td className="p-4">
{lead.source}
</td>

<td className="p-4 font-semibold text-indigo-600">
₹ {lead.budget}
</td>

<td className="p-4">
<LeadScoreBadge score={lead.score}/>
</td>

<td className="p-4">
<LeadFollowup date={lead.nextFollowup}/>
</td>

<td className="p-4">
{lead.status}
</td>

</motion.tr>

)

})}

</tbody>

</table>

</div>

)

}