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

    const getData = async ({ pageParam = 1 }) => {
        console.log(
            "🚀 ~ file: Infinite.js:15 ~ getData ~ pageParam:",
            pageParam
        );
        const res = await axios.get(BaseURL + "api/v1/job/all", {
            params: {
                page: pageParam,
                district: "bathinda",
                limit: 5,
            },
        });
        console.log("🚀 ~ file: Infinite.js:26 ~ getData ~ res:", res);
        const { jobs } = res.data.data;
        if (jobs.length === 0) {
            setisMore(false);
        } else {
            setisMore(true);
        }
        return jobs;
    };

    const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
        ["jobs"],
        ({ pageParam = 1 }) => getData({ pageParam }),
        {
            getNextPageParam: (_, pages) => {
                return pages.length + 1;
            },
            refetchOnWindowFocus: false,
        }
    );

    const JobRender = ({ jobs }) => {
        return jobs.map((job) => <JobCard job={job} key={job._id} />);
    };

    return (
        <div className="mt-12">
            {data?.pages?.map((page, index) => (
                <JobRender jobs={page} key={index} />
            ))}
            <div className="flex justify-center mt-6">
                {isMore ? (
                    <button
                        type="button"
                        onClick={() => {
                            console.log("got pressed");
                            fetchNextPage();
                        }}
                        className="px-3 py-2 border rounded text-slate-500 "
                    >
                        {isFetchingNextPage ? "Loading more..." : "Load More"}
                    </button>
                ) : null}
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
