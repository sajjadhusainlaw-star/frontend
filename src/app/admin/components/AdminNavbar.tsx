"use client";
import { Bell, Search, UserCircle, Menu } from "lucide-react";

interface NavbarProps {
  onToggleSidebar: () => void;
}

const AdminNavbar = ({ onToggleSidebar }: NavbarProps) => {
  return (
    <header className="w-full h-16 bg-[#0A2342] text-white flex items-center justify-between px-6 fixed top-0 left-0 z-40">
      <div className="flex items-center gap-3 w-full max-w-md">
        <button
          onClick={onToggleSidebar}
          className="p-2 rounded-md hover:bg-[#132b53] transition"
          aria-label="Toggle sidebar"
        >
          <Menu size={20} />
        </button>

        <div className="flex items-center gap-3 w-full">
          <Search className="text-white" size={18} />
          <input
            type="text"
            placeholder="Search cases, clients..."
            className="w-full text-white bg-transparent focus:outline-none text-sm placeholder-gray-300"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Bell className="text-white cursor-pointer hover:text-orange-400" size={20} />
        <div className="flex items-center gap-2">
          <UserCircle className="text-white" size={24} />
          <span className="text-sm font-medium">Riya Sharma</span>
        </div>
      </div>
    </header>
  );
};

export default AdminNavbar;
