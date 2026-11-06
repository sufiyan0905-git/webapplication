"use client";

import { useState } from "react";
import Navbar from "@/components/common/navbar";
import Sidebar from "@/components/common/sideNavbar";

export default function ApplicationShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);

  return (
    <>
      <Navbar
        onMenuClick={() => setSidebarCollapsed((collapsed) => !collapsed)}
      />
      <div className="flex flex-1">
        <Sidebar collapsed={sidebarCollapsed} />
        <main className="min-w-0 flex-1 p-4">{children}</main>
      </div>
    </>
  );
}
