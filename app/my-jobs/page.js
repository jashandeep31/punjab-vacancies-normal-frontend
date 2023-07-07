"use client";
import Navbar from "@/components/Navbar";
import { BaseURL } from "@/helpers/axiosInstance";
import { Book, Briefcase, Clock, Factory, MapPin } from "lucide-react";
import ProtectedRoutes from "@/helpers/protectedRoutes";
import React, { useEffect, useState } from "react";
import axios from "axios";
const MyJobs = () => {
    const [jobs, setjobs] = useState([]);

    useEffect(() => {
        axios
            .get(BaseURL + "api/v1/job/manager-jobs", { withCredentials: true })
            .then((res) => {
                if (res.status === 200) {
                    setjobs(res.data.jobs);
                }
            })
            .catch((err) => {
                console.log(err);
            });

        return () => {};
    }, []);

    return (
        <ProtectedRoutes permissions={["admin", "manager"]}>
            <div className="">
                <Navbar />
                <div className="container mx-auto mt-12">
                    <h1 className="text-xl font-bold">My Jobs</h1>
                    <div className="grid gap-3 mt-6 cards">
                        {jobs.map((job, index) => (
                            <div
                                className="p-2 border rounded card bg-slate-100"
                                key={index}
                            >
                                <h1 className="text-base font-medium">
                                    {job.title}
                                </h1>
                                <ul className="flex flex-wrap mt-2 text-xs font-medium gap-x-3 gap-y-2 text-slate-500">
                                    <li className="flex items-center gap-1">
                                        <span className="">
                                            <MapPin size={10} />
                                        </span>
                                        {job.district?.name}
                                    </li>
                                    <li className="flex items-center gap-1">
                                        <span className="">
                                            <Factory size={10} />
                                        </span>
                                        {job.jobSector}
                                    </li>
                                    <li className="flex items-center gap-1">
                                        <span className="">
                                            <Clock size={10} />
                                        </span>
                                        {job.jobType}
                                    </li>
                                    <li className="flex items-center gap-1">
                                        <span className="">₹</span>
                                        {job.salary}
                                    </li>
                                    <li className="flex items-center gap-1">
                                        <span className="">
                                            <Briefcase size={10} />
                                        </span>
                                        {job.experience}
                                    </li>
                                    <li className="flex items-center gap-1">
                                        <span className="">
                                            <Book size={10} />
                                        </span>
                                        {job.education}
                                    </li>
                                </ul>
                                <div className="mt-3 ">
                                    <button className="px-2 text-sm font-bold rounded hover:underline text-primary-500">
                                        Edit Job
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </ProtectedRoutes>
    );
};

export default MyJobs;
