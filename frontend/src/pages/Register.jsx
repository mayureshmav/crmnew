import { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { motion } from "framer-motion";
import AuthLayout from "../layout/AuthLayout";

const Register = () => {

  const [form,setForm] = useState({
    name:"",
    email:"",
    password:"",
    confirmPassword:"",
    role:"sales"
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:e.target.value
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    console.log(form);

    // later connect backend / auth system
  };

  return (

    <AuthLayout>

      {/* Header */}

      <div className="text-center mb-6">

        <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-r from-indigo-500 to-blue-500 text-white flex items-center justify-center text-xl font-bold shadow">
          C
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mt-3">
          Create Account
        </h2>

        <p className="text-sm text-gray-500">
          Start using CRM Suite
        </p>

      </div>

      {/* Register Form */}

      <form onSubmit={handleRegister} className="space-y-4">

        {/* Name */}

        <div className="flex items-center gap-3 border border-gray-200 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-indigo-300">

          <FaUser className="text-gray-400"/>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full outline-none text-sm"
            required
          />

        </div>

        {/* Email */}

        <div className="flex items-center gap-3 border border-gray-200 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-indigo-300">

          <FaEnvelope className="text-gray-400"/>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full outline-none text-sm"
            required
          />

        </div>

        {/* Password */}

        <div className="flex items-center gap-3 border border-gray-200 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-indigo-300">

          <FaLock className="text-gray-400"/>

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full outline-none text-sm"
            required
          />

        </div>

        {/* Confirm Password */}

        <div className="flex items-center gap-3 border border-gray-200 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-indigo-300">

          <FaLock className="text-gray-400"/>

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            className="w-full outline-none text-sm"
            required
          />

        </div>

        {/* Role Selector */}

        <div>

          <label className="text-sm text-gray-600 mb-1 block">
            Select Role
          </label>

          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-300 outline-none"
          >

            <option value="sales">
              Sales Representative
            </option>

            <option value="pm">
              Project Manager
            </option>

            <option value="finance">
              Finance Team
            </option>

          </select>

        </div>

        {/* Register Button */}

        <motion.button
          whileHover={{ scale:1.02 }}
          whileTap={{ scale:0.98 }}
          className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-2 rounded-lg font-medium shadow hover:shadow-lg"
        >
          Create Account
        </motion.button>

      </form>

      {/* Login Link */}

      <p className="text-sm text-gray-600 text-center mt-6">

        Already have an account?

        <a
          href="/login"
          className="text-indigo-600 font-medium ml-1 hover:underline"
        >
          Sign In
        </a>

      </p>

    </AuthLayout>

  );
};

export default Register;