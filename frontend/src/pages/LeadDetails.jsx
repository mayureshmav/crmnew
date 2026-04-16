import MainLayout from "../layout/MainLayout";
import { motion } from "framer-motion";
import {
FaPhone,
FaMapMarkerAlt,
FaUserTie,
FaCalendarAlt,
FaFileInvoice,
FaFire,
FaEnvelope
} from "react-icons/fa";

const LeadDetails = () => {

const lead = {
id: "LD-1023",
name: "Rahul Sharma",
phone: "9876543210",
city: "Delhi",
source: "IndiaMart",
budget: "12L",
status: "New",
email: "rahul@gmail.com",
assignedRep: "Amit Verma",
timeline: "3 Months",
score: "Hot",
nextFollowup: "2026-04-20"
};

const activities = [
{ id: 1, text: "Lead created", date: "Today" },
{ id: 2, text: "Initial call completed", date: "Yesterday" },
{ id: 3, text: "Meeting scheduled", date: "2 days ago" }
];

return (

<MainLayout>

<motion.div
initial={{ opacity: 0, y: 10 }}
animate={{ opacity: 1, y: 0 }}
className="space-y-6"
>

{/* PAGE TITLE */}

<h1 className="text-2xl font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
Lead Details
</h1>


{/* LEAD PROFILE CARD */}

<div className="bg-white/70 backdrop-blur border rounded-xl p-6 shadow-lg">

<div className="flex flex-col lg:flex-row justify-between gap-6">

{/* LEFT */}

<div className="flex items-center gap-4">

<div className="w-14 h-14 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white text-lg font-bold">
{lead.name.charAt(0)}
</div>

<div>

<h2 className="text-xl font-semibold">
{lead.name}
</h2>

<p className="text-sm text-gray-400">
Lead ID : {lead.id}
</p>

<p className="text-gray-500 flex items-center gap-2 mt-1">
<FaPhone /> {lead.phone}
</p>

<p className="text-gray-500 flex items-center gap-2">
<FaMapMarkerAlt /> {lead.city}
</p>

</div>

</div>

{/* RIGHT */}

<div className="flex flex-wrap gap-3">

<button className="px-4 py-2 rounded-lg text-sm text-white bg-gradient-to-r from-green-500 to-emerald-600 flex items-center gap-2 shadow">
<FaPhone /> Call
</button>

<button className="px-4 py-2 rounded-lg text-sm text-white bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center gap-2 shadow">
<FaCalendarAlt /> Schedule Meeting
</button>

<button className="px-4 py-2 rounded-lg text-sm text-white bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center gap-2 shadow">
<FaFileInvoice /> Create Quote
</button>

</div>

</div>

</div>


{/* LEAD INFORMATION */}

<div className="bg-white/70 backdrop-blur border rounded-xl p-6 shadow-lg">

<h3 className="font-semibold mb-4 text-gray-700">
Lead Information
</h3>

<div className="grid md:grid-cols-3 gap-6 text-sm">

<div>
<span className="text-gray-500">Source</span>
<p className="font-medium">{lead.source}</p>
</div>

<div>
<span className="text-gray-500">Budget</span>
<p className="font-medium text-green-600">
₹{lead.budget}
</p>
</div>

<div>
<span className="text-gray-500">Email</span>
<p className="font-medium flex items-center gap-2">
<FaEnvelope /> {lead.email}
</p>
</div>

<div>
<span className="text-gray-500">Assigned Rep</span>
<p className="font-medium flex items-center gap-2">
<FaUserTie /> {lead.assignedRep}
</p>
</div>

<div>
<span className="text-gray-500">Timeline</span>
<p className="font-medium">{lead.timeline}</p>
</div>

<div>
<span className="text-gray-500">Lead Score</span>

<span className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-3 py-1 rounded-full shadow">
<FaFire /> {lead.score}
</span>

</div>

<div>
<span className="text-gray-500">Next Follow-Up</span>

<p className="font-medium text-indigo-600 flex items-center gap-2">
<FaCalendarAlt /> {lead.nextFollowup}
</p>

</div>

<div>
<span className="text-gray-500">Status</span>

<span className="bg-indigo-100 text-indigo-700 text-xs px-3 py-1 rounded-full">
{lead.status}
</span>

</div>

</div>

</div>


{/* ACTIVITY TIMELINE */}

<div className="bg-white/70 backdrop-blur border rounded-xl p-6 shadow-lg">

<h3 className="font-semibold mb-4">
Activity Timeline
</h3>

<div className="space-y-4">

{activities.map((activity)=>(
<motion.div
key={activity.id}
initial={{opacity:0,x:-20}}
animate={{opacity:1,x:0}}
className="flex justify-between border-b pb-3"
>

<p className="text-gray-700">
{activity.text}
</p>

<span className="text-xs text-gray-400">
{activity.date}
</span>

</motion.div>
))}

</div>

</div>


{/* FOLLOW UP SCHEDULER */}

<div className="bg-white/70 backdrop-blur border rounded-xl p-6 shadow-lg">

<h3 className="font-semibold mb-4">
Schedule Follow-Up
</h3>

<div className="flex gap-3">

<input
type="datetime-local"
className="border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-300"
/>

<button className="px-4 py-2 text-white rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 shadow">
Set Reminder
</button>

</div>

</div>


{/* NOTES */}

<div className="bg-white/70 backdrop-blur border rounded-xl p-6 shadow-lg">

<h3 className="font-semibold mb-4">
Notes
</h3>

<textarea
placeholder="Add notes about this lead..."
className="w-full border rounded-lg p-3 text-sm focus:ring-2 focus:ring-indigo-300"
rows="4"
/>

<button className="mt-3 px-4 py-2 text-white rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 shadow">
Save Note
</button>

</div>

</motion.div>

</MainLayout>

);

};

export default LeadDetails;