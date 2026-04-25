import { motion } from "framer-motion";
import { TrendingUp, BarChart3, Users, CheckSquare, AlertTriangle } from "lucide-react";
// Shared
import DashboardHeader from "./shared/DashboardHeader";
import WidgetCard from "./shared/WidgetCard";

// OLD Widgets
import KPICards from "./widgets/KPICards";
import ActivityFeed from "./widgets/ActivityFeed";
import LeadsWidget from "./widgets/LeadsWidget";
import TasksWidget from "./widgets/TasksWidget";
import ApprovalWidget from "./widgets/ApprovalWidget";

// NEW SYSTEM
import SalesOverview from "./analytics/SalesOverview";

import LeadSourceChart from "./charts/LeadSourceChart";
import PMStatsChart from "./charts/PMStatsChart";
import RegionChart from "./charts/RegionChart";

import TasksPanel from "./panels/TasksPanel";
import RisksPanel from "./panels/RisksPanel";

export default function SalesDashboard(){

return(

<motion.div
initial={{opacity:0,y:12}}
animate={{opacity:1,y:0}}
transition={{duration:.4}}
className="relative space-y-8 overflow-x-hidden"
>

{/* 🌈 GLOBAL GLOW */}
<div className="absolute -top-20 left-1/3 w-[400px] h-[400px] bg-indigo-300/20 blur-[120px] rounded-full pointer-events-none"></div>

<div className="relative space-y-8">

{/* ================= HEADER ================= */}

<DashboardHeader
title="Sales Dashboard"
subtitle="Manage leads, tasks and approvals efficiently"
tag="Workspace"
/>


{/* ===================================================== */}
{/* 🔷 OLD DASHBOARD SECTION */}
{/* ===================================================== */}

<div className="space-y-6">

{/* KPI */}
<div className="rounded-2xl border border-indigo-200 bg-gradient-to-br from-white via-indigo-50 to-purple-50 p-5 shadow-md">
  <KPICards/>
</div>

{/* OLD GRID */}

{/* KPI */}

  <SalesOverview/>


<div className="grid grid-cols-1 xl:grid-cols-3 gap-5">

  <div className="xl:col-span-2 space-y-5">
    <LeadsWidget/>
    
  </div>

  <div className="space-y-5">
    <ApprovalWidget/>

    <WidgetCard title="Sales Target" icon={TrendingUp} theme="blue">
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

  </div>

</div>

</div>


{/* ===================================================== */}
{/* 🔥 NEW DASHBOARD SECTION */}
{/* ===================================================== */}

<div className="space-y-6">

<h3 className="text-sm font-semibold text-indigo-600 px-1">
Advanced Analytics
</h3>

{/* MAIN GRID */}
<div className="grid grid-cols-1 xl:grid-cols-4 gap-6">

  {/* LEFT ANALYTICS */}
  <div className="xl:col-span-4 space-y-6">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <LeadSourceChart/>
      <RegionChart/>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">

    <TasksWidget/>
    <PMStatsChart/>
    </div>
    

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
      <WidgetCard  theme="orange">
        <RisksPanel/>
      </WidgetCard>

      <WidgetCard theme="blue">
        <TasksPanel/>
      </WidgetCard>
      
  </div>


  </div>

  {/* RIGHT PANELS */}
  <div className="space-y-6">

</div>

</div>

</div>


</div>

</motion.div>

)
}