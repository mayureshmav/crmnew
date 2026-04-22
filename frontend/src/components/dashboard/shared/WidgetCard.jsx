import { motion } from "framer-motion";

export default function WidgetCard({
title,
icon: Icon,
theme = "indigo",
children,
rightContent
}){

/*
|--------------------------------------------------------------------------
| THEME SYSTEM
|--------------------------------------------------------------------------
*/

const themes = {
indigo:{
bg:"from-white via-indigo-50 to-purple-50",
border:"border-indigo-200",
glow:"bg-indigo-300/20"
},
blue:{
bg:"from-white via-blue-50 to-indigo-50",
border:"border-blue-200",
glow:"bg-blue-300/20"
},
emerald:{
bg:"from-white via-emerald-50 to-teal-50",
border:"border-emerald-200",
glow:"bg-emerald-300/20"
},
orange:{
bg:"from-white via-orange-50 to-amber-50",
border:"border-orange-200",
glow:"bg-orange-300/20"
},
purple:{
bg:"from-white via-purple-50 to-indigo-50",
border:"border-purple-200",
glow:"bg-purple-300/20"
}
};

const t = themes[theme];

/*
|--------------------------------------------------------------------------
| LAYOUT
|--------------------------------------------------------------------------
*/

return(

<motion.div
initial={{opacity:0,y:12}}
animate={{opacity:1,y:0}}
whileHover={{y:-3}}
transition={{duration:.4}}
className={`
group
relative
rounded-2xl
border ${t.border}
bg-gradient-to-br ${t.bg}
shadow-md
p-5 md:p-6
overflow-hidden
`}
>

{/* Glow */}

<div className={`
absolute -top-16 -right-16 w-64 h-64
${t.glow}
blur-3xl rounded-full
transition duration-500
group-hover:scale-110
`} />

<div className="relative space-y-5">

{/* HEADER */}

<div className="flex items-center justify-between">

<div className="flex items-center gap-2">

{Icon && (
<div className="
p-2 rounded-lg
bg-white/80 backdrop-blur
border shadow-sm
">
<Icon size={16}/>
</div>
)}

<h3 className="text-gray-800 font-semibold text-sm md:text-base">
{title}
</h3>

</div>

{rightContent}

</div>

{/* CONTENT */}

<div className="text-sm md:text-base">
{children}
</div>

</div>

</motion.div>

)

}