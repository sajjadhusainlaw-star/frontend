"use client";

import Image from "next/image";
import logo from "../../../../public/logo.svg";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
// import { login } from "../../features/auth/authAPI";

export default function Page() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const dispatch = useAppDispatch();
  const { loading, error, token } = useAppSelector((state) => state.auth);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // dispatch(login(formData));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-lg shadow-md p-6 sm:p-8">
        <div className="flex justify-center mb-6">
          <Image src={logo} alt="Logo" width={80} height={80} />
        </div>

        <h2 className="text-2xl font-bold text-center mb-2">Welcome Back!</h2>
        <p className="text-center text-gray-600 mb-6">
          Login to get your daily dose of hot premium legal updates
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
          </div>

          <div className="flex justify-between text-sm text-gray-600">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="h-4 w-4" />
              <span>Remember me</span>
            </label>
            <button
              type="button"
              className="text-gray-800 hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#C9A227] text-white py-3 rounded-md font-medium hover:bg-gray-800 transition disabled:opacity-50"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        {error && (
          <p className="text-red-500 text-sm mt-3 text-center">{error}</p>
        )}
        {token && (
          <p className="text-green-600 text-sm mt-3 text-center">
            Login successful!
          </p>
        )}

        <div className="mt-6 space-y-3">
          <button
            type="button"
            className="w-full border border-gray-300 rounded-md py-3 flex items-center justify-center space-x-3 hover:bg-gray-50 transition"
          >
            <FcGoogle size={22} />
            <span>Continue with Google</span>
          </button>

          <button
            type="button"
            className="w-full border border-gray-300 rounded-md py-3 flex items-center justify-center space-x-3 hover:bg-gray-50 transition"
          >
            <FaFacebook size={22} className="text-blue-600" />
            <span>Continue with Facebook</span>
          </button>
        </div>

        <div className="text-center text-sm text-gray-600 mt-8">
          <p>
            Don’t have an account?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Register
            </a>
          </p>
          <p className="mt-2">
            <a href="#" className="text-gray-700 hover:underline">
              Login as Guest
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
