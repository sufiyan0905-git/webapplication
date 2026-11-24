"use client";

import { useAtomValue } from "jotai";
import { authUserAtom } from "@/store/authAtoms";
import { ParentDashboard } from "./parentDashboard";
import { TeacherDashboard } from "./teacherDashboard";
import StudentDashboard from "./studentDashboard";
import AdminDashboard from "./adminDashboard";

export const DashboardWrapper = () => {
  const user = useAtomValue(authUserAtom);

  if (!user) {
    return <p>No user information found. Please sign in again.</p>;
  }

  let dashboard;
  switch (user.role.trim().toLowerCase()) {
    case "admin":
      dashboard = <AdminDashboard />;
      break;
    case "teacher":
      dashboard = <TeacherDashboard />;
      break;
    case "student":
      dashboard = <StudentDashboard />;
      break;
    case "parent":
      dashboard = <ParentDashboard />;
      break;
    default:
      return <p>Your account does not have a supported dashboard role.</p>;
  }

  return (
    <>
      <div className="flex flex-1">
        <main className="min-w-0 flex-1 p-4">
            {dashboard}
        </main>
      </div>
    </>
  );
};