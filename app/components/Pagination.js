"use client";
import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

const Pagination = ({ searchParams, total }) => {
    const [pageNumber, setpageNumber] = useState(
        searchParams.page ? Number(searchParams.page) : 1
    );

    const router = useRouter();

    const [nextStatus, setnextStatus] = useState(
        total > 10 * pageNumber ? true : false
    );

    useEffect(() => {
        setpageNumber(searchParams.page ? Number(searchParams.page) : 1);
        const tempPage = searchParams.page ? Number(searchParams.page) : 1;
        setnextStatus(total > 10 * tempPage ? true : false);
        return () => {};
    }, [searchParams]);

    const prevPage = () => {
        if (pageNumber > 1) {
            const queryParams = new URLSearchParams();
            queryParams.set("page", pageNumber - 1);
            router.push(`/?${queryParams.toString()}`);
        }
    };

    const nextPage = () => {
        if (nextStatus) {
            const queryParams = new URLSearchParams();
            queryParams.set("page", searchParams.page ? pageNumber + 1 : 2);
            router.push(`/?${queryParams.toString()}`);
        }
    };

    return (
        <div className="pagination">
            <div className="flex items-center gap-4 my-12">
                <button
                    className="flex items-center px-4 py-2 text-sm rounded text-primary-600 disabled:text-slate-900 "
                    disabled={pageNumber > 1 ? false : true}
                    onClick={prevPage}
                >
                    <ChevronLeft className="w-4 h-4" /> Prev
                </button>
                <h2 className="font-bold underline ">
                    {pageNumber ? <span> {pageNumber} </span> : <span> 1</span>}
                </h2>
                <button
                    className="flex items-center px-4 py-2 text-sm rounded text-primary-600 disabled:text-slate-900"
                    onClick={nextPage}
                    disabled={!nextStatus}
                >
                    Next <ChevronRight className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
};

export default Pagination;
