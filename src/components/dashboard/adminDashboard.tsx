"use client";

import {
    Users,
    GraduationCap,
    CalendarCheck,
    Wallet,
    FileBarChart,
    UserPlus,
    CreditCard,
    ClipboardCheck,
    ArrowUpRight,
} from "lucide-react";

import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip,
    Legend,
} from "recharts";
import Link from "next/link";

// Dashboard Statistics
const stats = [
    {
        title: "Total Students",
        value: "2,450",
        change: "+8.2%",
        icon: Users,
        color: "bg-blue-100 text-blue-600",
    },
    {
        title: "Total Teachers",
        value: "125",
        change: "+3.4%",
        icon: GraduationCap,
        color: "bg-purple-100 text-purple-600",
    },
    {
        title: "Active Teachers",
        value: "112",
        change: "89.6%",
        icon: Users,
        color: "bg-green-100 text-green-600",
    },
    {
        title: "Teachers on Leave",
        value: "8",
        change: "Today",
        icon: CalendarCheck,
        color: "bg-orange-100 text-orange-600",
    },
    {
        title: "Attendance",
        value: "92.5%",
        change: "Today",
        icon: ClipboardCheck,
        color: "bg-cyan-100 text-cyan-600",
    },
    {
        title: "Pending Fees",
        value: "₹2.4L",
        change: "Pending",
        icon: Wallet,
        color: "bg-red-100 text-red-600",
    },
];

// Monthly Admissions
const months = [
    { name: "Jan", value: 35 },
    { name: "Feb", value: 55 },
    { name: "Mar", value: 42 },
    { name: "Apr", value: 75 },
    { name: "May", value: 60 },
    { name: "Jun", value: 90 },
];

// Student Attendance
const studentAttendance = [
    { name: "Present", value: 2266, color: "#16a34a" },
    { name: "Absent", value: 184, color: "#ef4444" },
];

// Teacher Attendance
// These are mutually exclusive attendance statuses.
const teacherAttendance = [
    { name: "Present", value: 105, color: "#16a34a" },
    { name: "Absent", value: 7, color: "#ef4444" },
    { name: "On Leave", value: 8, color: "#f59e0b" },
    { name: "Late", value: 5, color: "#3b82f6" },
];

// Recent Activities
const activities = [
    {
        title: "New student registered",
        description: "Admission completed successfully",
        time: "10:30 AM",
        icon: UserPlus,
    },
    {
        title: "Fee payment received",
        description: "Payment of ₹15,000 received",
        time: "10:15 AM",
        icon: CreditCard,
    },
    {
        title: "Attendance updated",
        description: "Class 10 attendance submitted",
        time: "09:45 AM",
        icon: ClipboardCheck,
    },
    {
        title: "New teacher added",
        description: "Teacher profile created successfully",
        time: "09:30 AM",
        icon: GraduationCap,
    },
];

