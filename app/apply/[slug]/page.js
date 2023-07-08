import CustomError from "@/app/404";
import Navbar from "@/components/Navbar";
import ProtectedRoutes from "@/helpers/protectedRoutes";
import React from "react";
import { BaseURL } from "@/helpers/axiosInstance";
import MainForm from "./components/MainForm";

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
    if (job) {
        return {
            title: `${job.title} - ${job.organization}`,
            description: `We are Hiring ${job.title} in ${job.organization} in ${job.district.name} in punjab - Punjabvacancies`,
        };
    }
}

export default async function ApplyPage(props) {
    const jobData = await getJob(props);
    console.log(jobData);
    if (jobData === null || jobData.inbuiltForm !== true) {
        return <CustomError />;
    }
    return (
        <ProtectedRoutes permissions={["any"]}>
            <div>
                <Navbar />
                <MainForm jobData={jobData} />
            </div>
        </ProtectedRoutes>
    );
}
