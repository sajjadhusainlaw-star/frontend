"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { useRouter } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  // logout
  // const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const router = useRouter();

  useEffect(() => {
    try {
      if (typeof window === "undefined") return;
      const storedUser = localStorage.getItem("user");
      if (storedUser && storedUser !== "undefined" && storedUser !== "null") {
        try {
          const parsed = JSON.parse(storedUser);
          if (parsed && typeof parsed === "object") setUser(parsed);
        } catch {
          localStorage.removeItem("user");
          setUser(null);
        }
      }
    } catch {
      // noop
    }
  }, []);

  // const handleLogout = () => {
  //   localStorage.clear();
  //   setUser(null);
  //   router.push("/auth/login");
  //   setMenuOpen(false);
  // };

  const navLinks = [
    "Home",
    "Latest News",
    "Judgments",
    "Interviews",
    "Explainers",
    "Business",
    "Innovation",
    "More ▾",
  ];

  return (
    <header className="w-full border-b border-gray-200 bg-white z-50 fixed top-0  left-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20 ">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="Logo" className="object-contain" width={140} height={40} priority />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-base font-medium">
          {navLinks.map((label, i) => (
            <Link href="#" key={i} className="hover:text-black/70">
              {label}
            </Link>
          ))}
        </nav>

        {/* Auth Section Desktop */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <>
              <Link href="/profile" className="flex items-center gap-2 group">
                <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-sm font-semibold text-gray-700 overflow-hidden">
                  {(user?.name?.[0] || "U").toUpperCase()}
                </div>
                <span className="text-sm font-medium text-gray-800 group-hover:underline">{user?.name || "Profile"}</span>
              </Link>
              {/* logout */}
              {/* <button
                onClick={() => setShowLogoutConfirm(true)}
                className="rounded-full border border-black px-5 py-2 text-sm font-medium hover:bg-black hover:text-white"
              >
                Logout
              </button> */}
              
            </>
          ) : (
            <>
              <Link href="/auth/login">
                <button className="rounded-full bg-black text-white px-5 py-2 hover:opacity-80 text-sm font-medium">
                  Log in
                </button>
              </Link>
              <Link href="/auth/signup">
                <button className="rounded-full border border-black text-black px-5 py-2 hover:bg-black hover:text-white text-sm font-medium">
                  Sign up
                </button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 [@media(min-width:500px)]:w-1/2 w-full shadow-lg absolute top-20  end-0 z-40">
          <nav className="flex flex-col p-5 gap-4">
            <div className="mt-4 border-t border-gray-200 pt-4 flex flex-col gap-3">
              {user ? (
                <>
                  
                  <Link
                    href="/profile"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg hover:bg-gray-100"
                  >
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-semibold text-gray-700 overflow-hidden">
                      {(user?.name?.[0] || "U").toUpperCase()}
                    </div>
                    <span className="font-medium text-gray-800">{user?.name || "Profile"}</span>
                  </Link>

                </>
              ) : (
                <>
                  <div className="flex gap-4">
                    <Link href="/auth/login" onClick={() => setMenuOpen(false)}>
                      <button className="flex-1 rounded-full bg-black text-white px-5 py-2 text-sm font-medium hover:opacity-90">
                        Login
                      </button>
                    </Link>
                    <Link href="/auth/signup" onClick={() => setMenuOpen(false)}>
                      <button className="flex-1 rounded-full bg-yellow-700 text-white px-5 py-2 text-sm font-medium hover:opacity-90">
                        Sign up
                      </button>
                    </Link>
                  </div>

                </>
              )}
            </div>
            {navLinks.map((label, i) => (
              <Link
                href="#"
                key={i}
                onClick={() => setMenuOpen(false)}
                className="hover:text-black/70"
              >
                {label}
              </Link>
            ))}


          </nav>
        </div>
      )}


      {/* Logout Confirm Modal */}
      {/* {showLogoutConfirm && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/40 opacity-0 animate-[fadeIn_150ms_ease-out_forwards]"
            onClick={() => setShowLogoutConfirm(false)}
          />
          <div className="relative z-[61] w-full max-w-sm">
            <div className="bg-white rounded-xl shadow-xl border transform opacity-0 translate-y-3 animate-[dialogIn_180ms_cubic-bezier(0.22,1,0.36,1)_forwards]">
              <div className="px-5 py-4 border-b">
                <h3 className="text-base font-semibold">Log out?</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Are you sure you want to log out from your account?
                </p>
              </div>
              <div className="px-5 py-4 flex justify-end gap-2">
                <button
                  onClick={() => setShowLogoutConfirm(false)}
                  className="px-4 py-2 text-sm rounded-md border hover:bg-gray-50 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setShowLogoutConfirm(false);
                    handleLogout();
                  }}
                  className="px-4 py-2 text-sm rounded-md bg-black text-white hover:opacity-90 transition"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
          <style jsx>{`
            @keyframes fadeIn {
              to {
                opacity: 1;
              }
            }
            @keyframes dialogIn {
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}</style>
        </div>
      )} */}
    </header>
  );
}
