"use client";

import React from "react";
import { useRouter } from "next/navigation";

const ServerErrorPage = () => {
    const router = useRouter();

    const handleRefresh = () => {
        window.location.reload();
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
            <div className="text-center max-w-md">
                <div className="mb-8 flex justify-center">
                    {/* You can replace this with a custom illustration or icon */}
                    <svg
                        className="w-24 h-24 text-red-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                    </svg>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    Server Error
                </h1>
                <p className="text-gray-600 mb-8 text-lg">
                    We are working on some issues, we will get back soon.
                </p>
                <button
                    onClick={handleRefresh}
                    className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition-colors duration-200"
                >
                    Refresh Page
                </button>
            </div>
        </div>
    );
};

export default ServerErrorPage;
