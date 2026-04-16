import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

export default function LeadFilters({ setFilter }) {

const [search,setSearch]=useState("");

const updateFilter=(key,val)=>{
setFilter(prev=>({...prev,[key]:val}));
};

return(

<motion.div
initial={{opacity:0,y:10}}
animate={{opacity:1,y:0}}
className="bg-white/70 backdrop-blur-lg border rounded-xl shadow-md p-4 flex flex-wrap gap-4 items-center"
>

<div className="relative">

<FaSearch className="absolute top-3 left-3 text-gray-400"/>

<input
value={search}
onChange={(e)=>{
setSearch(e.target.value)
updateFilter("search",e.target.value)
}}
placeholder="Search leads..."
className="pl-9 pr-4 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-indigo-400"
/>

</div>

<select
onChange={(e)=>updateFilter("source",e.target.value)}
className="border px-4 py-2 rounded-lg text-sm focus:ring-2 focus:ring-indigo-300"
>

<option value="">Source</option>
<option>IndiaMart</option>
<option>MagicBricks</option>
<option>Website</option>

</select>

<select
onChange={(e)=>updateFilter("score",e.target.value)}
className="border px-4 py-2 rounded-lg text-sm focus:ring-2 focus:ring-indigo-300"
>

<option value="">Lead Score</option>
<option>Hot</option>
<option>Warm</option>
<option>Cold</option>

</select>

<select
onChange={(e)=>updateFilter("status",e.target.value)}
className="border px-4 py-2 rounded-lg text-sm focus:ring-2 focus:ring-indigo-300"
>

<option value="">Status</option>
<option>New</option>
<option>Contacted</option>
<option>Meeting</option>
<option>Negotiation</option>
<option>Won</option>

</select>

</motion.div>

)

}