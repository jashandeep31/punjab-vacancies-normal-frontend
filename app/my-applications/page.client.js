"use client";
import Navbar from "@/components/Navbar";
import { BaseURL } from "@/helpers/axiosInstance";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const MyApplications = () => {
    const [applications, setapplications] = useState([]);

    const getApplications = () => {
        axios
            .get(BaseURL + "api/v1/application/my", { withCredentials: true })
            .then((res) => {
                console.log(res.data);
                setapplications(res.data.applications);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    useEffect(() => {
        getApplications();

        return () => {};
    }, []);

    if (applications.length === 0)
        return (
            <div>
                <Navbar />
                <div className="container mx-auto mt-12">
                    <div className="grid mt-6 cards"></div>
                    <div className="flex flex-col items-center gap-6">
                        <h1 className="gap-6 text-4xl font-bold text-slate-500">
                            No Applications Found
                        </h1>
                        <Link
                            className="px-4 py-3 rounded bg-primary-50 text-primary-600"
                            href="/"
                        >
                            Apply Now
                        </Link>
                    </div>
                </div>
            </div>
        );

    return (
        <div>
            <Navbar />
            <div className="container mx-auto mt-12">
                <h1 className="text-lg font-bold">My applications</h1>
                <div className="grid gap-6 mt-6 cards">
                    {applications.map((application, index) => (
                        <div
                            className="p-4 border rounded card bg-slate-50"
                            key={index}
                        >
                            <h2 className="text-base font-bold">
                                {application.job.title}
                            </h2>
                            <p className="text-sm font-bold text-slate-500">
                                {application.job.organization}
                            </p>

                            <p className="mt-3 text-sm font-bold text-slate-600">
                                Applied On:{" "}
                                {new Date(
                                    application.createdAt
                                ).toLocaleDateString()}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyApplications;
