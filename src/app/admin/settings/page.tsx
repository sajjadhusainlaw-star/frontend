"use client";

import React, { useState } from "react";
import AddCategory from "./add-category";
import { TeamAndAccessControl } from "./team-and-accessControl";


export default function Settings() {
    // POPUP CONTROLS
    const [openCategoryPopup, setOpenCategoryPopup] = useState(false);
    const [openSubCategoryPopup, setOpenSubCategoryPopup] = useState(false);
    const [openTeamPopup, setOpenTeamPopup] = useState(false);


    return (
        <div className="p-8 space-y-8">
            <h2 className="text-2xl font-semibold">Settings</h2>

            {/* Organization & Branding */}
            <section className="space-y-4">
                <h3 className="text-xl font-semibold">Organization & Branding</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border p-4 rounded-xl space-y-4">
                        <p className="font-medium">Firm Logo</p>
                        <div className="h-24 w-48 border rounded-lg flex items-center justify-center bg-gray-100">
                            LOGO
                        </div>
                        <button className="px-4 py-2 bg-black text-white rounded-lg">Upload File</button>
                    </div>

                    <div className="border p-4 rounded-xl space-y-4">
                        <p className="font-medium">Firm Name</p>
                        <input
                            className="border rounded-lg w-full p-2"
                            defaultValue="Sajjad Husain Law Associates"
                        />
                    </div>
                </div>
            </section>

            {/* Team & Access Control */}
            <section className="space-y-4">
                <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Team & Access Control</h3>
                    <button
                        className="px-8 py-2 bg-yellow-400 text-black rounded-3xl"
                        onClick={() => setOpenTeamPopup(true)}
                    >
                        Add New
                    </button>
                </div>
                <div className="border border-[#1A73E8] rounded-2xl overflow-hidden mt-5">
                    <table className="w-full">

                        <thead>
                            <tr className="bg-gray-100">
                                <th className="p-3 text-left">#</th>
                                <th className="p-3 text-left">Role</th>
                                <th className="p-3 text-left">Name</th>
                                <th className="p-3 text-left">Permissions</th>
                                <th className="p-3 text-left">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr className="border-t">
                                <td className="p-3">1</td>
                                <td className="p-3">Super Admin</td>
                                <td className="p-3">Sajjad Husain</td>
                                <td className="p-3 truncate">Settings, Billing, Approvals</td>
                                <td className="p-3">
                                    <button className="px-3 py-1 bg-yellow-500 rounded">Edit</button>

                                </td>
                            </tr>

                            <tr className="border-t">
                                <td className="p-3">2</td>
                                <td className="p-3">Admin</td>
                                <td className="p-3">Rajat</td>
                                <td className="p-3 truncate">Content & Team Mgmt </td>
                                <td className="p-3">
                                    <button className="px-3 py-1 bg-yellow-400 rounded  mr-3">Edit</button>
                                    <button className="px-3 py-1 bg-red-500 text-white rounded">Delete</button>
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>

            </section>

            {/* Category Management */}
            <section className="space-y-4">
                <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Category Management</h3>
                    <button
                        className="px-8 py-2 bg-yellow-500 text-black rounded-3xl"
                        onClick={() => setOpenCategoryPopup(true)}
                    >
                        Add New
                    </button>
                </div>
                <div className="border border-[#1A73E8] rounded-2xl overflow-hidden mt-5">
                    <table className="w-full">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="p-2 text-left">#</th>
                                <th className="p-2 text-left">Category</th>
                                <th className="p-2 text-left">Sub Category</th>
                                <th className="p-2 text-left">Post</th>
                                <th className="p-2 text-left">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr className="border-t">
                                <td className="p-2">1</td>
                                <td className="p-2">Legal</td>
                                <td className="p-2">
                                    <div className="flex items-center justify-between">
                                        <span>Legal</span>

                                        <button
                                            className="px-3 py-2 bg-yellow-500 text-black rounded-sm"
                                            onClick={() => setOpenSubCategoryPopup(true)}
                                        >
                                            +
                                        </button>
                                    </div>
                                </td>
                                <td className="p-2">123</td>

                                {/* action buttons fixed alignment */}
                                <td className="p-2">
                                    <div className="flex gap-2">
                                        <button className="px-3 py-1 bg-yellow-400 rounded">Edit</button>
                                        <button className="px-3 py-1 bg-red-500 text-white rounded">Delete</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </section>

            {openCategoryPopup && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
                    <AddCategory onClose={() => setOpenCategoryPopup(false)} />
                </div>
            )}
            {/* {openSubCategoryPopup && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
                    <AddSubCategory onClose={() => setOpenSubCategoryPopup(false)} />
                </div>
            )} */}

            {openTeamPopup && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
                    <TeamAndAccessControl onClose={() => setOpenTeamPopup(false)} />
                </div>
            )}
        </div>
    );
}