// Reusable Attendance Chart
function AttendanceChart({
    title,
    description,
    data,
    total,
    percentage,
}: {
    title: string;
    description: string;
    data: {
        name: string;
        value: number;
        color: string;
    }[];
    total: number;
    percentage: string;
}) {
    return (
        <div className="bg-white p-5 rounded-xl border border-slate-200">
            <h3 className="font-bold text-slate-800">{title}</h3>

            <p className="text-xs text-slate-500 mt-1">
                {description}
            </p>

            <div className="relative h-[240px] mt-3">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="45%"
                            innerRadius={58}
                            outerRadius={82}
                            paddingAngle={3}
                            stroke="none"
                        >
                            {data.map((item) => (
                                <Cell
                                    key={item.name}
                                    fill={item.color}
                                />
                            ))}
                        </Pie>

                        <Tooltip
                            formatter={(value) => [
                                Number(value).toLocaleString(),
                                "Teachers / Students",
                            ]}
                        />

                        <Legend
                            verticalAlign="bottom"
                            height={30}
                            iconType="circle"
                            iconSize={8}
                            wrapperStyle={{
                                fontSize: "11px",
                            }}
                        />
                    </PieChart>
                </ResponsiveContainer>

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="text-center">
                        <p className="text-2xl font-bold text-slate-800">
                            {percentage}
                        </p>
                        <p className="text-xs text-slate-500">
                            Present
                        </p>
                    </div>
                </div>
            </div>

            <div className="border-t border-slate-100 pt-3 space-y-2">
                {data.map((item) => (
                    <div
                        key={item.name}
                        className="flex items-center justify-between text-sm"
                    >
                        <div className="flex items-center gap-2">
                            <span
                                className="w-2.5 h-2.5 rounded-full"
                                style={{ backgroundColor: item.color }}
                            />
                            <span className="text-slate-500">
                                {item.name}
                            </span>
                        </div>

                        <span className="font-semibold text-slate-700">
                            {item.value.toLocaleString()}
                        </span>
                    </div>
                ))}

                <div className="flex justify-between text-sm border-t border-slate-100 pt-2">
                    <span className="font-medium text-slate-600">
                        Total
                    </span>
                    <span className="font-bold text-slate-800">
                        {total.toLocaleString()}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default function AdminDashboard() {
    return (
        <div className="min-h-screen bg-slate-50 flex">
            <main className="flex-1 min-w-0">

                <div className="p-4 md:p-8 space-y-7">

                    {/* Quick Actions */}
                    <div className="bg-white rounded-xl border border-slate-200 p-5">
                        <h3 className="font-bold text-slate-800 mb-5">
                            Quick Actions
                        </h3>

                        <div className="grid grid-cols-3 gap-4">
                            {[
                                {
                                    label: "Student List",
                                    href: "/student",
                                    icon: UserPlus,
                                },
                                {
                                    label: "Teacher List",
                                    href: "/teacher",
                                    icon: GraduationCap,
                                },
                                {
                                    label: "Generate Report",
                                    icon: FileBarChart,
                                },
                            ].map((item) => {
                                const Icon = item.icon;

                                const content = (
                                    <>
                                        <Icon className="text-blue-600" size={23} />

                                        <span className="text-sm font-semibold text-slate-700">
                                            {item.label}
                                        </span>

                                        <ArrowUpRight
                                            size={16}
                                            className="text-slate-400 self-end"
                                        />
                                    </>
                                );

                                if (item.href) {
                                    return (
                                        <Link
                                            key={item.label}
                                            href={item.href}
                                            className="border border-slate-200 rounded-xl p-4 flex flex-col items-start gap-3 hover:bg-blue-50 hover:border-blue-300 transition"
                                        >
                                            {content}
                                        </Link>
                                    );
                                }

                                return (
                                    <button
                                        key={item.label}
                                        type="button"
                                        className="border border-slate-200 rounded-xl p-4 flex flex-col items-start gap-3 hover:bg-blue-50 hover:border-blue-300 transition"
                                    >
                                        {content}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Student Statistics */}
                    <div className="bg-white rounded-xl border border-slate-200 p-5">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                                <GraduationCap size={20} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-800">
                                    Student Overview
                                </h3>
                                <p className="text-xs text-slate-500">
                                    Student-related statistics
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                            {stats
                                .filter((stat) =>
                                    [
                                        "Total Students",
                                        "Attendance",
                                        "Pending Fees",
                                    ].includes(stat.title)
                                )
                                .map((stat) => {
                                    const Icon = stat.icon;

                                    return (
                                        <div
                                            key={stat.title}
                                            className="bg-white p-5 rounded-xl border border-slate-200 hover:shadow-md transition"
                                        >
                                            <div className="flex justify-between items-center">
                                                <div className={`w-11 h-11 rounded-lg flex items-center justify-center ${stat.color}`}>
                                                    <Icon size={22} />
                                                </div>

                                                <span className="text-xs font-semibold text-green-600">
                                                    {stat.change}
                                                </span>
                                            </div>

                                            <h3 className="text-2xl font-bold text-slate-800 mt-4">
                                                {stat.value}
                                            </h3>

                                            <p className="text-sm text-slate-500 mt-1">
                                                {stat.title}
                                            </p>
                                        </div>
                                    );
                                })}
                        </div>
                    </div>

                    {/* Teacher Statistics */}
                    <div className="bg-white rounded-xl border border-slate-200 p-5">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">
                                <Users size={20} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-800">
                                    Teacher Overview
                                </h3>
                                <p className="text-xs text-slate-500">
                                    Teacher-related statistics
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                            {stats
                                .filter((stat) =>
                                    [
                                        "Total Teachers",
                                        "Active Teachers",
                                        "Teachers on Leave",
                                    ].includes(stat.title)
                                )
                                .map((stat) => {
                                    const Icon = stat.icon;

                                    return (
                                        <div
                                            key={stat.title}
                                            className="bg-white p-5 rounded-xl border border-slate-200 hover:shadow-md transition"
                                        >
                                            <div className="flex justify-between items-center">
                                                <div className={`w-11 h-11 rounded-lg flex items-center justify-center ${stat.color}`}>
                                                    <Icon size={22} />
                                                </div>

                                                <span className="text-xs font-semibold text-green-600">
                                                    {stat.change}
                                                </span>
                                            </div>

                                            <h3 className="text-2xl font-bold text-slate-800 mt-4">
                                                {stat.value}
                                            </h3>

                                            <p className="text-sm text-slate-500 mt-1">
                                                {stat.title}
                                            </p>
                                        </div>
                                    );
                                })}
                        </div>
                    </div>

                    {/* Charts Section */}
                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">

                        {/* Student Admissions */}
                        <div className="xl:col-span-1 bg-white p-5 rounded-xl border border-slate-200">
                            <div className="flex flex-wrap justify-between items-center gap-3 mb-8">
                                <div>
                                    <h3 className="font-bold text-slate-800">
                                        Student Admissions
                                    </h3>

                                    <p className="text-xs text-slate-500 mt-1">
                                        Monthly admission statistics
                                    </p>
                                </div>

                                <select className="border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none">
                                    <option>2026</option>
                                    <option>2025</option>
                                    <option>2024</option>
                                </select>
                            </div>

                            <div className="flex items-end justify-around h-52 gap-3">
                                {months.map((month) => (
                                    <div
                                        key={month.name}
                                        className="flex-1 flex flex-col items-center gap-2 h-full justify-end"
                                    >
                                        <span className="text-xs text-slate-500">
                                            {month.value}
                                        </span>

                                        <div
                                            className="w-full max-w-12 bg-blue-500 hover:bg-blue-700 rounded-t-md transition"
                                            style={{ height: `${month.value}%` }}
                                        />

                                        <span className="text-xs text-slate-500">
                                            {month.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Student Attendance Pie Chart */}
                        <AttendanceChart
                            title="Student Attendance"
                            description="Today's student attendance"
                            data={studentAttendance}
                            total={2450}
                            percentage="92.5%"
                        />

                        {/* Teacher Attendance Pie Chart */}
                        <AttendanceChart
                            title="Teacher Attendance"
                            description="Today's teacher attendance"
                            data={teacherAttendance}
                            total={125}
                            percentage="84%"
                        />

                    </div>


                    {/* Recent Activities */}
                    <div className="bg-white rounded-xl border border-slate-200 p-5">
                        <div className="flex justify-between mb-5">
                            <h3 className="font-bold text-slate-800">
                                Recent Activities
                            </h3>

                            <button className="text-blue-600 text-sm hover:underline">
                                View All
                            </button>
                        </div>

                        <div className="space-y-5">
                            {activities.map((activity) => {
                                const Icon = activity.icon;

                                return (
                                    <div
                                        key={activity.title}
                                        className="flex items-center gap-3"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                                            <Icon size={19} />
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-semibold text-slate-800">
                                                {activity.title}
                                            </p>

                                            <p className="text-xs text-slate-500 mt-1">
                                                {activity.description}
                                            </p>
                                        </div>

                                        <span className="text-xs text-slate-400 whitespace-nowrap">
                                            {activity.time}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}
