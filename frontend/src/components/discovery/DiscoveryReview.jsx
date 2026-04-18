import { useState } from "react";
import { motion } from "framer-motion";
import {
FaClipboardCheck,
FaPalette,
FaEdit,
FaFileInvoice
} from "react-icons/fa";

export default function DiscoveryReview(){

const steps = [
{
id:1,
title:"Site Survey",
icon:<FaClipboardCheck/>,
description:"Survey data captured by Site Engineer"
},
{
id:2,
title:"Moodboard Selection",
icon:<FaPalette/>,
description:"Client selected preferred design style"
},
{
id:3,
title:"Discovery Review",
icon:<FaEdit/>,
description:"PM reviews and edits discovery data"
},
{
id:4,
title:"Ready for Quotation",
icon:<FaFileInvoice/>,
description:"Discovery marked complete"
}
];

const [currentStep,setCurrentStep] = useState(2);

return(

<motion.div
initial={{opacity:0,y:30}}
animate={{opacity:1,y:0}}
className="bg-white rounded-2xl shadow-xl border p-8"
>

{/* HEADER */}

<div className="mb-6">

<h2 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
Discovery Workflow Progress
</h2>

<p className="text-sm text-gray-500">
Track the discovery stage before quotation generation
</p>

</div>

{/* TIMELINE */}

<div className="relative">

{/* Progress line */}

<div className="absolute top-5 left-0 right-0 h-1 bg-gray-200 rounded"/>

<div
className="absolute top-5 left-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded"
style={{width:`${(currentStep-1)/(steps.length-1)*100}%`}}
/>

{/* Steps */}

<div className="grid grid-cols-4 gap-4 relative">

{steps.map((step,index)=>{

const active = index+1 <= currentStep;

return(

<div
key={step.id}
className="flex flex-col items-center text-center"
>

<motion.div
whileHover={{scale:1.1}}
className={`w-10 h-10 flex items-center justify-center rounded-full text-white shadow-lg
${active
?"bg-gradient-to-r from-indigo-600 to-purple-600"
:"bg-gray-300"}
`}
>

{step.icon}

</motion.div>

<h4 className="text-sm font-semibold mt-3 text-gray-700">
{step.title}
</h4>

<p className="text-xs text-gray-500 mt-1">
{step.description}
</p>

</div>

)

})}

</div>

</div>

{/* CONTROLS */}

<div className="flex justify-end mt-8 gap-3">

<button
onClick={()=>setCurrentStep(Math.max(currentStep-1,1))}
className="px-4 py-2 rounded-lg border hover:bg-gray-50"
>
Previous
</button>

<button
onClick={()=>setCurrentStep(Math.min(currentStep+1,4))}
className="px-5 py-2 rounded-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow"
>
Next Stage
</button>

</div>

</motion.div>

);
}