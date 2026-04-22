import { motion } from "framer-motion";
import { TrendingUp, BarChart3 } from "lucide-react";

// Shared
import DashboardHeader from "./shared/DashboardHeader";
import WidgetCard from "./shared/WidgetCard";

// Widgets
import KPICards from "./widgets/KPICards";
import ActivityFeed from "./widgets/ActivityFeed";
import LeadsWidget from "./widgets/LeadsWidget";
import TasksWidget from "./widgets/TasksWidget";
import ApprovalWidget from "./widgets/ApprovalWidget";

export default function SalesDashboard(){

return(

<motion.div
initial={{opacity:0,y:12}}
animate={{opacity:1,y:0}}
transition={{duration:.4}}
className="relative space-y-6 overflow-x-hidden"
>

{/* 🌈 BACKGROUND GLOW (reduced for better layout) */}
<div className="absolute -top-20 left-1/3 w-[350px] h-[350px] bg-blue-300/20 blur-[100px] rounded-full pointer-events-none"></div>

<div className="relative space-y-6">

{/* ================= HEADER ================= */}

<DashboardHeader
title="Sales Dashboard"
subtitle="Manage leads, tasks and approvals efficiently"
tag="Workspace"
/>


{/* ================= KPI ================= */}

<div className="
rounded-2xl
border border-indigo-200
bg-gradient-to-br from-white via-indigo-50 to-purple-50
p-5
shadow-md
">
<KPICards/>
</div>


{/* ================= MAIN GRID ================= */}

<div className="grid grid-cols-1 xl:grid-cols-3 gap-5 items-start">

  {/* LEFT SIDE */}
  <div className="lg:col-span-2 flex flex-col gap-5">

    <LeadsWidget/>

    <div className="flex-1">
    <TasksWidget />
    </div>

  </div>


  {/* RIGHT SIDE (NOW FULL HEIGHT BALANCED) */}
  <div className="space-y-5">

    <ApprovalWidget/>

    {/* SALES TARGET */}
    <WidgetCard
      title="Sales Target"
      icon={TrendingUp}
      theme="blue"
    >
      <div className="space-y-3">

        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">

          <motion.div
            initial={{width:0}}
            animate={{width:"65%"}}
            transition={{duration:.8}}
            className="h-2 bg-gradient-to-r from-blue-500 to-indigo-500"
          />

        </div>

        <p className="text-xs text-gray-500">
          65% of monthly target achieved
        </p>

      </div>
    </WidgetCard>


    {/* 🔥 MOVED ACTIVITY HERE (KEY FIX) */}
    <WidgetCard
      title="Recent Activity"
      icon={BarChart3}
      theme="purple"
    >
      <ActivityFeed/>
    </WidgetCard>

  </div>

</div>

</div>

</motion.div>

)
}