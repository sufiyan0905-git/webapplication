
import {
    CalendarCheck,
    BookOpen,
    ClipboardList,
    TrendingUp,
} from "lucide-react";

const attendance = [
    { month: "Jun", value: 92 },
    { month: "Jul", value: 85 },
    { month: "Aug", value: 96 },
    { month: "Sep", value: 88 },
    { month: "Oct", value: 94 },
    { month: "Nov", value: 91 },
];

const subjects = [
    { name: "Mathematics", marks: 92, color: "bg-blue-500" },
    { name: "Science", marks: 85, color: "bg-emerald-500" },
    { name: "English", marks: 78, color: "bg-purple-500" },
    { name: "Computer Science", marks: 95, color: "bg-orange-500" },
];


export default function StudentDashboard() {
    return (
        <div className="min-h-screen bg-slate-50 flex">

            {/* Main Content */}
            <main className="flex-1 p-5 md:p-8">
                {/* Student Information */}
                <div className="bg-gradient-to-r from-blue-700 to-indigo-600 rounded-2xl p-6 text-white mb-7">
                    <p className="text-blue-100">Student Information</p>
                    <h2 className="text-2xl font-bold mt-2">
                        Good Morning, Sufiyan!
                    </h2>
                    <div className="flex flex-wrap gap-6 mt-5 text-sm">
                        <p>Student ID: STU001</p>
                        <p>Class: 10th Grade</p>
                        <p>Section: A</p>
                        <p>Academic Year: 2026-27</p>
                    </div>
                </div>

                {/* Summary Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">

                    {[
                        {
                            title: "Attendance",
                            value: "92%",
                            detail: "This academic year",
                            icon: CalendarCheck,
                            color: "text-blue-600 bg-blue-100",
                        },
                        {
                            title: "Overall Percentage",
                            value: "87.5%",
                            detail: "Latest examination",
                            icon: TrendingUp,
                            color: "text-emerald-600 bg-emerald-100",
                        },
                        {
                            title: "Assignments",
                            value: "4",
                            detail: "Pending submissions",
                            icon: ClipboardList,
                            color: "text-orange-600 bg-orange-100",
                        },
                        {
                            title: "Subjects",
                            value: "6",
                            detail: "Currently enrolled",
                            icon: BookOpen,
                            color: "text-purple-600 bg-purple-100",
                        },
                    ].map((card) => {
                        const Icon = card.icon;

                        return (
                            <div
                                key={card.title}
                                className="bg-white rounded-xl p-5 shadow-sm border border-slate-100"
                            >
                                <div className="flex justify-between">
                                    <p className="text-slate-500">{card.title}</p>
                                    <div className={`p-2 rounded-lg ${card.color}`}>
                                        <Icon size={21} />
                                    </div>
                                </div>
                                <h3 className="text-3xl font-bold text-slate-800 mt-4">
                                    {card.value}
                                </h3>
                                <p className="text-sm text-slate-400 mt-1">
                                    {card.detail}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Reports and Attendance */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">

                    {/* Attendance Chart */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="font-bold text-lg text-slate-800">
                                Attendance Report
                            </h3>
                            <span className="text-sm text-blue-600">Monthly</span>
                        </div>

                        <div className="flex items-end justify-between gap-3 h-48">
                            {attendance.map((item) => (
                                <div
                                    key={item.month}
                                    className="flex-1 flex flex-col items-center gap-2"
                                >
                                    <span className="text-xs font-semibold text-slate-500">
                                        {item.value}%
                                    </span>
                                    <div className="w-full bg-slate-100 rounded-t-md h-36 flex items-end">
                                        <div
                                            className="w-full bg-blue-500 rounded-t-md"
                                            style={{ height: `${item.value}%` }}
                                        />
                                    </div>
                                    <span className="text-xs text-slate-500">
                                        {item.month}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Subject Performance */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                        <h3 className="font-bold text-lg text-slate-800 mb-6">
                            Subject Performance
                        </h3>

                        <div className="space-y-6">
                            {subjects.map((subject) => (
                                <div key={subject.name}>
                                    <div className="flex justify-between mb-2 text-sm">
                                        <span className="font-medium text-slate-700">
                                            {subject.name}
                                        </span>
                                        <span className="font-bold text-slate-800">
                                            {subject.marks}%
                                        </span>
                                    </div>

                                    <div className="h-2.5 bg-slate-100 rounded-full">
                                        <div
                                            className={`h-2.5 rounded-full ${subject.color}`}
                                            style={{ width: `${subject.marks}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

                    {/* Recent Results */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                        <h3 className="font-bold text-lg mb-5 text-slate-800">
                            Recent Examination Results
                        </h3>

                        <div className="space-y-4">
                            {subjects.map((subject) => (
                                <div
                                    key={subject.name}
                                    className="flex justify-between items-center border-b border-slate-100 pb-3"
                                >
                                    <span className="text-slate-600">
                                        {subject.name}
                                    </span>
                                    <span className="font-semibold text-emerald-600">
                                        {subject.marks}/100
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Notifications */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                        <h3 className="font-bold text-lg mb-5 text-slate-800">
                            Recent Notifications
                        </h3>

                        <div className="space-y-5">
                            <div className="border-l-4 border-blue-500 pl-4">
                                <p className="font-semibold text-slate-800">
                                    Examination Schedule
                                </p>
                                <p className="text-sm text-slate-500 mt-1">
                                    Upcoming examination schedule is published.
                                </p>
                            </div>

                            <div className="border-l-4 border-orange-500 pl-4">
                                <p className="font-semibold text-slate-800">
                                    Assignment Reminder
                                </p>
                                <p className="text-sm text-slate-500 mt-1">
                                    Submit your Mathematics assignment.
                                </p>
                            </div>

                            <div className="border-l-4 border-emerald-500 pl-4">
                                <p className="font-semibold text-slate-800">
                                    Attendance Updated
                                </p>
                                <p className="text-sm text-slate-500 mt-1">
                                    Your attendance records have been updated.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
}
