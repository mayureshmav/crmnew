import { motion } from "framer-motion";

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-slate-100 to-blue-100 p-6">

      {/* Background glow effect */}

      <div className="absolute w-[600px] h-[600px] bg-indigo-300 opacity-20 blur-3xl rounded-full -top-20 -left-20"></div>

      <div className="absolute w-[600px] h-[600px] bg-blue-300 opacity-20 blur-3xl rounded-full -bottom-20 -right-20"></div>

      {/* Auth card */}

      <motion.div
        initial={{ opacity:0, y:30 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:0.4 }}
        className="relative w-full max-w-md bg-white/80 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-xl p-8"
      >

        {children}

      </motion.div>

    </div>
  );
};

export default AuthLayout;