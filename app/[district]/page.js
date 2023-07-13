import Navbar from "@/components/Navbar";
import React from "react";
import Link from "next/link";
import LeftBar from "../components/LeftBar";
import JobCard from "../components/JobCard";
import Pagination from "../components/Pagination";
import Footer from "@/components/Footer";
import { BaseURL } from "@/helpers/axiosInstance";
import DistrictFilter from "@/components/DistrictFilter";
import { notFound } from "next/navigation";

export async function generateMetadata({ params, searchParams }) {
    const { district } = params;
    const fetchURL = BaseURL + "api/v1/job/all" + "?district=" + district;
    const res = await fetch(fetchURL, { revalidate: 600 });
    if (res.status !== 200) {
        notFound();
    }
    const { data } = await res.json();
    const jobs = await data.jobs.metadata[0];
    return {
        title: `${jobs.total} latest jobs in ${jobs.district.name} - Punjabvacancies`,
        description: `Latest ${jobs.total} jobs in ${jobs.district.name} Govt and private both - Punjabvacancies`,
        keywords: `${jobs.total} jobs in ${jobs.district.name} , latest jobs, govt jobs in ${jobs.district.name}  , private jobs in ${jobs.district.name} , jobs near me , ${jobs.district.name} , ${jobs.district.name} jobs , ${jobs.district.name} govt jobs , ${jobs.district.name} private jobs`,
    };
}

async function getJobs(searchParams, district, page) {
    const fetchURL =
        BaseURL +
        "api/v1/job/all" +
        "?district=" +
        district.district +
        "&page=" +
        page;
    const res = await fetch(fetchURL, {
        next: {
            revalidate: 10,
        },
    });
    const resData = await res.json();
    return resData.data;
}

export default async function Home(props) {
    const searchParams = props.searchParams;
    const district = props.params;
    const page = searchParams.page || 1;
    const jobsData = await getJobs(searchParams, district, page);
    return (
        <div>
            <Navbar />
            <div className="container mx-auto mt-6 md:mt-12">
                <div className="grid gap-4 md:gap-6 md:grid-cols-4">
                    <div className=" md:col-span-3">
                        <h1 className="mb-3 text-lg font-bold mt:mb-6 md:text-2xl">
                            Jobs in {jobsData.jobs.metadata[0].district.name}
                        </h1>
                        <DistrictFilter />
                        <div className="cards">
                            {jobsData.jobs.data.length === 0 ? (
                                <div className="my-48 text-center">
                                    <h1 className="text-4xl font-bold text-slate-500">
                                        No Active Jobs in This location
                                    </h1>
                                </div>
                            ) : null}
                            {jobsData.jobs.data.map((item, index) => (
                                <JobCard key={index} job={item} />
                            ))}
                        </div>
                        <div className="">
                            <Pagination
                                searchParams={searchParams}
                                metadata={jobsData.jobs.metadata}
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
