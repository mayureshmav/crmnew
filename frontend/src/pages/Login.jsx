import { useState } from "react";
import { FaEnvelope, FaLock, FaGoogle, FaMicrosoft } from "react-icons/fa";
import { motion } from "framer-motion";
import AuthLayout from "../layout/AuthLayout";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [remember,setRemember] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    const userData = {
      name: "Admin User",
      email: email,
      role: "admin"
    };
    login(userData);
    navigate("/dashboard");

    // later we connect authentication logic
  };

  return (

    <AuthLayout>

      {/* Logo */}

      <div className="text-center mb-6">

        <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-r from-indigo-500 to-blue-500 text-white flex items-center justify-center text-xl font-bold shadow">
          C
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mt-3">
          Iterac
        </h2>

        <p className="text-sm text-gray-500">
          Sign in to continue
        </p>

      </div>

      {/* Login Form */}

      <form onSubmit={handleLogin} className="space-y-4">

        {/* Email */}

        <div className="flex items-center gap-3 border border-gray-200 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-indigo-300">

          <FaEnvelope className="text-gray-400"/>

          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full outline-none text-sm"
            required
          />

        </div>

        {/* Password */}

        <div className="flex items-center gap-3 border border-gray-200 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-indigo-300">

          <FaLock className="text-gray-400"/>

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="w-full outline-none text-sm"
            required
          />

        </div>

        {/* Remember + Forgot */}

        <div className="flex items-center justify-between text-sm">

          <label className="flex items-center gap-2 text-gray-600">

            <input
              type="checkbox"
              checked={remember}
              onChange={()=>setRemember(!remember)}
            />

            Remember me

          </label>

          <a
            href="/forgot-password"
            className="text-indigo-600 hover:underline"
          >
            Forgot password?
          </a>

        </div>

        {/* Login Button */}

        <motion.button
          whileHover={{ scale:1.02 }}
          whileTap={{ scale:0.98 }}
          type="submit"
          className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-2 rounded-lg font-medium shadow hover:shadow-lg"
        >
          Sign In
        </motion.button>

      </form>

      {/* Divider */}

      <div className="flex items-center gap-3 my-5">

        <div className="flex-1 h-[1px] bg-gray-200"></div>

        <span className="text-xs text-gray-400">
          OR CONTINUE WITH
        </span>

        <div className="flex-1 h-[1px] bg-gray-200"></div>

      </div>

      {/* SSO Buttons */}

      <div className="grid grid-cols-2 gap-3">

        <button className="flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-2 text-sm hover:bg-gray-50">

          <FaGoogle className="text-red-500"/>

          Google

        </button>

        <button className="flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-2 text-sm hover:bg-gray-50">

          <FaMicrosoft className="text-blue-500"/>

          Microsoft

        </button>

      </div>

      {/* Register */}

      <p className="text-sm text-gray-600 text-center mt-6">

        Don’t have an account?

        <a
          href="/register"
          className="text-indigo-600 font-medium ml-1 hover:underline"
        >
          Create account
        </a>

      </p>

    </AuthLayout>

  );
};

export default Login;