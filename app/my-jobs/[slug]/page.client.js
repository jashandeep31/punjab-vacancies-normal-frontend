"use client";
import Navbar from "@/components/Navbar";
import { BaseURL } from "@/helpers/axiosInstance";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ApplicationCard from "./components/ApplicationCard";

const PageCient = ({ slug }) => {
    const [Applications, setApplications] = useState([]);
    const [filter, setfilter] = useState("all");

    const getApplications = () => {
        axios
            .get(BaseURL + "api/v1/application/" + slug, {
                withCredentials: true,
            })
            .then((res) => {
                setApplications(res.data.applications);
            })
            .catch((err) => {
                console.log(err.response.data);
            });
    };

    useEffect(() => {
        getApplications();

        return () => {
            setApplications([]);
        };
    }, []);

    return (
        <div>
            <Navbar />
            <div className="container mx-auto mt-12">
                <h1 className="text-lg font-bold">Applications</h1>
                <p className="text-sm font-medium text-slate-500">
                    For your posted job
                </p>

                <div className="mt-6">
                    <div className="flex flex-wrap filters">
                        <p className="font-bold ">
                            Filters:
                            <button
                                className={`px-3 py-1 mx-1 text-xs border rounded-full font-medium bg-slate-100 ${
                                    filter === "all"
                                        ? "border-green-500 text-green-500 font-bold"
                                        : "text-black"
                                }`}
                                onClick={() => {
                                    setfilter("all");
                                }}
                            >
                                All
                            </button>
                            <button
                                className={`px-3 py-1 mx-1 text-xs border rounded-full font-medium bg-slate-100 ${
                                    filter === "shortlisted"
                                        ? "border-green-500 text-green-500 font-bold"
                                        : "text-black"
                                }`}
                                onClick={() => {
                                    setfilter("shortlisted");
                                }}
                            >
                                Shortlisted
                            </button>
                            <button
                                className={`px-3 py-1 mx-1 text-xs border rounded-full font-medium bg-slate-100 ${
                                    filter === "archived"
                                        ? "border-green-500 text-green-500 font-bold"
                                        : "text-black"
                                }`}
                                onClick={() => {
                                    setfilter("archived");
                                }}
                            >
                                Archived
                            </button>
                        </p>
                    </div>

                    {Applications.map((application, index) => (
                        <ApplicationCard
                            filter={filter}
                            data={application}
                            key={index}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PageCient;
