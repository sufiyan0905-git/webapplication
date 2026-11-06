
"use client";

import Link from "next/link";
import {
    LayoutDashboard,
    Users,
    ShieldCheck,
} from "lucide-react";

interface SidebarProps {
    collapsed: boolean;
}

const menuItems = [
    {
        title: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        title: "Users",
        href: "/user",
        icon: Users,
    },
    {
        title: "Roles",
        href: "/role",
        icon: ShieldCheck,
    },
];

export default function Sidebar({ collapsed }: SidebarProps) {
    return (
        <aside
            className={`min-h-[calc(100vh-64px)] border-r border-gray-200 bg-white transition-all duration-300 ${collapsed ? "w-16" : "w-60"
                }`}
        >
            <nav className="space-y-2 p-3">
                {menuItems.map((item) => {
                    const Icon = item.icon;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            title={collapsed ? item.title : ""}
                            className={`flex items-center gap-3 rounded-lg px-3 py-3 text-gray-600 transition hover:bg-blue-50 hover:text-blue-600 ${collapsed ? "justify-center" : ""
                                }`}
                        >
                            <Icon size={21} />

                            {!collapsed && (
                                <span className="text-sm font-medium">
                                    {item.title}
                                </span>
                            )}
                        </Link>
                    );
                })}
            </nav>
        </aside>
    );
}
