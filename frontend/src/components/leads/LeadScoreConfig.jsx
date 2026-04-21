import { motion } from "framer-motion";
import { useState } from "react";
import {
FaFire,
FaChartLine,
FaClock,
FaWallet,
FaSave
} from "react-icons/fa";

const ruleCards = [
{
id:"budget",
title:"Budget Strength",
icon:<FaWallet/>,
gradient:"from-indigo-500 to-blue-500"
},
{
id:"timeline",
title:"Purchase Timeline",
icon:<FaClock/>,
gradient:"from-orange-500 to-yellow-500"
},
{
id:"engagement",
title:"Lead Engagement",
icon:<FaChartLine/>,
gradient:"from-purple-500 to-pink-500"
},
{
id:"intent",
title:"Buying Intent",
icon:<FaFire/>,
gradient:"from-red-500 to-orange-500"
}
];

export default function LeadScoreConfig(){

const [scores,setScores] = useState({
budget:25,
timeline:25,
engagement:25,
intent:25
});

const handleChange = (id,value)=>{
setScores({...scores,[id]:value})
};

return(

<div className="rounded-2xl bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-100 shadow-inner p-6 space-y-6">

{/* SECTION HEADER */}

<div>

<h2 className="text-xl font-semibold text-gray-800">
Lead Score Configuration
</h2>

<p className="text-sm text-gray-500 mt-1">
Configure scoring rules to classify leads automatically as Hot, Warm, or Cold.
</p>

</div>


{/* RULE CARDS */}

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

{ruleCards.map(rule=>(

<motion.div
key={rule.id}
whileHover={{y:-6}}
className={`

relative
rounded-xl
p-[2px]
bg-gradient-to-r ${rule.gradient}

`}
>

<div className="bg-white rounded-xl p-5 shadow-md">

<div className="flex items-center justify-between">

<div className={`

w-10 h-10
rounded-lg
flex items-center justify-center
text-white
bg-gradient-to-r ${rule.gradient}

`}>

{rule.icon}

</div>

<span className="text-lg font-semibold text-gray-800">
{scores[rule.id]}%
</span>

</div>

<h3 className="mt-4 text-sm font-medium text-gray-700">
{rule.title}
</h3>


{/* SLIDER */}

<input
type="range"
min="0"
max="100"
value={scores[rule.id]}
onChange={(e)=>handleChange(rule.id,e.target.value)}
className="w-full mt-4 accent-indigo-500"
/>

</div>

</motion.div>

))}

</div>


{/* SCORE LEGEND */}

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-5 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-xl shadow-md">
<h3 className="font-semibold">Hot Lead</h3>
<p className="text-sm opacity-90">
Score above 75 indicates high buying probability.
</p>
</div>

<div className="p-5 bg-gradient-to-r from-yellow-500 to-orange-400 text-white rounded-xl shadow-md">
<h3 className="font-semibold">Warm Lead</h3>
<p className="text-sm opacity-90">
Score between 40 – 75 requires nurturing.
</p>
</div>

<div className="p-5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl shadow-md">
<h3 className="font-semibold">Cold Lead</h3>
<p className="text-sm opacity-90">
Score below 40 requires long-term follow up.
</p>
</div>

</div>


{/* SAVE BUTTON */}

<div className="flex justify-end">

<motion.button
whileHover={{scale:1.05}}
whileTap={{scale:.95}}
className="flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium bg-gradient-to-r from-indigo-600 to-blue-600 shadow-lg"
>

<FaSave/>

Save Configuration

</motion.button>

</div>

</div>

)

}