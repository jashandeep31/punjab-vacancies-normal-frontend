"use client";
import { BaseURL } from "@/helpers/axiosInstance";
import axios from "axios";
import React, { useEffect, useState } from "react";
import html2canvas from "html2canvas";
import { ArrowBigDownDash, Link } from "lucide-react";
import Navbar from "@/components/Navbar";
const JobImage = (props) => {
    const [job, setjob] = useState();
    const [ImageLink, setImageLink] = useState("");
    const [canvasStatus, setcanvasStatus] = useState(false);
    const [jobLoaded, setjobLoaded] = useState(false);

    useEffect(() => {
        axios
            .get(BaseURL + "api/v1/job/" + props.params.slug)
            .then((res) => {
                if (res.status === 200) {
                    setjobLoaded(true);
                    setjob(res.data.job);
                }
            })
            .catch((err) => {});
        return () => {};
    }, []);

    const createSC = () => {
        html2canvas(document.getElementById("banner")).then(function (canvas) {
            const dataUrl = canvas.toDataURL();
            setcanvasStatus(true);
            setImageLink(dataUrl);
        });
    };

    useEffect(() => {
        if (jobLoaded) {
            createSC();
        }
        return () => {};
    }, [jobLoaded]);

    if (!jobLoaded) {
        return <div>Loading..</div>;
    }
    return (
        <div className="w-full ">
            <Navbar />
            <div className="container flex justify-center py-4 mx-auto">
                {!canvasStatus ? (
                    <div className="opacity-0">
                        <div className="flex justify-between " id="banner">
                            <div className="flex flex-col justify-between w-[1280px] h-[1280px] border lightBg">
                                <div className="p-8 header">
                                    <h1 className="text-[150px] font-black">
                                        We are hiring
                                    </h1>
                                    <ul className="mt-12 text-[50px]">
                                        <li>
                                            <span className="mr-6 font-bold">
                                                Profile:
                                            </span>
                                            {job.title}
                                        </li>
                                        <li>
                                            <span className="mr-6 font-bold">
                                                organization:
                                            </span>

                                            {job.organization}
                                        </li>
                                        <li>
                                            <span className="mr-6 font-bold">
                                                Salary:
                                            </span>

                                            {job.salary}
                                        </li>
                                        <li>
                                            <span className="mr-6 font-bold">
                                                Job sector:
                                            </span>
                                            {job.jobSector}
                                        </li>
                                        <li>
                                            <span className="mr-6 font-bold">
                                                Job type:
                                            </span>
                                            {job.jobType}
                                        </li>
                                        <li>
                                            <span className="mr-6 font-bold">
                                                Experience:
                                            </span>
                                            {job.experience}
                                        </li>
                                        <li>
                                            <span className="mr-6 font-bold">
                                                Education:
                                            </span>
                                            {job.education}
                                        </li>
                                    </ul>
                                </div>
                                <div className="p-16 text-4xl footer">
                                    <p className="flex justify-between font-bold ">
                                        <span>
                                            Website: punjabvacancies.live
                                        </span>
                                        <span>Instagram: @punjabvacancies</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <img
                        className="w-full md:w-1/2"
                        src={ImageLink}
                        alt="canva"
                    />
                )}
            </div>
            <div className="container flex items-center justify-center mx-auto">
                <a
                    className="flex items-center gap-2 px-4 py-2 duration-300 border rounded hover:bg-slate-100"
                    href={ImageLink}
                    download={job.title}
                >
                    <ArrowBigDownDash className="h-6" />
                    Download Banner
                </a>
            </div>
        </div>
    );
};

export default JobImage;
