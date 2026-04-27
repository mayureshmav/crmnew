import MainLayout from "../layout/MainLayout";
import { motion } from "framer-motion";
import { useState } from "react";

import ProjectHeader from "../components/projects/ProjectHeader";
import ProjectStats from "../components/projects/ProjectStats";
import ProjectTable from "../components/projects/ProjectTable";
import CreateProjectModal from "../components/projects/CreateProjectModal";
import ProjectDetails from "../components/projects/ProjectDetails";

export default function Projects(){

  const [showCreate,setShowCreate] = useState(false);
  const [selectedProject,setSelectedProject] = useState(null); // 🔥 NEW

  const [projects,setProjects] = useState([
    {
      id:1,
      projectId:"PRJ-001",
      name:"Modern Villa Interior",
      customer:"Rahul Sharma",
      pm:"Amit",
      status:"Preconstruction",
      start:"2026-04-20",
      end:"2026-06-20",
      value:"₹12,50,000",
      currency:"INR",
      progress:60
    }
  ]);

  return(

    <MainLayout>

      <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        className="space-y-6"
      >

        {/* 🔥 IF PROJECT SELECTED → SHOW DETAILS */}
        {selectedProject ? (
          <ProjectDetails
            project={selectedProject}
            onBack={()=>setSelectedProject(null)}
          />
        ) : (
          <>
            {/* HEADER */}
            <ProjectHeader onCreate={()=>setShowCreate(true)} />

            {/* STATS */}
            <ProjectStats projects={projects} />

            {/* TABLE */}
            <ProjectTable
              projects={projects}
              onSelect={(p)=>setSelectedProject(p)} // 🔥 IMPORTANT
            />

            {/* MODAL */}
            {showCreate && (
              <CreateProjectModal onClose={()=>setShowCreate(false)} />
            )}
          </>
        )}

      </motion.div>

    </MainLayout>

  )
}