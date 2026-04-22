import { motion } from "framer-motion";
import { useState } from "react";
import MainLayout from "../layout/MainLayout";

import AdminDashboard from "../components/dashboard/AdminDashboard";
import SalesDashboard from "../components/dashboard/SalesDashboard";

export default function Dashboard(){

const [role,setRole] = useState("sales");

return(

<MainLayout>

<motion.div
initial={{opacity:0,y:12}}
animate={{opacity:1,y:0}}
className="space-y-6"
>

{/* ================= ROLE SWITCH (PREMIUM) ================= */}

<div className="flex items-center justify-between">

<h2 className="text-lg md:text-xl font-semibold text-gray-800">
Dashboard View
</h2>

{/* Toggle */}

<div className="flex bg-gray-100 rounded-xl p-1 shadow-inner">

<button
onClick={()=>setRole("sales")}
className={`
px-4 py-1.5 text-sm rounded-lg transition-all
${role === "sales"
? "bg-white shadow text-indigo-600"
: "text-gray-500 hover:text-gray-700"}
`}
>
Sales
</button>

<button
onClick={()=>setRole("admin")}
className={`
px-4 py-1.5 text-sm rounded-lg transition-all
${role === "admin"
? "bg-white shadow text-indigo-600"
: "text-gray-500 hover:text-gray-700"}
`}
>
Admin
</button>

</div>

</div>


{/* ================= DASHBOARD ================= */}

<motion.div
key={role}   // 🔥 smooth switch animation
initial={{opacity:0,y:10}}
animate={{opacity:1,y:0}}
transition={{duration:.3}}
>

{role === "admin"
  ? <AdminDashboard/>
  : <SalesDashboard/>
}

</motion.div>

</motion.div>

</MainLayout>

)
}