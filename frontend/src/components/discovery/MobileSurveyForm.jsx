import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaCamera,
  FaUpload,
  FaSave,
  FaCloudUploadAlt
} from "react-icons/fa";

export default function MobileSurveyForm({ leadId = "LD-1021" }) {

  const [form,setForm] = useState({
    workType:"",
    area:"",
    description:"",
    budget:"",
    timeline:"",
    photos:[]
  });

  const [syncStatus,setSyncStatus] = useState("Online");

  const workTypes = [
    "Interior Design",
    "Renovation",
    "Construction",
    "Commercial Fitout",
    "Landscape",
    "Other"
  ];

  /* ---------------- PHOTO UPLOAD ---------------- */

  const handlePhotos = (e)=>{
    const files = Array.from(e.target.files);

    const preview = files.map(file=>({
      file,
      url:URL.createObjectURL(file)
    }));

    setForm({...form,photos:[...form.photos,...preview]});
  };

  /* ---------------- OFFLINE STORAGE ---------------- */

  useEffect(()=>{

    const draft = localStorage.getItem("surveyDraft");

    if(draft){
      setForm(JSON.parse(draft));
    }

  },[]);

  useEffect(()=>{

    localStorage.setItem("surveyDraft",JSON.stringify(form));

  },[form]);

  /* ---------------- SUBMIT ---------------- */

  const handleSubmit = ()=>{

    const payload = {
      ...form,
      leadId,
      createdAt:new Date()
    };

    console.log("Survey Saved:",payload);

    alert("Survey saved and linked to Lead "+leadId);

  };

  /* ---------------- UI ---------------- */

  return (

  <motion.div
  initial={{opacity:0,y:30}}
  animate={{opacity:1,y:0}}
  transition={{duration:.4}}
  className="space-y-6"
  >

  {/* HEADER */}

  <div className="flex justify-between items-center">

  <div>

  <h2 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
  Mobile Site Survey Capture
  </h2>

  <p className="text-sm text-gray-500">
  Linked Lead: {leadId}
  </p>

  </div>

  <span className="text-xs bg-green-100 text-green-600 px-3 py-1 rounded-full">
  {syncStatus}
  </span>

  </div>

  {/* FORM CARD */}

  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">

  <div className="grid md:grid-cols-2 gap-6">

  {/* WORK TYPE */}

  <div>

  <label className="text-sm font-medium text-gray-600">
  Type of Work
  </label>

  <select
  value={form.workType}
  onChange={(e)=>setForm({...form,workType:e.target.value})}
  className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
  >

  <option>Select work type</option>

  {workTypes.map((w,i)=>(
  <option key={i}>{w}</option>
  ))}

  </select>

  </div>

  {/* AREA */}

  <div>

  <label className="text-sm font-medium text-gray-600">
  Measurement / Area
  </label>

  <input
  placeholder="Ex: 1200 sq ft"
  value={form.area}
  onChange={(e)=>setForm({...form,area:e.target.value})}
  className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
  />

  </div>

  {/* BUDGET */}

  <div>

  <label className="text-sm font-medium text-gray-600">
  Client Budget
  </label>

  <input
  placeholder="₹"
  value={form.budget}
  onChange={(e)=>setForm({...form,budget:e.target.value})}
  className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
  />

  </div>

  {/* TIMELINE */}

  <div>

  <label className="text-sm font-medium text-gray-600">
  Client Timeline
  </label>

  <input
  placeholder="Ex: 3 Months"
  value={form.timeline}
  onChange={(e)=>setForm({...form,timeline:e.target.value})}
  className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
  />

  </div>

  {/* DESCRIPTION */}

  <div className="md:col-span-2">

  <label className="text-sm font-medium text-gray-600">
  Description / Notes
  </label>

  <textarea
  rows="4"
  placeholder="Write site observations..."
  value={form.description}
  onChange={(e)=>setForm({...form,description:e.target.value})}
  className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
  />

  </div>

  </div>

  {/* PHOTO SECTION */}

  <div className="mt-6">

  <label className="text-sm font-medium text-gray-600">
  Site Photos
  </label>

  <div className="mt-3 border-2 border-dashed rounded-xl p-6 text-center hover:border-indigo-500 transition">

  <FaUpload className="mx-auto text-2xl text-indigo-500"/>

  <p className="text-sm text-gray-500 mt-2">
  Upload or capture site photos
  </p>

  <input
  type="file"
  multiple
  accept="image/*"
  capture="environment"
  onChange={handlePhotos}
  className="mt-4"
  />

  </div>

  {/* PREVIEW */}

  {form.photos.length > 0 && (

  <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mt-4">

  {form.photos.map((img,i)=>(
  <motion.img
  whileHover={{scale:1.05}}
  key={i}
  src={img.url}
  className="h-24 w-full object-cover rounded-lg shadow"
  />
  ))}

  </div>

  )}

  </div>

  {/* ACTION BUTTON */}

  <div className="flex justify-end mt-6">

  <motion.button
  whileHover={{scale:1.05}}
  whileTap={{scale:.95}}
  onClick={handleSubmit}
  className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-6 py-3 rounded-lg shadow-lg"
  >

  <FaSave/>

  Save Survey

  </motion.button>

  </div>

  </div>

  </motion.div>

  );

}