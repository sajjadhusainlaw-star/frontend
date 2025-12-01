"use client";

import { Mail, Phone, MapPin, Clock, Send, User, MessageSquare, Building } from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaTwitter, FaTelegramPlane, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { useState } from "react";

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log("Form submitted:", formData);
        alert("Thank you for contacting us! We'll get back to you soon.");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-[#122340] via-[#1A73E8] to-[#122340] text-white py-20 lg:py-32 px-4 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-48 h-48 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-300 rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="flex flex-col items-center justify-center gap-6 mb-6">
                        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl animate-pulse">
                            <MessageSquare className="w-16 h-16" />
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center">
                            Contact Us
                        </h1>
                    </div>
                    <p className="text-xl md:text-2xl text-center text-blue-100 max-w-3xl mx-auto">
                        Get in Touch with Our Legal Experts
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid lg:grid-cols-2 gap-8 mb-12">
                    {/* Contact Form */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 border border-blue-100 hover:shadow-2xl transition-all duration-300">
                        <h2 className="text-3xl font-bold text-[#122340] mb-6">Send Us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Full Name *
                                </label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A73E8] focus:border-transparent transition-all duration-300"
                                        placeholder="Enter your full name"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Email Address *
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A73E8] focus:border-transparent transition-all duration-300"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Phone Number
                                </label>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A73E8] focus:border-transparent transition-all duration-300"
                                        placeholder="+91 XXXXX XXXXX"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Subject *
                                </label>
                                <div className="relative">
                                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A73E8] focus:border-transparent transition-all duration-300"
                                        placeholder="How can we help you?"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A73E8] focus:border-transparent transition-all duration-300 resize-none"
                                    placeholder="Tell us more about your inquiry..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-[#1A73E8] to-[#122340] text-white py-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                <Send className="w-5 h-5" />
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-6">
                        {/* Address Card */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100 hover:shadow-2xl transition-all duration-300">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="bg-gradient-to-br from-[#1A73E8] to-[#122340] p-3 rounded-xl flex-shrink-0">
                                    <MapPin className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#122340] mb-2">Our Office</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        Block-C, High Court, Sajjad Husain,<br />
                                        Advocates Chamber.515,<br />
                                        Lucknow - Ayodhya Rd, Gomti Nagar,<br />
                                        Lucknow, Faizabad,<br />
                                        Uttar Pradesh 226010
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Phone Card */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100 hover:shadow-2xl transition-all duration-300">
                            <div className="flex items-start gap-4">
                                <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-xl flex-shrink-0">
                                    <Phone className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#122340] mb-2">Phone</h3>
                                    <a href="tel:07080909786" className="text-gray-700 hover:text-[#1A73E8] transition-colors text-lg">
                                        070809 09786
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Email Card */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100 hover:shadow-2xl transition-all duration-300">
                            <div className="flex items-start gap-4">
                                <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-xl flex-shrink-0">
                                    <Mail className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#122340] mb-2">Email</h3>
                                    <a href="mailto:sajjadhusainlawassociates@gmail.com" className="text-gray-700 hover:text-[#1A73E8] transition-colors break-all">
                                        sajjadhusainlawassociates@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Office Hours Card */}
                        <div className="bg-gradient-to-br from-[#122340] to-[#1A73E8] rounded-2xl shadow-xl p-8 text-white">
                            <div className="flex items-start gap-4">
                                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl flex-shrink-0">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-4">Office Hours</h3>
                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <span>Monday - Friday:</span>
                                            <span className="font-semibold">9:00 AM - 6:00 PM</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Saturday:</span>
                                            <span className="font-semibold">10:00 AM - 4:00 PM</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Sunday:</span>
                                            <span className="font-semibold">Closed</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100">
                            <h3 className="text-xl font-bold text-[#122340] mb-4">Follow Us</h3>
                            <div className="flex flex-wrap gap-3">
                                <a href="#" className="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg transition-all duration-300 hover:scale-110">
                                    <FaFacebookF className="w-5 h-5 text-white" />
                                </a>
                                <a href="#" className="bg-pink-600 hover:bg-pink-700 p-3 rounded-lg transition-all duration-300 hover:scale-110">
                                    <FaInstagram className="w-5 h-5 text-white" />
                                </a>
                                <a href="#" className="bg-green-600 hover:bg-green-700 p-3 rounded-lg transition-all duration-300 hover:scale-110">
                                    <FaWhatsapp className="w-5 h-5 text-white" />
                                </a>
                                <a href="#" className="bg-sky-500 hover:bg-sky-600 p-3 rounded-lg transition-all duration-300 hover:scale-110">
                                    <FaTwitter className="w-5 h-5 text-white" />
                                </a>
                                <a href="#" className="bg-blue-500 hover:bg-blue-600 p-3 rounded-lg transition-all duration-300 hover:scale-110">
                                    <FaTelegramPlane className="w-5 h-5 text-white" />
                                </a>
                                <a href="#" className="bg-blue-700 hover:bg-blue-800 p-3 rounded-lg transition-all duration-300 hover:scale-110">
                                    <FaLinkedinIn className="w-5 h-5 text-white" />
                                </a>
                                <a href="#" className="bg-red-600 hover:bg-red-700 p-3 rounded-lg transition-all duration-300 hover:scale-110">
                                    <FaYoutube className="w-5 h-5 text-white" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map Section */}
                <div className="bg-white rounded-2xl shadow-xl p-4 border border-blue-100">
                    <h2 className="text-3xl font-bold text-[#122340] mb-6 px-4 pt-4">Find Us on Map</h2>
                    <div className="w-full h-96 rounded-xl overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.3!2d80.9!3d26.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDUxJzAwLjAiTiA4MMKwNTQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>

            {/* Footer Note */}
            <div className="bg-[#122340] text-white py-8">
                <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-sm md:text-base text-blue-200">
                        © {new Date().getFullYear()} Sajjad Husain Law Associates. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
}
