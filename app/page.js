import Navbar from "@/components/Navbar";
import React from "react";
import Link from "next/link";
import LeftBar from "./components/LeftBar";
import JobCard from "./components/JobCard";
import Pagination from "./components/Pagination";
import Footer from "@/components/Footer";
import { BaseURL } from "@/helpers/axiosInstance";

async function getJobs(searchParams) {
    const res = await fetch(
        BaseURL +
            "api/v1/job/all" +
            "?page=" +
            (searchParams.page ? searchParams.page : 1),
        {
            next: {
                revalidate: 1,
            },
        }
    );
    const resData = await res.json();
    return resData.data;
}

export default async function Home(props) {
    const searchParams = props.searchParams;

    const jobsData = await getJobs(searchParams);
    return (
        <div>
            <Navbar />
            <div className="container mx-auto mt-4 md:mt-12">
                <div className="grid gap-4 md:gap-6 md:grid-cols-4">
                    <div className="order-last md:col-span-3 md:order-first">
                        <h1 className="text-lg font-bold md:text-2xl">Jobs</h1>
                        <div className="cards">
                            {jobsData.jobs.map((item, index) => (
                                <JobCard key={index} job={item} />
                            ))}
                        </div>
                        <div className="">
                            <Pagination
                                searchParams={searchParams}
                                total={jobsData.total}
                            />
                        </div>
                    </div>
                    <LeftBar />
                </div>
            </div>
            <Footer />
        </div>
    );
}
