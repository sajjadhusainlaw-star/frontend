"use client";
import Image from "next/image";
import logo from "../../../../public/logo.svg";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export default function Page() {
  const [formData, setFormData] = useState({
    fullname: "",
    number: "",
    email: "",
    state: "",
    password: "",
  });

  const dispatch = useAppDispatch();
  const { loading, error, token } = useAppSelector((state) => state.auth);
  // const handleChange = (e: React.ChangeEvent<HTMLinputElement>) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({ ...prev, [name]: value }));
  // };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // dispatch(login(formData));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white px-4 sm:px-6 lg:px-8 py-10">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row  bg-white">
        {/* Left Side: Form */}
        <div className="w-full lg:w-1/2 bg-[#E5E5E5] px-6 sm:px-10 py-10">
          <h2 className="text-2xl font-semibold text-center mb-4">Welcome!</h2>
          <p className="text-sm text-gray-600 text-center mb-8">
            Sign up today for fresh, premium updates straight from the legal
            world.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 px-14">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullname"
                className="text-sm font-medium text-gray-700 block mb-1"
              >
                Full Name
              </label>
              <input
                id="fullname"
                type="text"
                name="fullname"
                placeholder="Enter your Full name"
                value={formData.fullname}
                // onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-600"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="number"
                className="text-sm font-medium text-gray-700 block mb-1"
              >
                Phone No.
              </label>
              <input
                id="number"
                type="tel"
                name="number"
                placeholder="9012-XXX-XX"
                value={formData.number}
                // onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-600"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700 block mb-1"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="example@example.com"
                value={formData.email}
                // onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-600"
              />
            </div>

            {/* State */}
            <div>
              <label
                htmlFor="state"
                className="text-sm font-medium text-gray-700 block mb-1"
              >
                State
              </label>
              <input
                id="state"
                type="text"
                name="state"
                placeholder="Delhi, Uttar Pradesh, etc."
                value={formData.state}
                // onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-600"
              />
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

          {/* Social Logins */}
          <div className="mt-6 space-y-3 px-14">
            <div className="flex justify-center items-center">
              <span className="inline-block border-1 w-48  border-gray-400"></span>
              <span className="mx-1 text-xl">OR</span>
              <span className="inline-block border-1 w-48  border-gray-400"></span>
            </div>

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

          <div className="text-left text-xs text-gray-500 mt-10">
            Already have account?
            <a href="/auth/singin" className="hover:underline text-blue-400">
              {" "}
              Login
            </a>
          </div>
        </div>

        {/* Right Side: Info + Logo */}
        <div className="w-full lg:w-1/2 bg-[#0A2342] flex flex-col justify-center px-6 py-10">
          <div className="flex justify-center mb-6">
            <Image
              src={logo}
              alt="Logo"
              width={300}
              height={300}
              className="rounded-full w-48 h-48 object-contain sm:w-60 sm:h-60"
              priority
            />
          </div>

          <h3 className="text-xl text-white text-center mb-4">
            Stay informed. Stay ahead.
          </h3>
          <p className="text-sm text-white text-center px-4 sm:px-10 lg:px-24 xl:px-24">
            Welcome to India’s most trusted legal news platform — your one-stop
            destination for the latest court updates, case analyses, and expert
            legal insights. Whether you’re a lawyer, law student, or simply
            curious about the legal world, our platform delivers authentic,
            timely, and premium news right at your fingertips. Join us today and
            never miss the hot and trending stories shaping the nation’s legal
            landscape.
          </p>

          {/* Awards */}
          <div className="mt-10">
            <p className="text-xl text-center text-white mb-2">
              Awards or Certifications
            </p>
            <div className="border-b-2 border-[#D9D9D9] mx-auto w-4/5 sm:w-2/3" />
            <div className="flex flex-wrap gap-4 justify-center mt-6">
              {[1, 2, 3, 4].map((_, i) => (
                <div key={i} className="h-20 w-20 bg-[#D9D9D9]" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
