import MainLayout from "../layout/MainLayout";
import { useState } from "react";
import { motion } from "framer-motion";

import LayoutHeader from "../components/layouts/LayoutHeader";
import LayoutStats from "../components/layouts/LayoutStats";
import LayoutTable from "../components/layouts/LayoutTable";
import UploadLayoutModal from "../components/layouts/UploadLayoutModal";

export default function Layouts(){

const [showUpload,setShowUpload] = useState(false);

const [layouts,setLayouts] = useState([
{
id:1,
name:"Villa Floor Plan",
project:"Modern Villa",
type:"Floor Plan",
version:"v2",
uploadedBy:"Rohit",
date:"2026-04-20",
status:"Approved"
}
]);

return(

<MainLayout>

{/* 🌈 PREMIUM BACKGROUND */}

<div className="
relative min-h-screen
bg-gradient-to-br from-slate-50 via-indigo-50/40 to-purple-50/50
overflow-hidden
">

{/* 🔥 GRADIENT GLOWS (Premium effect) */}

<div className="absolute -top-32 -left-20 w-[400px] h-[400px] bg-indigo-300/20 blur-[120px] rounded-full"></div>

<div className="absolute top-1/2 -right-32 w-[400px] h-[400px] bg-purple-300/20 blur-[120px] rounded-full"></div>


{/* 🌟 MAIN CONTENT */}

<motion.div
initial={{opacity:0, y:12}}
animate={{opacity:1, y:0}}
transition={{duration:.4}}
className="
relative
max-w-7xl mx-auto
px-4 sm:px-6 lg:px-8
py-6
space-y-6
"
>

{/* ================= HEADER ================= */}

<motion.div
initial={{opacity:0, y:-10}}
animate={{opacity:1, y:0}}
className="
p-5 md:p-6
rounded-2xl
border border-indigo-100
bg-gradient-to-r from-white via-indigo-50/50 to-purple-50/50
shadow-sm
"
>

<LayoutHeader onUpload={()=>setShowUpload(true)} />

</motion.div>


{/* ================= KPI ================= */}

<motion.div
initial={{opacity:0, y:10}}
animate={{opacity:1, y:0}}
transition={{delay:.1}}
className="
p-4 md:p-5
rounded-2xl
border border-indigo-100
bg-white/80 backdrop-blur
shadow-md
"
>

<LayoutStats layouts={layouts} />

</motion.div>


{/* ================= TABLE ================= */}

<motion.div
initial={{opacity:0, y:10}}
animate={{opacity:1, y:0}}
transition={{delay:.2}}
className="
rounded-2xl
border border-indigo-100
bg-white
shadow-md
overflow-hidden
"
>

<LayoutTable layouts={layouts} />

</motion.div>


{/* ================= MODAL ================= */}

{showUpload && (
<UploadLayoutModal onClose={()=>setShowUpload(false)} />
)}

</motion.div>

</div>

</MainLayout>

)
}