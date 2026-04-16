import { motion } from "framer-motion";
import { useState } from "react";

export default function LeadFormModal({close}){

const[form,setForm]=useState({
name:"",
phone:"",
email:"",
source:"",
budget:"",
timeline:"",
notes:""
})

const handleChange=(e)=>{
setForm({...form,[e.target.name]:e.target.value})
}

const submit=(e)=>{
e.preventDefault()
console.log("Lead Saved",form)
close()
}

return(

<div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

<motion.div
initial={{scale:.8,opacity:0}}
animate={{scale:1,opacity:1}}
transition={{duration:.3}}
className="bg-white rounded-xl shadow-xl p-6 w-[520px]"
>

<h2 className="text-xl font-semibold mb-4">
Add New Lead
</h2>

<form
onSubmit={submit}
className="grid grid-cols-2 gap-3"
>

<input
name="name"
placeholder="Name"
className="border p-2 rounded"
onChange={handleChange}
/>

<input
name="phone"
placeholder="Phone"
className="border p-2 rounded"
onChange={handleChange}
/>

<input
name="email"
placeholder="Email"
className="border p-2 rounded"
onChange={handleChange}
/>

<select
name="source"
className="border p-2 rounded"
onChange={handleChange}
>

<option>Source</option>
<option>IndiaMart</option>
<option>MagicBricks</option>
<option>Website</option>

</select>

<input
name="budget"
placeholder="Budget"
className="border p-2 rounded"
onChange={handleChange}
/>

<input
name="timeline"
placeholder="Timeline"
className="border p-2 rounded"
onChange={handleChange}
/>

<textarea
name="notes"
placeholder="Notes"
className="border p-2 rounded col-span-2"
onChange={handleChange}
/>

<div className="col-span-2 flex justify-end gap-3 mt-2">

<button
type="button"
onClick={close}
className="px-4 py-2 border rounded-lg"
>
Cancel
</button>

<button
className="px-4 py-2 text-white rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600"
>
Save Lead
</button>

</div>

</form>

</motion.div>

</div>

)

}