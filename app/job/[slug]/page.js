import Navbar from "@/components/Navbar";
import { BaseURL } from "@/helpers/axiosInstance";
import React from "react";
import Link from "next/link";
import LeftBar from "@/app/components/LeftBar";
import CustomError from "@/app/404";
async function getJob({ params }) {
    const res = await fetch(BaseURL + "api/v1/job/" + params.slug, {
        next: {
            revalidate: 10,
        },
    });
    const data = await res.json();
    return data.job;
}
export async function generateMetadata({ params, searchParams }, parent) {
    const res = await fetch(BaseURL + "api/v1/job/" + params.slug, {
        next: {
            revalidate: 10,
        },
    });
    const { job } = await res.json();
    return {
        title: `${job.title} - ${job.organization}`,
        disription: `We are Hiring ${job.title} in ${job.organization} in ${job.district.name} in punjab - Punjabvacancies`,
    };
}
export default async function JobPage(props) {
    const jobData = await getJob(props);
    if (jobData === null) {
        return <CustomError />;
    }

    return (
        <div>
            <Navbar />
            <div className="container mx-auto mt-12">
                <div className="grid gap-6 md:grid-cols-4">
                    <div className="md:col-span-3 ">
                        <h1 className="text-xl font-bold">{jobData.title}</h1>
                        <p className="text-sm font-medium text-slate-500">
                            {jobData.organization}
                        </p>

                        <div className="grid gap-4 px-4 py-3 my-4 text-sm border card bg-slate-50 text-slate-500">
                            <p>
                                <span className="mr-2 font-bold capitalize">
                                    organization:
                                </span>
                                {jobData.organization}
                            </p>
                            <p>
                                <span className="mr-2 font-bold capitalize">
                                    Location:
                                </span>
                                {jobData.district.name}
                            </p>
                            <p>
                                <span className="mr-2 font-bold capitalize">
                                    Job Sector:
                                </span>
                                {jobData.jobSector}
                            </p>
                            <p>
                                <span className="mr-2 font-bold capitalize">
                                    Job Type:
                                </span>
                                {jobData.jobType}
                            </p>
                            <p>
                                <span className="mr-2 font-bold capitalize">
                                    Education:
                                </span>
                                {jobData.education}
                            </p>
                            <p>
                                <span className="mr-2 font-bold capitalize">
                                    Experience:
                                </span>
                                {jobData.experience}
                            </p>
                            <p>
                                <span className="mr-2 font-bold capitalize">
                                    Salary:
                                </span>
                                {jobData.salary}
                            </p>

                            <p>
                                <span className="mr-2 font-bold capitalize">
                                    Deadline to apply:
                                </span>
                                {new Date(
                                    jobData.deadline
                                ).toLocaleDateString()}
                            </p>
                        </div>

                        <div className="mt-6">
                            <h4 className="text-sm font-bold text-slate-500">
                                Interview Detail:
                            </h4>
                            <p className="text-sm">
                                {jobData.interviewDetails}
                            </p>
                        </div>
                        <div className="mt-6">
                            <h4 className="text-sm font-bold text-slate-500">
                                Job Detail:
                            </h4>
                            <p className="text-sm">{jobData.description}</p>
                        </div>

                        <div className="flex items-center mt-6">
                            {jobData.applyNowLink ? (
                                <Link
                                    className="px-4 py-3 text-sm font-bold rounded bg-primary-50 text-primary-500"
                                    href={jobData.applyNowLink}
                                >
                                    Apply Now
                                </Link>
                            ) : null}
                            <Link
                                className="ml-4 text-sm font-bold rounded text-primary-500"
                                href={"/job/" + jobData.slug + "/image"}
                            >
                                Share
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <LeftBar />
                    </div>
                </div>
            </div>
        </div>
    );
}
