import { useState } from "react";
import { motion } from "framer-motion";
import {
FaCheckCircle,
FaPalette,
FaEye,
FaSave
} from "react-icons/fa";

export default function MoodboardSelector({clientId="CL-2103"}){

const [selected,setSelected] = useState(null);
const [category,setCategory] = useState("All");

const categories = ["All","Modern","Luxury","Minimal","Industrial"];

const templates = [
{
id:1,
title:"Modern Living Room",
category:"Modern",
image:"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0"
},
{
id:2,
title:"Luxury Interior",
category:"Luxury",
image:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
},
{
id:3,
title:"Minimal Style",
category:"Minimal",
image:"https://images.unsplash.com/photo-1600566752227-8f3c5e0f6e7f"
},
{
id:4,
title:"Industrial Loft",
category:"Industrial",
image:"https://images.unsplash.com/photo-1507089947368-19c1da9775ae"
}
];

const filtered =
category==="All"
?templates
:templates.filter(t=>t.category===category);


const saveSelection = () =>{

const discoveryRecord = {
clientId,
selectedTemplate:selected,
timestamp:new Date()
};

const boards = [
{ id:1, name:"Modern" },
{ id:2, name:"Luxury" },
{ id:3, name:"Minimal" },
{ id:4, name:"Industrial" },
{ id:5, name:"Scandinavian" }
];

console.log("Saved Discovery:",discoveryRecord);

alert("Client style preference saved to discovery record");

};

return(

<motion.div
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:.4}}
className="space-y-8"
>

{/* HEADER */}

<div className="flex justify-between items-center">

<div>

<h2 className="text-2xl font-bold text-indigo-700 flex items-center gap-2">

<FaPalette/>

Moodboard & Template Selection

</h2>

<p className="text-gray-500 text-sm">
Present design styles to the client and capture preferences
</p>

</div>

<div className="text-xs bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full">
Client: {clientId}
</div>

</div>



{/* CATEGORY FILTER */}

<div className="flex gap-3 flex-wrap">

{categories.map(cat=>(

<button
key={cat}
onClick={()=>setCategory(cat)}
className={`px-4 py-2 rounded-lg text-sm font-medium transition
${category===cat
?"bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
:"bg-white border hover:bg-gray-50"}
`}
>

{cat}

</button>

))}

</div>




{/* TEMPLATE GRID */}

<div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

{filtered.map(template=>(

<motion.div
key={template.id}
whileHover={{scale:1.04}}
transition={{duration:.2}}
onClick={()=>setSelected(template)}
className={`cursor-pointer rounded-2xl overflow-hidden shadow-lg border bg-white
${selected?.id===template.id
?"border-indigo-500 ring-2 ring-indigo-300"
:"border-gray-200"}
`}
>

{/* IMAGE */}

<div className="relative h-48 overflow-hidden">

<img
src={template.image}
className="w-full h-full object-cover"
/>

{selected?.id===template.id && (

<div className="absolute top-3 right-3 bg-indigo-600 text-white rounded-full p-2 shadow">

<FaCheckCircle/>

</div>

)}

</div>



{/* TEMPLATE INFO */}

<div className="p-4">

<h3 className="font-semibold text-gray-800">

{template.title}

</h3>

<p className="text-xs text-gray-500 mt-1">

Category: {template.category}

</p>

</div>

</motion.div>

))}

</div>



{/* PREVIEW PANEL */}

{selected && (

<motion.div
initial={{opacity:0}}
animate={{opacity:1}}
className="bg-white rounded-xl border shadow-lg p-6 flex justify-between items-center"
>

<div>

<h3 className="font-semibold text-gray-800">

Selected Style: {selected.title}

</h3>

<p className="text-sm text-gray-500">

This style will be saved in the client discovery record
</p>

</div>

<div className="flex gap-3">

<button className="flex items-center gap-2 px-4 py-2 rounded-lg border hover:bg-gray-50">

<FaEye/>

Preview

</button>


<button
onClick={saveSelection}
className="flex items-center gap-2 px-5 py-2 rounded-lg text-white font-semibold shadow
bg-gradient-to-r from-indigo-600 to-purple-600 hover:shadow-lg"
>

<FaSave/>

Save Selection

</button>

</div>

</motion.div>

)}

</motion.div>

);

}