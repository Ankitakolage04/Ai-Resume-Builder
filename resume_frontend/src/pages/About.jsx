import React from "react";
import { FaRocket, FaCheckCircle, FaUsers } from "react-icons/fa";

function About() {
    return (
        <div className="min-h-screen bg-base-200 py-12 px-4 font-sans">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-extrabold mb-4 text-primary">About ResumeAI</h1>
                    <p className="text-xl text-gray-600">Building the future of career advancement.</p>
                </div>

                <div className="card bg-base-100 shadow-xl mb-8">
                    <div className="card-body">
                        <h2 className="card-title text-2xl mb-4"><FaRocket className="text-secondary" /> Our Mission</h2>
                        <p className="text-lg leading-relaxed text-gray-700">
                            At ResumeAI, we believe that everyone deserves a fair shot at their dream job.
                            Traditional resume writing is time-consuming, confusing, and often ineffective.
                            We're changing that by leveraging advanced Artificial Intelligence to help you tell your professional story in the most compelling way possible.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title text-2xl mb-4"><FaCheckCircle className="text-success" /> Why Choose Us?</h2>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2"><FaCheckCircle className="text-success text-sm" /> ATS-Friendly Templates</li>
                                <li className="flex items-center gap-2"><FaCheckCircle className="text-success text-sm" /> Intelligent Content Generation</li>
                                <li className="flex items-center gap-2"><FaCheckCircle className="text-success text-sm" /> Instant PDF Download</li>
                                <li className="flex items-center gap-2"><FaCheckCircle className="text-success text-sm" /> Completely Free to Use</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title text-2xl mb-4"><FaUsers className="text-accent" /> Who It's For</h2>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2">🔹 Software Engineers & Developers</li>
                                <li className="flex items-center gap-2">🔹 Product Managers & Designers</li>
                                <li className="flex items-center gap-2">🔹 Marketing Professionals</li>
                                <li className="flex items-center gap-2">🔹 Students & Fresh Graduates</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
