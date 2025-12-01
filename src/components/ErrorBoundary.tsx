"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
    errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null,
        };
    }

    static getDerivedStateFromError(error: Error): State {
        // Update state so the next render will show the fallback UI
        return {
            hasError: true,
            error,
            errorInfo: null,
        };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // Log error to console in development
        if (process.env.NODE_ENV === "development") {
            console.error("Error caught by ErrorBoundary:", error, errorInfo);
        }

        // Update state with error details
        this.setState({
            error,
            errorInfo,
        });

        // You can also log the error to an error reporting service here
        // logErrorToService(error, errorInfo);
    }

    handleReset = () => {
        this.setState({
            hasError: false,
            error: null,
            errorInfo: null,
        });
    };

    handleReload = () => {
        window.location.reload();
    };

    render() {
        if (this.state.hasError) {
            // Custom fallback UI
            if (this.props.fallback) {
                return this.props.fallback;
            }

            // Default error UI
            return (
                <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-4">
                    <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 border border-red-100">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="bg-red-100 p-3 rounded-full">
                                <AlertTriangle className="w-8 h-8 text-red-600" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900">
                                    Oops! Something went wrong
                                </h1>
                                <p className="text-gray-600 mt-1">
                                    We're sorry for the inconvenience. An unexpected error occurred.
                                </p>
                            </div>
                        </div>

                        {process.env.NODE_ENV === "development" && this.state.error && (
                            <div className="mb-6 p-4 bg-red-50 rounded-lg border border-red-200">
                                <h3 className="font-semibold text-red-900 mb-2">Error Details:</h3>
                                <p className="text-sm text-red-800 font-mono mb-2">
                                    {this.state.error.toString()}
                                </p>
                                {this.state.errorInfo && (
                                    <details className="mt-2">
                                        <summary className="cursor-pointer text-sm text-red-700 hover:text-red-900">
                                            Stack Trace
                                        </summary>
                                        <pre className="mt-2 text-xs text-red-700 overflow-auto max-h-64 p-2 bg-red-100 rounded">
                                            {this.state.errorInfo.componentStack}
                                        </pre>
                                    </details>
                                )}
                            </div>
                        )}

                        <div className="flex flex-col sm:flex-row gap-3">
                            <button
                                onClick={this.handleReset}
                                className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-[#1A73E8] to-[#122340] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                            >
                                <RefreshCw className="w-5 h-5" />
                                Try Again
                            </button>
                            <button
                                onClick={this.handleReload}
                                className="flex-1 flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300"
                            >
                                Reload Page
                            </button>
                        </div>

                        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                            <h3 className="font-semibold text-blue-900 mb-2">What you can do:</h3>
                            <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
                                <li>Click "Try Again" to retry the operation</li>
                                <li>Reload the page to start fresh</li>
                                <li>Check your internet connection</li>
                                <li>Clear your browser cache and cookies</li>
                                <li>Contact support if the problem persists</li>
                            </ul>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
