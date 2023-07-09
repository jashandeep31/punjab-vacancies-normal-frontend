import React from "react";
import Link from "next/link";

const LeftBar = () => {
    return (
        <div className="mt-12 md:mt-0">
            <div className="px-4 py-4 bg-white border rounded-md card">
                <h2 className="hidden text-sm font-medium md:text-base md:block md:font-bold">
                    Get Daily Alerts
                </h2>
                <p className="text-xs md:mt-2 text-slate-500">
                    Looking for job actively? Join our telegram group now.
                </p>
                <Link
                    href="https://t.me/punjabvacancies"
                    className="flex items-center justify-center w-full gap-2 py-2 mt-4 text-sm font-medium text-white transition-all duration-300 bg-blue-400 border rounded hover:bg-blue-300"
                >
                    <span>Join Now</span>
                </Link>
            </div>
            <div className="px-4 py-4 mt-6 bg-white border rounded-md card ">
                <h2 className="text-base font-bold">Post a Job vacancy</h2>
                <p className="mt-2 text-xs text-slate-500">
                    Post a job vacancy to get the best candidates in the market,
                    Job posting is free of cost.
                </p>
                <Link
                    href="/create"
                    className="block w-full px-4 py-2 mt-4 text-sm font-medium text-center text-white rounded bg-primary-500"
                >
                    Create Post
                </Link>
            </div>
        </div>
    );
};

export default LeftBar;
