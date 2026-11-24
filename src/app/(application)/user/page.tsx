
"use client";

import { UserPlus } from "lucide-react";
import DataTable from "@/components/common/table";
import { dataTableFeatures } from "@/components/common/table";
import { createColumnHelper } from "@tanstack/react-table";

interface User {
    id: number;
    firstName: string;
    email: string;
    role: string;
    status: string;
}

const users: User[] = [
    {
        id: 1,
        firstName: "John",
        email: "john@gmail.com",
        role: "Admin",
        status: "Active",
    },
    {
        id: 2,
        firstName: "David",
        email: "david@gmail.com",
        role: "User",
        status: "Inactive",
    },
    {
        id: 3,
        firstName: "Smith",
        email: "smith@gmail.com",
        role: "User",
        status: "Active",
    },
];

const columnHelper = createColumnHelper<typeof dataTableFeatures, User>();

const columns = columnHelper.columns([
    columnHelper.accessor("id", {
        header: "ID",
    }),
    columnHelper.accessor("firstName", {
        header: "Name",
    }),
    columnHelper.accessor("email", {
        header: "Email",
    }),
    columnHelper.accessor("role", {
        header: "Role",
    }),
    columnHelper.accessor("status", {
        header: "Status",
        cell: ({ getValue }) => {
            const status = getValue();

            return (
                <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                        }`}
                >
                    {status}
                </span>
            );
        },
    }),
]);

export default function UsersPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Users</h1>
                    <p className="text-sm text-gray-500">
                        Manage application users.
                    </p>
                </div>
                <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
                >
                   Add User
                </button>
            </div>

            <DataTable
                columns={columns}
                data={users}
                searchPlaceholder="Search users..."
                filterColumn="status"
                filterOptions={[
                    { label: "Active", value: "Active" },
                    { label: "Inactive", value: "Inactive" },
                ]}
            />
        </div>
    );
}
