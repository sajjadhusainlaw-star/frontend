"use client";

import { Home, FolderOpen, Users, FileText, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../assets/logo.png";

const AdminSidebar = ({ isOpen }: { isOpen: boolean }) => {
  const navItems = [
    { name: "Dashboard", icon: <Home size={18} />, href: "/dashboard" },
    { name: "Cases", icon: <FolderOpen size={18} />, href: "/dashboard/cases" },
    { name: "Clients", icon: <Users size={18} />, href: "/dashboard/clients" },
    { name: "Documents", icon: <FileText size={18} />, href: "/dashboard/docs" },
    { name: "Settings", icon: <Settings size={18} />, href: "/dashboard/settings" },
  ];

  return (
    <aside
      className={`
        fixed left-0 top-16
        h-[calc(100vh-4rem)]
        bg-[#0A2342]
        shadow-md flex flex-col justify-between z-20
        transition-all duration-300 ease-in-out
        ${isOpen ? "w-64" : "w-0 overflow-hidden"}
      `}
    >
      {/* Sidebar main content */}
      <div className="p-6">
        <div className="mb-8">
          <Image alt="logo" src={logo} className="w-32 h-auto mx-auto" />
        </div>

        <nav className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 text-gray-200 hover:text-orange-500 hover:bg-gray-800 rounded-lg px-3 py-2 transition"
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-700 p-4 text-center text-sm text-gray-400">
        © 2025 LawStream
      </div>
    </aside>
  );
};

export default AdminSidebar;
