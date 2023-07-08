"use client";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import UserContext from "@/context/userContext";

const ApplyButtons = ({ jobData }) => {
    const [isApplied, setisApplied] = useState(false);
    const userContextData = useContext(UserContext);

    useEffect(() => {
        if (userContextData.userState === "authenticated") {
            if (userContextData.userData?.applications?.includes(jobData._id)) {
                setisApplied(true);
            }
        }
        return () => {};
    }, [userContextData, jobData]);

    const RenderApplyNowLink = () => {
        return (
            <div>
                {jobData.applyNowLink ? (
                    <Link
                        className="px-4 py-3 text-sm font-bold rounded bg-primary-50 text-primary-500"
                        href={jobData.applyNowLink}
                    >
                        Apply Now
                    </Link>
                ) : null}
            </div>
        );
    };

    if (isApplied) {
        return (
            <div className="flex items-center mt-6">
                <Link
                    href="/my-applications"
                    className="flex items-center gap-1 px-4 py-3 text-sm font-bold text-green-700 rounded bg-green-50"
                >
                    Already Applied
                </Link>

                <Link
                    className="ml-4 text-sm font-bold rounded text-primary-500"
                    href={"/job/" + jobData.slug + "/image"}
                >
                    Share
                </Link>
            </div>
        );
    }

    return (
        <div className="flex items-center mt-6">
            {jobData.inbuiltForm !== true ? (
                <RenderApplyNowLink />
            ) : (
                <Link
                    className="flex items-center gap-1 px-4 py-3 text-sm font-bold rounded text-primary-500 bg-primary-50"
                    href={"/apply/" + jobData.slug}
                >
                    Apply Now{" "}
                </Link>
            )}
            <Link
                className="ml-4 text-sm font-bold rounded text-primary-500"
                href={"/job/" + jobData.slug + "/image"}
            >
                Share
            </Link>
        </div>
    );
};

export default ApplyButtons;
