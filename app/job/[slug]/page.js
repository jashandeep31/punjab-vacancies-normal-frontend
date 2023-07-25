import Navbar from "@/components/Navbar";
import { BaseURL } from "@/helpers/axiosInstance";
import React from "react";
import { Zap } from "lucide-react";
import Footer from "@/components/Footer";
import LeftBar from "@/app/components/LeftBar";
import CustomError from "@/app/404";
import ApplyButtons from "./components/ApplyButtons";
import Infinite from "./components/Infinite";
import Script from "next/script";
import moment from "moment/moment";
import Link from "next/link";

async function getJob({ params }) {
    const res = await fetch(BaseURL + "api/v1/job/" + params.slug, {
        next: {
            revalidate: 10,
        },
    });
    const data = await res.json();
    return data.job;
}
export async function generateMetadata({ params, searchParams }) {
    const res = await fetch(BaseURL + "api/v1/job/" + params.slug, {
        next: {
            revalidate: 600,
        },
    });
    const { job } = await res.json();
    if (job) {
        return {
            title: `${job.title} - ${job.organization}`,
            description: `We are Hiring ${job.title} in ${job.organization} in ${job.district.name} in punjab - Punjabvacancies`,
        };
    }
}

export default async function JobPage(props) {
    const jobData = await getJob(props);
    if (jobData === null) {
        return <CustomError />;
    }
    let baseSalaryValues;
    if (jobData.activeGoogleCard) {
        if (jobData.baseSalary.value.isBoth)
            baseSalaryValues = {
                "@type": "QuantitativeValue",
                minValue: jobData.baseSalary.value.minValue,
                maxValue: jobData.baseSalary.value.maxValue,
                unitText: jobData.baseSalary.value.unitText,
            };
        else {
            baseSalaryValues = {
                "@type": "QuantitativeValue",
                value: jobData.baseSalary.value.value,
                unitText: jobData.baseSalary.value.unitText,
            };
        }
    }
    const jsonLd = jobData.activeGoogleCard && {
        "@context": "https://schema.org",
        "@type": "JobPosting",
        title: jobData.title,
        description: jobData.description,
        identifier: {
            "@type": "PropertyValue",
            name: "PunjabVacancies",
            value: `${jobData.slug}`,
        },
        datePosted: moment(jobData.createdAt).format("YYYY-MM-DD"),
        validThrough: moment(jobData.deadline).format("YYYY-MM-DD"),
        employmentType:
            jobData.jobType === "Full Time" ? "FULL_TIME" : "PART_TIME",
        hiringOrganization: {
            "@type": "Organization",
            name: `${jobData.organization}`,
            sameAs: jobData.gorganization.website,
            logo: jobData.gorganization.logo,
        },
        jobLocation: {
            "@type": "Place",
            address: {
                "@type": "PostalAddress",
                streetAddress: jobData.jobLocation.address.streetAddress,
                addressLocality: jobData.jobLocation.address.addressLocality,
                addressRegion: jobData.jobLocation.address.addressRegion,
                postalCode: jobData.jobLocation.address.postalCode,
                addressCountry: jobData.jobLocation.address.addressCountry,
            },
        },
        baseSalary: {
            "@type": "MonetaryAmount",
            currency: "INR",
            value: baseSalaryValues,
        },
    };

    return (
        <div>
            {jobData.activeGoogleCard ? (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            ) : null}
            <Navbar />
            <div className="container mx-auto mt-12">
                <div className="grid gap-6 md:grid-cols-4">
                    <div className="md:col-span-3 ">
                        <h1 className="flex items-center gap-2 text-xl font-bold">
                            {jobData.title}{" "}
                            {jobData.inbuiltForm ? (
                                <span>
                                    <Zap className="h-4 text-primary-500" />
                                </span>
                            ) : null}
                        </h1>
                        <p className="text-sm font-medium text-slate-500">
                            {jobData.organization}
                        </p>
                        {moment(moment(jobData.deadline).format("ll")).isBefore(
                            moment().format("ll")
                        ) ? (
                            <div className="px-4 py-3 mt-3 bg-red-100 border border-red-500 rounded">
                                Recruiter may not accept application as deadline
                                is over.
                            </div>
                        ) : (
                            <div className="px-2 py-1 mt-3 text-xs border rounded bg-slate-100 ">
                                Don&apos;t pay any money to anyone for job
                                application, test or interview. If any company
                                ask you for money please report us immediately.
                            </div>
                        )}
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
                                <Link
                                    className="underline duration-300 hover:text-slate-800"
                                    href={`/${jobData.district.slug}`}
                                >
                                    {jobData.district.name}
                                </Link>
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
                            <div1
                                className="text-sm"
                                dangerouslySetInnerHTML={{
                                    __html: jobData.interviewDetails,
                                }}
                            ></div1>
                        </div>
                        <div className="mt-6">
                            <h4 className="text-sm font-bold text-slate-500">
                                Job Detail:
                            </h4>
                            <div
                                className="text-sm"
                                dangerouslySetInnerHTML={{
                                    __html: jobData.description,
                                }}
                            ></div>
                        </div>
                        <div className="mt-6">
                            <h4 className="text-sm font-bold text-slate-500">
                                Terms and conditions
                            </h4>
                            <div className="my-3 question">
                                <h5 className="text-sm font-bold text-slate-800">
                                    Who is going to be hire?
                                </h5>
                                <p className="text-sm text-slate-500">
                                    {jobData.organization} is going to hire for
                                    this job. We are not playing any kind of
                                    role in the hiring process. We are just
                                    providing you with information about jobs in
                                    Punjab. For the latest information regarding
                                    the job post, try to connect with the
                                    officials of the organization to get more
                                    information about the job.
                                </p>
                            </div>

                            <div className="my-3 question">
                                <h5 className="text-sm font-bold text-slate-800">
                                    Is the job graduated?
                                </h5>
                                <p className="text-sm text-slate-500">
                                    We don&apos;t graduate any jobs. We just
                                    provide information about the job. Hiring a
                                    candidate is totally dependent on the
                                    organization. We are not responsible for any
                                    kind of hiring process.
                                </p>
                            </div>
                            <div className="my-3 question">
                                <h5 className="text-sm font-bold text-slate-800">
                                    How can I apply for a job at{" "}
                                    {jobData.organization}?
                                </h5>
                                <p className="text-sm text-slate-500">
                                    You can apply for this job by clicking on
                                    the button below, if it is given. Otherwise,
                                    you can check our interview details section
                                    to get more information about the job.
                                </p>
                            </div>
                            <div className="my-3 question">
                                <h5 className="text-sm font-bold text-slate-800">
                                    Till how long this job will be active?
                                </h5>
                                <p className="text-sm text-slate-500">
                                    Deadline of the job is{" "}
                                    {new Date(
                                        jobData.deadline
                                    ).toLocaleDateString()}
                                    . But still if you have any kind of doubt
                                    you can contact the organization to get more
                                    information about the job.
                                </p>
                            </div>
                            <div className="my-3 question">
                                <h5 className="text-sm font-bold text-slate-800">
                                    Is the Job Data Upto date?
                                </h5>
                                <p className="text-sm text-slate-500">
                                    We always try to provide you with the latest
                                    data for the job post. But still if you have
                                    any kind of doubt you can contact the
                                    organization to get more information about
                                    the job. And if you find any kind of mistake
                                    in the data provided by us, you can contact
                                    us to get it corrected.
                                </p>
                            </div>
                        </div>
                        <ApplyButtons jobData={jobData} />
                        <Infinite district={jobData.district.slug} />
                    </div>
                    <div className="hidden md:block">
                        <LeftBar />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
