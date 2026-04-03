import React, { useState } from "react";
import MainLayout from "../layout/MainLayout";
import { motion } from "framer-motion";

export default function ProjectBoard() {

  const [activeTab, setActiveTab] = useState("tasks");

  const project = {
    name: "Enterprise CRM Migration",
    client: "Acme Corp",
    manager: "Alex Johnson",
    value: "₹35,00,000",
    status: "In Progress",
    start: "01 Apr 2026",
    end: "15 Jun 2026"
  };

  const tasks = [
    { id:"T-101", name:"Database Schema Design", owner:"Sarah M.", progress:100, status:"Completed", priority:"High" },
    { id:"T-102", name:"API Development", owner:"Rahul S.", progress:65, status:"In Progress", priority:"High" },
    { id:"T-103", name:"Frontend Dashboard", owner:"Neha G.", progress:30, status:"In Progress", priority:"Medium" },
    { id:"T-104", name:"Security Audit", owner:"Amit P.", progress:0, status:"Pending", priority:"Critical" }
  ];

  const milestones = [
    {title:"Requirement Gathering", status:"Completed", date:"10 Apr"},
    {title:"Data Migration", status:"In Progress", date:"25 Apr"},
    {title:"UAT Signoff", status:"Upcoming", date:"20 May"}
  ];

  const tabs = ["tasks","timeline","milestones","budget"];

  return (

    <MainLayout>

      <div className="space-y-8">

        {/* PAGE HEADER */}

        <motion.div
          initial={{opacity:0,y:20}}
          animate={{opacity:1,y:0}}
          className="flex flex-col md:flex-row md:justify-between md:items-center gap-4"
        >

          <div>

            <h1 className="text-3xl font-bold text-gray-800">
              Project Board
            </h1>

            <p className="text-gray-500 text-sm">
              Manage project tasks, milestones and financials
            </p>

          </div>

          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm shadow">
            + Add Task
          </button>

        </motion.div>


        {/* PROJECT SUMMARY */}

        <motion.div
          initial={{opacity:0,y:20}}
          animate={{opacity:1,y:0}}
          className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-xl p-6 shadow-lg"
        >

          <div className="grid md:grid-cols-4 gap-6">

            <div>
              <p className="text-sm opacity-80">Project</p>
              <p className="font-semibold text-lg">{project.name}</p>
            </div>

            <div>
              <p className="text-sm opacity-80">Client</p>
              <p className="font-semibold">{project.client}</p>
            </div>

            <div>
              <p className="text-sm opacity-80">Manager</p>
              <p className="font-semibold">{project.manager}</p>
            </div>

            <div>
              <p className="text-sm opacity-80">Status</p>
              <span className="bg-white text-indigo-600 px-3 py-1 rounded-full text-xs font-semibold">
                {project.status}
              </span>
            </div>

          </div>

        </motion.div>


        {/* TABS */}

        <div className="flex flex-wrap gap-3">

          {tabs.map(tab=>(
            <button
              key={tab}
              onClick={()=>setActiveTab(tab)}
              className={`px-5 py-2 rounded-lg text-sm font-medium capitalize transition
              ${
                activeTab === tab
                ? "bg-indigo-600 text-white shadow"
                : "bg-white border border-gray-200 hover:bg-gray-50"
              }`}
            >
              {tab}
            </button>
          ))}

        </div>


        {/* TASKS TAB */}

        {activeTab === "tasks" && (

          <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            className="bg-white rounded-xl shadow border border-gray-200 overflow-hidden"
          >

            <table className="w-full text-sm">

              <thead className="bg-gray-50 text-gray-600">
                <tr>
                  <th className="p-4 text-left">Task</th>
                  <th className="p-4 text-left">Owner</th>
                  <th className="p-4 text-left">Progress</th>
                  <th className="p-4 text-left">Status</th>
                  <th className="p-4 text-left">Priority</th>
                </tr>
              </thead>

              <tbody>

                {tasks.map(task=>(
                  <tr key={task.id} className="border-t hover:bg-gray-50">

                    <td className="p-4">
                      <p className="font-medium">{task.name}</p>
                      <p className="text-xs text-indigo-500">{task.id}</p>
                    </td>

                    <td className="p-4">{task.owner}</td>

                    <td className="p-4">

                      <div className="w-full bg-gray-200 h-2 rounded-full">

                        <div
                          className="bg-indigo-600 h-2 rounded-full transition-all"
                          style={{width:`${task.progress}%`}}
                        />

                      </div>

                    </td>

                    <td className="p-4">

                      <span className={`text-xs px-2 py-1 rounded-full
                      ${
                        task.status === "Completed"
                        ? "bg-green-100 text-green-600"
                        : task.status === "In Progress"
                        ? "bg-indigo-100 text-indigo-600"
                        : "bg-yellow-100 text-yellow-600"
                      }`}>
                        {task.status}
                      </span>

                    </td>

                    <td className="p-4">

                      <span className={`text-xs px-2 py-1 rounded-full
                      ${
                        task.priority === "Critical"
                        ? "bg-red-100 text-red-600"
                        : task.priority === "High"
                        ? "bg-orange-100 text-orange-600"
                        : "bg-gray-100 text-gray-600"
                      }`}>
                        {task.priority}
                      </span>

                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </motion.div>

        )}


        {/* TIMELINE TAB */}

        {activeTab === "timeline" && (

          <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            className="bg-white rounded-xl shadow border border-gray-200 p-6 space-y-6"
          >

            <h3 className="text-lg font-semibold text-gray-700">
              Project Timeline
            </h3>

            {tasks.map(task=>(
              <div key={task.id}>

                <div className="flex justify-between mb-1 text-sm">
                  <span className="font-medium">{task.name}</span>
                  <span className="text-indigo-600">{task.progress}%</span>
                </div>

                <div className="w-full bg-gray-200 h-2 rounded-full">

                  <div
                    className="bg-indigo-600 h-2 rounded-full"
                    style={{width:`${task.progress}%`}}
                  />

                </div>

              </div>
            ))}

          </motion.div>

        )}


        {/* MILESTONES TAB */}

        {activeTab === "milestones" && (

          <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            className="grid md:grid-cols-3 gap-6"
          >

            {milestones.map((m,i)=>(
              <div key={i} className="bg-white border border-gray-200 rounded-xl shadow p-6">

                <h3 className="font-semibold text-gray-800">
                  {m.title}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Deadline: {m.date}
                </p>

                <span className={`inline-block mt-3 px-3 py-1 rounded-full text-xs
                ${
                  m.status === "Completed"
                  ? "bg-green-100 text-green-600"
                  : m.status === "In Progress"
                  ? "bg-indigo-100 text-indigo-600"
                  : "bg-yellow-100 text-yellow-600"
                }`}>
                  {m.status}
                </span>

              </div>
            ))}

          </motion.div>

        )}


        {/* BUDGET TAB */}

        {activeTab === "budget" && (

          <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            className="space-y-6"
          >

            <div className="grid md:grid-cols-3 gap-6">

              <div className="bg-indigo-50 p-6 rounded-xl">

                <p className="text-sm text-gray-500">
                  Planned Budget
                </p>

                <h2 className="text-2xl font-bold text-indigo-600">
                  ₹35,00,000
                </h2>

              </div>

              <div className="bg-blue-50 p-6 rounded-xl">

                <p className="text-sm text-gray-500">
                  Actual Spend
                </p>

                <h2 className="text-2xl font-bold text-blue-600">
                  ₹18,50,000
                </h2>

              </div>

              <div className="bg-green-50 p-6 rounded-xl">

                <p className="text-sm text-gray-500">
                  Remaining Budget
                </p>

                <h2 className="text-2xl font-bold text-green-600">
                  ₹16,50,000
                </h2>

              </div>

            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow">

              <p className="text-sm mb-2">Budget Utilization</p>

              <div className="w-full bg-gray-200 h-3 rounded-full">

                <div
                  className="bg-indigo-600 h-3 rounded-full"
                  style={{width:"52%"}}
                />

              </div>

            </div>

          </motion.div>

        )}

      </div>

    </MainLayout>

  );

}