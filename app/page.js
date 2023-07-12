import Navbar from "@/components/Navbar";
import React from "react";
import Link from "next/link";
import LeftBar from "./components/LeftBar";
import JobCard from "./components/JobCard";
import Pagination from "./components/Pagination";
import Footer from "@/components/Footer";
import { BaseURL } from "@/helpers/axiosInstance";
import DistrictFilter from "@/components/DistrictFilter";

export const metadata = {
    title: "Latest Jobs in Punjab - punjabvacancies",
    description:
        "Find the latest job vacancies in Punjab on PunjabVacancies.live. We provide up-to-date listings for government and private sector jobs across various industries. Discover your dream career in Punjab today",
    keywords:
        "job alert punjab  , Punjab, government jobs, private sector jobs, Punjab job opportunities, job openings, careers, employment, job search, job listings, Punjab jobs, job portal, job board, latest vacancies, job alerts, job notifications , ",
};

async function getJobs(searchParams) {
    const res = await fetch(
        BaseURL +
            "api/v1/job/all" +
            "?page=" +
            (searchParams.page ? searchParams.page : 1),
        {
            next: {
                revalidate: 10,
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
                    <div className=" md:col-span-3">
                        <h1 className="mb-4 text-lg font-bold md:text-2xl">
                            Jobs
                        </h1>

                        <DistrictFilter />
                        <div className="cards">
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
