import { BaseURL } from "@/helpers/axiosInstance";
import React, { useState } from "react";
import axios from "axios";
const ApplicationCard = ({ data, filter }) => {
    const [status, setstatus] = useState(data.status);

    const statusShortlist = () => {
        axios
            .post(
                BaseURL + "api/v1/application/update/" + data._id,
                {
                    status: "shortlisted",
                },
                { withCredentials: true }
            )
            .then((res) => {
                setstatus(res.data.application.status);
            })
            .catch((err) => {
                console.log(err.response.data);
            });
    };

    const statusArchive = () => {
        axios
            .post(
                BaseURL + "api/v1/application/update/" + data._id,
                {
                    status: "archived",
                },
                { withCredentials: true }
            )
            .then((res) => {
                setstatus(res.data.application.status);
            })
            .catch((err) => {
                console.log(err.response.data);
            });
    };

    if (filter !== "all" && filter !== status) return null;

    return (
        <div className="p-3 my-3 border rounded shadow card">
            {status === "shortlisted" ? (
                <span className="inline-block px-2 py-1 mb-2 text-xs font-bold text-white bg-green-500 rounded-full">
                    Shortlisted
                </span>
            ) : null}
            {status === "archived" ? (
                <span className="inline-block px-2 py-1 mb-2 text-xs font-bold text-white bg-red-500 rounded-full">
                    Archived
                </span>
            ) : null}
            <p className="text-sm font-bold text-slate-500">
                Name:
                <span className="font-normal text-black">{data.name}</span>
            </p>
            <p className="text-sm font-bold text-slate-500">
                Age:
                <span className="font-normal text-black">{data.age}</span>
            </p>
            <p className="text-sm font-bold text-slate-500">
                Education:
                <span className="font-normal text-black">{data.education}</span>
            </p>
            <p className="text-sm font-bold text-slate-500">
                Experience:
                <span className="font-normal text-black">
                    {data.experience}
                </span>
            </p>
            <p className="text-sm font-bold text-slate-500">
                Address:
                <span className="font-normal text-black">{data.address}</span>
            </p>
            <p className="text-sm font-bold text-slate-500">
                About:
                <span className="font-normal text-black">{data.about}</span>
            </p>

            <div className="mt-5 buttons">
                {status === "shortlisted" ? null : (
                    <button
                        className={`px-4 py-2 mr-4 text-sm font-bold text-white bg-green-500 rounded`}
                        onClick={statusShortlist}
                    >
                        Shortlist
                    </button>
                )}
                {status === "archived" ? null : (
                    <button
                        className="px-4 py-2 text-sm font-bold text-white bg-red-500 rounded"
                        onClick={statusArchive}
                    >
                        Archive
                    </button>
                )}
            </div>
        </div>
    );
};

export default ApplicationCard;
