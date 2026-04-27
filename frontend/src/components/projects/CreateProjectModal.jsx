import { motion } from "framer-motion";
import { useState } from "react";
import { FaTimes, FaPlus } from "react-icons/fa";

export default function CreateProjectModal({ onClose }) {

  /*
  |--------------------------------------------------------------------------
  | ROLE (later from AuthContext)
  |--------------------------------------------------------------------------
  */

  const role = "Admin";
  const canCreate = role === "Admin" || role === "Senior PM";

  /*
  |--------------------------------------------------------------------------
  | FORM STATE
  |--------------------------------------------------------------------------
  */

  const [form,setForm] = useState({
    projectId: "PRJ-" + Math.floor(Math.random()*1000),
    name:"",
    customer:"",
    address:"",
    type:"Interior",
    contractDate:"",
    start:"",
    end:"",
    pm:"",
    value:"",
    currency:"INR",
    status:"Preconstruction"
  });

  const handleChange = (e)=>{
    setForm({...form,[e.target.name]:e.target.value});
  };

  /*
  |--------------------------------------------------------------------------
  | UI
  |--------------------------------------------------------------------------
  */

  if(!canCreate){
    return null;
  }

  return(

    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">

      {/* BORDER */}

      <div className="
      p-[1.5px]
      rounded-2xl
      bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400
      w-full max-w-3xl
      ">

        {/* MODAL */}

        <motion.div
          initial={{opacity:0,scale:0.95,y:20}}
          animate={{opacity:1,scale:1,y:0}}
          className="
          relative
          rounded-2xl
          bg-gradient-to-br from-white via-indigo-50/40 to-purple-50/40
          p-6 md:p-7
          space-y-6
          shadow-[0_20px_60px_rgba(0,0,0,0.15)]
          max-h-[85vh] overflow-y-auto
          "
        >

          {/* GLOW */}

          <div className="absolute -top-20 -right-20 w-60 h-60 bg-purple-300/20 blur-3xl rounded-full"></div>


          {/* HEADER */}

          <div className="flex items-center justify-between">

            <h2 className="text-lg font-semibold text-gray-800">
              Create Project
            </h2>

            <button onClick={onClose}>
              <FaTimes className="text-gray-500" />
            </button>

          </div>


          {/* ================= BASIC DETAILS ================= */}

          <div className="grid md:grid-cols-2 gap-4">

            <input
              value={form.projectId}
              readOnly
              className="input"
              placeholder="Project ID"
            />

            <input
              name="name"
              onChange={handleChange}
              className="input"
              placeholder="Project Name"
            />

            <input
              name="customer"
              onChange={handleChange}
              className="input"
              placeholder="Customer Name"
            />

            <input
              name="pm"
              onChange={handleChange}
              className="input"
              placeholder="Project Manager"
            />

          </div>


          {/* ================= ADDRESS ================= */}

          <textarea
            name="address"
            onChange={handleChange}
            className="input"
            placeholder="Project Address"
          />


          {/* ================= TYPE & STATUS ================= */}

          <div className="grid md:grid-cols-3 gap-4">

            <select name="type" onChange={handleChange} className="input">
              <option>Interior</option>
              <option>Architecture</option>
              <option>Renovation</option>
            </select>

            <input
              value={form.status}
              readOnly
              className="input bg-gray-100"
            />

            <select name="currency" onChange={handleChange} className="input">
              <option>INR</option>
              <option>USD</option>
            </select>

          </div>


          {/* ================= DATES ================= */}

          <div className="grid md:grid-cols-3 gap-4">

            <input type="date" name="contractDate" onChange={handleChange} className="input"/>
            <input type="date" name="start" onChange={handleChange} className="input"/>
            <input type="date" name="end" onChange={handleChange} className="input"/>

          </div>


          {/* ================= VALUE ================= */}

          <input
            name="value"
            onChange={handleChange}
            className="input"
            placeholder="Project Value"
          />


          {/* ================= ACTION ================= */}

          <div className="flex justify-end gap-3 pt-2 border-t">

            <button onClick={onClose} className="text-gray-500">
              Cancel
            </button>

            <motion.button
              whileHover={{scale:1.05}}
              whileTap={{scale:0.95}}
              className="
              flex items-center gap-2
              px-5 py-2
              rounded-lg
              text-white
              bg-gradient-to-r from-indigo-500 to-purple-500
              shadow-md
              "
            >
              <FaPlus />
              Create Project
            </motion.button>

          </div>

        </motion.div>

      </div>

    </div>

  );

}