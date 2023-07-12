"use client";
import axios from "axios";
import React, { useState } from "react";
import {
    useInfiniteQuery,
    QueryClientProvider,
    QueryClient,
} from "react-query";
import { BaseURL } from "@/helpers/axiosInstance";
import JobCard from "@/app/components/JobCard";

const queryClient = new QueryClient();

const Main = ({ district }) => {
    const [isMore, setisMore] = useState(true);
    const [districtName, setdistrictName] = useState("");

    const getData = async ({ pageParam = 1, district }) => {
        const res = await axios.get(BaseURL + "api/v1/job/all", {
            params: {
                page: pageParam,
                district: district,
                limit: 5,
            },
        });
        const { jobs } = res.data.data;
        setdistrictName(jobs.metadata[0].district.name);
        if (jobs.metadata[0].isNext === true) {
            setisMore(true);
        } else {
            setisMore(false);
        }
        return jobs;
    };

    const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
        ["jobs"],
        ({ pageParam = 1 }) => getData({ pageParam, district }),
        {
            getNextPageParam: (_, pages) => {
                return pages.length + 1;
            },
            refetchOnWindowFocus: false,
        }
    );

    return (
        <div className="mt-12">
            {data?.pages?.map((page, index) =>
                page.data.map((job) => <JobCard job={job} key={job._id} />)
            )}
            <div className="flex justify-center mt-6">
                {isMore ? (
                    <button
                        type="button"
                        onClick={() => {
                            fetchNextPage();
                        }}
                        className="px-3 py-2 border rounded text-slate-500 "
                    >
                        {isFetchingNextPage ? "Loading more..." : "Load More"}
                    </button>
                ) : (
                    <h3 className="text-lg font-bold text-slate-500">
                        No More jobs in {districtName}{" "}
                    </h3>
                )}
            </div>
        </div>
    );
};

const Infinite = ({ district }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <Main district={district} />
        </QueryClientProvider>
    );
};

export default Infinite;
