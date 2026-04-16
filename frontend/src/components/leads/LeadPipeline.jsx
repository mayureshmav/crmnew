import { motion } from "framer-motion";

const stages=["New","Contacted","Meeting","Negotiation","Won"];

export default function LeadPipeline({leads=[]}){

const grouped={};

stages.forEach(stage=>{
grouped[stage]=leads.filter(l=>l.status===stage)
})

return(

<div className="grid md:grid-cols-5 gap-4">

{stages.map(stage=>(

<div
key={stage}
className="bg-white/70 backdrop-blur-lg border rounded-xl shadow-md p-4"
>

<h3 className="font-semibold text-gray-700 mb-3">
{stage}
</h3>

<div className="space-y-3">

{grouped[stage].map(lead=>(

<motion.div
key={lead.id}
whileHover={{scale:1.04}}
className="bg-white border rounded-lg p-3 shadow-sm cursor-pointer hover:shadow-md"
>

<p className="font-medium text-gray-800">
{lead.name}
</p>

<p className="text-xs text-gray-400">
{lead.source}
</p>

<p className="text-sm text-indigo-600 font-semibold">
₹ {lead.budget}
</p>

</motion.div>

))}

</div>

</div>

))}

</div>

)

}