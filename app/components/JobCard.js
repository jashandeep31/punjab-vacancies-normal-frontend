import React from "react";
import { Book, Briefcase, Clock, Factory, MapPin } from "lucide-react";
import Link from "next/link";

const JobCard = ({ job }) => {
    function createMarkup(c) {
        return { __html: c };
    }
    return (
        <div className="block p-4 mt-4 bg-white border rounded shadow md:mt-6">
            <div className="flex items-center w-full gap-4">
                <span className="flex items-center justify-center w-12 h-12 rounded-full text-primary-600 bg-primary-100">
                    <span className="text-xl font-bold uppercase">
                        {job.organization[0]}
                    </span>
                </span>
                <div>
                    <h2 className="text-sm font-bold">{job.title}</h2>
                    <h6 className="text-xs font-bold capitalize text-slate-500">
                        {job.byTeam ? (
                            <span>{job.orgName}</span>
                        ) : (
                            <span>{job.organization}</span>
                        )}
                    </h6>
                </div>
            </div>
            <div className="">
                <ul className="flex flex-wrap mt-4 text-xs font-medium gap-x-3 gap-y-2 text-slate-500">
                    <li className="flex items-center gap-1">
                        <span className="">
                            <MapPin size={10} />
                        </span>
                        {job.district.name}
                    </li>
                    <li className="flex items-center gap-1">
                        <span className="">
                            <Factory size={10} />
                        </span>
                        {job.jobSector}
                    </li>
                    <li className="flex items-center gap-1">
                        <span className="">
                            <Clock size={10} />
                        </span>
                        {job.jobType}
                    </li>
                    <li className="flex items-center gap-1">
                        <span className="">₹</span>
                        {job.salary}
                    </li>
                    <li className="flex items-center gap-1">
                        <span className="">
                            <Briefcase size={10} />
                        </span>
                        {job.experience}
                    </li>
                    <li className="flex items-center gap-1">
                        <span className="">
                            <Book size={10} />
                        </span>
                        {job.education}
                    </li>
                </ul>

                <div
                    dangerouslySetInnerHTML={createMarkup(job.description)}
                    className="mt-4 text-xs text-slate-500"
                ></div>

                <div className="flex items-center gap-4 mt-4">
                    <Link
                        href={"/job/" + job.slug}
                        className="px-6 py-2 text-sm font-bold transition-all duration-300 rounded bg-primary-50 text-primary-500 hover:bg-primary-100"
                    >
                        Apply Now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default JobCard;
