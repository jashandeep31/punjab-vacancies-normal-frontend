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
        return notFound();
    }
    const { data } = await res.json();

    const jobs = await data.jobs.metadata[0];
    return {
        title: `latest jobs in ${jobs.district.name} - Punjabvacancies`,
        description: `Discover the latest jobs in ${jobs.district.name}.government and private sector jobs across various industries on punjabvacancies.live - find your dream career today!"`,
        keywords: `Job Vacancies, ${jobs.district.name} Jobs, Latest Job Listings, Government Jobs ${jobs.district.name}, Private Sector Jobs, Career Opportunities, Dream Career, Job Search ${jobs.district.name}, Employment Opportunities, punjabvacancies.live, Up-to-date Job Listings, Professional Journey, Job Market ${jobs.district.name}, Job Seekers ${jobs.district.name}, Job Openings, Career Development, Job Search Website, Find Jobs in ${jobs.district.name}, Career in ${jobs.district.name}, Job Portal ${jobs.district.name}, Punjab Vacancies, private job near me, government job near me, job in ${jobs.district.name} for female, job in ${jobs.district.name} for femalem, ${jobs.district.name} jobs contact number`,
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
                            Latest Jobs in{" "}
                            {jobsData.jobs.metadata[0].district.name}
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
