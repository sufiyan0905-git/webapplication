"use client";

import DataTable, { dataTableFeatures } from "@/components/common/table";
import { createColumnHelper } from "@tanstack/react-table";

export default function Role() {
    interface Role {
        id: number;
        roleName: string;
        status: string;
    }

    const roles: Role[] = [
        {
            id: 1,
            roleName: "Admin",
            status: "Active",
        },
        {
            id: 2,
            roleName: "User",
            status: "Inactive",
        },
        {
            id: 3,
            roleName: "Student",
            status: "Active",
        },
    ];

    const columnHelper = createColumnHelper<typeof dataTableFeatures, Role>();

    const columns = columnHelper.columns([
        columnHelper.accessor("id", {
            header: "ID",
        }),
        columnHelper.accessor("roleName", {
            header: "RoleName",
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


    return (
        <div className="space-y-6">


            <div className="flex items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Roles</h1>
                    <p className="text-sm text-gray-500">
                        Manage application roles.
                    </p>
                </div>
                <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
                >
                    Add Role
                </button>
            </div>

            <DataTable
                columns={columns}
                data={roles}
                searchPlaceholder="Search Roles..."
                filterColumn="status"
                filterOptions={[
                    { label: "Active", value: "Active" },
                    { label: "Inactive", value: "Inactive" },
                ]}
            />
        </div>
    );
}