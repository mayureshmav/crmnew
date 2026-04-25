import { motion } from "framer-motion";
import { useState } from "react";
import MainLayout from "../layout/MainLayout";

import AdminDashboard from "../components/dashboard/AdminDashboard";
import SalesDashboard from "../components/dashboard/SalesDashboard";

import { LayoutDashboard, Shield } from "lucide-react";

export default function Dashboard(){

  const [role,setRole] = useState("sales");

  return(

    <MainLayout>

      <motion.div
        initial={{opacity:0,y:12}}
        animate={{opacity:1,y:0}}
        transition={{duration:.4}}
        className="space-y-8 relative"
      >

        {/* 🌈 GLOBAL BACKGROUND GLOW */}

        <div className="absolute -top-24 left-1/3 w-[500px] h-[500px] bg-indigo-300/20 blur-[120px] rounded-full"></div>


        {/* ================= HEADER ================= */}

        <div className="
        relative
        flex flex-col md:flex-row md:items-center md:justify-between
        gap-4
        p-5 md:p-6
        rounded-2xl
        border border-indigo-200
        bg-gradient-to-r from-indigo-50 via-white to-purple-50
        shadow-sm
        ">

          {/* LEFT */}

          <div>

            <h2 className="text-xl md:text-2xl font-bold text-gray-800">
              CRM Dashboard
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Monitor analytics, performance and actions in real-time
            </p>

          </div>


          {/* ================= ROLE SWITCH (UPGRADED) ================= */}

          <div className="
          flex items-center
          bg-white/70 backdrop-blur
          border border-indigo-200
          rounded-xl p-1
          shadow-sm
          ">

            {/* SALES */}

            <motion.button
              onClick={()=>setRole("sales")}
              whileTap={{scale:0.95}}
              className={`
              relative flex items-center gap-2
              px-4 py-1.5 text-sm rounded-lg transition
              ${role==="sales" ? "text-white" : "text-gray-600 hover:text-indigo-600"}
              `}
            >

              {role==="sales" && (
                <motion.div
                  layoutId="roleToggle"
                  className="
                  absolute inset-0 rounded-lg
                  bg-gradient-to-r from-indigo-500 to-purple-500
                  shadow-md
                  "
                />
              )}

              <LayoutDashboard size={14} className="relative z-10"/>

              <span className="relative z-10">
                Sales
              </span>

            </motion.button>


            {/* ADMIN */}

            <motion.button
              onClick={()=>setRole("admin")}
              whileTap={{scale:0.95}}
              className={`
              relative flex items-center gap-2
              px-4 py-1.5 text-sm rounded-lg transition
              ${role==="admin" ? "text-white" : "text-gray-600 hover:text-indigo-600"}
              `}
            >

              {role==="admin" && (
                <motion.div
                  layoutId="roleToggle"
                  className="
                  absolute inset-0 rounded-lg
                  bg-gradient-to-r from-indigo-500 to-purple-500
                  shadow-md
                  "
                />
              )}

              <Shield size={14} className="relative z-10"/>

              <span className="relative z-10">
                Admin
              </span>

            </motion.button>

          </div>

        </div>


        {/* ================= DASHBOARD CONTENT ================= */}

        <motion.div
          key={role}
          initial={{opacity:0,y:10}}
          animate={{opacity:1,y:0}}
          transition={{duration:.35}}
          className="relative"
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