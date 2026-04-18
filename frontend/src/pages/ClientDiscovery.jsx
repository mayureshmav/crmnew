import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MainLayout from "../layout/MainLayout";
import MobileSurveyForm from "../components/discovery/MobileSurveyForm";
import MoodboardSelector from "../components/discovery/MoodboardSelector";
import DiscoveryReview from "../components/discovery/DiscoveryReview";

export default function ClientDiscovery() {

  const [tab,setTab] = useState("survey");
  const [discoveryData,setDiscoveryData] = useState({});
  const [mood,setMood] = useState(null);

  const tabs = [
    { id:"survey", label:"Mobile Site Survey" },
    { id:"mood", label:"Moodboard Selection" },
    { id:"review", label:"Discovery Review" }
  ];

  return(

  <MainLayout>

  {/* PAGE BACKGROUND */}

  <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-blue-50 p-6">

  <div className="max-w-7xl mx-auto space-y-8">

  {/* HEADER */}

  <motion.div
  initial={{opacity:0,y:20}}
  animate={{opacity:1,y:0}}
  transition={{duration:0.4}}
  className="flex flex-col md:flex-row md:items-center md:justify-between"
  >

  <div>

  <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
  Client Intake & Discovery
  </h1>

  <p className="text-gray-500 text-sm mt-1">
  Capture site survey, select moodboards and finalize discovery before quotation
  </p>

  </div>

  </motion.div>


  {/* TABS NAVIGATION */}

  <motion.div
  initial={{opacity:0}}
  animate={{opacity:1}}
  className="flex flex-wrap gap-3"
  >

  {tabs.map((t)=>{

  const active = tab===t.id;

  return(

  <button
  key={t.id}
  onClick={()=>setTab(t.id)}
  className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200 shadow-sm
  ${
  active
  ?"bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md"
  :"bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
  }`}
  >

  {t.label}

  </button>

  );

  })}

  </motion.div>


  {/* CONTENT CONTAINER */}

  <div className="relative">

  <AnimatePresence mode="wait">

  {tab==="survey" && (

  <motion.div
  key="survey"
  initial={{opacity:0,y:20}}
  animate={{opacity:1,y:0}}
  exit={{opacity:0,y:-20}}
  transition={{duration:0.3}}
  className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6"
  >

  <MobileSurveyForm
  data={discoveryData}
  setData={setDiscoveryData}
  />

  </motion.div>

  )}


  {tab==="mood" && (

  <motion.div
  key="mood"
  initial={{opacity:0,y:20}}
  animate={{opacity:1,y:0}}
  exit={{opacity:0,y:-20}}
  transition={{duration:0.3}}
  className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6"
  >

  <MoodboardSelector
  selected={mood}
  setSelected={setMood}
  />

  </motion.div>

  )}


  {tab==="review" && (

  <motion.div
  key="review"
  initial={{opacity:0,y:20}}
  animate={{opacity:1,y:0}}
  exit={{opacity:0,y:-20}}
  transition={{duration:0.3}}
  className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6"
  >

  <DiscoveryReview
  data={discoveryData}
  mood={mood}
  />

  </motion.div>

  )}

  </AnimatePresence>

  </div>

  </div>

  </div>

  </MainLayout>

  );

}