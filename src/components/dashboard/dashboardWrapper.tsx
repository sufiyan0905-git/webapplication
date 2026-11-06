"use client";

import { useAtomValue } from "jotai";
import { authUserAtom } from "@/store/authAtoms";
import { AdminDashboard } from "./adminDashboard";
import { ParentDashboard } from "./parentDashboard";
import { StudentDashboard } from "./studentDashboard";
import { TeacherDashboard } from "./teacherDashboard";

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
          <p>Signed in as {user.email}</p>
          {dashboard}
        </main>
      </div>
    </>
  );
};