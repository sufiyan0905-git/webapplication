"use client";

import { useState } from "react";
import Link from "next/link";
import { useSetAtom } from "jotai";
import { authUserAtom } from "@/store/authAtoms";
import {
  Menu,
  Search,
  UserCircle,
  ChevronDown,
  LogOut,
  User,
  Settings,
} from "lucide-react";

interface NavbarProps {
  onMenuClick: () => void;
}

export default function Navbar({ onMenuClick }: NavbarProps) {
  const [profileOpen, setProfileOpen] = useState(false);
  const setAuthUser = useSetAtom(authUserAtom);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onMenuClick}
            aria-label="Toggle sidebar"
            className="rounded-lg p-2 text-gray-600 transition hover:bg-gray-100"
          >
            <Menu size={23} />
          </button>

          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-lg font-bold text-white">
              N
            </div>

            <span className="hidden text-xl font-bold text-gray-900 sm:block">
              NewApplication
            </span>
          </Link>
        </div>

        <div className="mx-6 hidden max-w-md flex-1 md:block">
          <div className="relative">
            <Search
              size={19}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="search"
              placeholder="Search anything..."
              className="w-full rounded-xl border border-gray-200 bg-gray-50 py-2.5 pl-10 pr-4 text-sm text-gray-700 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
            />
          </div>
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={() => setProfileOpen((prev) => !prev)}
            aria-expanded={profileOpen}
            aria-label="Open profile menu"
            className="flex items-center gap-2 rounded-xl px-2 py-2 transition hover:bg-gray-100"
          >
            <UserCircle size={30} className="text-gray-600" />

            <div className="hidden text-left sm:block">
              <p className="text-sm font-semibold text-gray-800">Admin</p>
              <p className="text-xs text-gray-500">Administrator</p>
            </div>

            <ChevronDown size={16} className="text-gray-500" />
          </button>

          {profileOpen && (
            <>
              <button
                type="button"
                aria-label="Close profile menu"
                className="fixed inset-0 z-40 cursor-default"
                onClick={() => setProfileOpen(false)}
              />

              <div className="absolute right-0 z-50 mt-2 w-52 overflow-hidden rounded-xl border border-gray-200 bg-white py-2 shadow-lg">
                <Link
                  href="/profile"
                  onClick={() => setProfileOpen(false)}
                  className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50"
                >
                  <User size={17} />
                  My Profile
                </Link>

                <Link
                  href="/settings"
                  onClick={() => setProfileOpen(false)}
                  className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50"
                >
                  <Settings size={17} />
                  Settings
                </Link>

                <div className="my-1 border-t border-gray-100" />

                <Link
                  href="/login"
                  onClick={() => {
                    setAuthUser(null);
                    setProfileOpen(false);
                  }}
                  className="flex w-full items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50"
                >
                  <LogOut size={17} />
                  Logout
                </Link>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="px-4 pb-3 md:hidden">
        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="search"
            placeholder="Search anything..."
            className="w-full rounded-xl border border-gray-200 bg-gray-50 py-2 pl-10 pr-4 text-sm outline-none focus:border-blue-500"
          />
        </div>
      </div>
    </nav>
  );
}