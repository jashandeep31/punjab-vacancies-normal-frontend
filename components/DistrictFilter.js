"use client";
import React, { useEffect, useState } from "react";
import Districts from "@/helpers/Districts";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { usePathname } from "next/navigation";
const DistrictFilter = () => {
    const [currentOption, setcurrentOption] = useState("all");
    const pathname = usePathname();
    useEffect(() => {
        if (pathname === "/") {
            setcurrentOption("all");
        } else {
            const path = pathname.replace("/", "");
            setcurrentOption(path);
        }
        return () => {};
    }, [pathname]);

    return (
        <div>
            <div className="flex items-center gap-2 ">
                <span>Filters:</span>
                <div className="flex overflow-x-hidden">
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={"auto"}
                        style={{ width: "70vw", overflowX: "hidden" }}
                    >
                        <SwiperSlide
                            style={{
                                width: "auto",
                                display: "inline-block",
                            }}
                            className="p-1 swiper-slide"
                        >
                            <Link
                                className={`px-3 py-1 text-xs border capitalize rounded-full hover:bg-slate-100 border-green-500 text-green-500 `}
                                href={`/${currentOption}`}
                            >
                                {currentOption === "all" ? "All" : null}

                                {
                                    Districts.find(
                                        (slug) => slug.slug === currentOption
                                    )?.name
                                }
                            </Link>
                        </SwiperSlide>

                        {currentOption === "all" ? null : (
                            <SwiperSlide
                                style={{
                                    width: "auto",
                                    display: "inline-block",
                                }}
                                className="p-1 swiper-slide"
                            >
                                <Link
                                    className={`px-3 py-1 text-xs border rounded-full hover:bg-slate-100 ${
                                        currentOption === "all"
                                            ? "border-green-500 text-green-500"
                                            : null
                                    } `}
                                    href="/"
                                >
                                    All
                                </Link>
                            </SwiperSlide>
                        )}
                        {Districts.map((item, index) => {
                            if (item.slug === currentOption) {
                                return null;
                            }
                            return (
                                <SwiperSlide
                                    key={index}
                                    style={{
                                        width: "auto",
                                        display: "inline-block",
                                    }}
                                    className="p-1 swiper-slide"
                                >
                                    <Link
                                        className={`px-3 py-1 text-xs border rounded-full hover:bg-slate-100 ${
                                            currentOption === item.slug
                                                ? "border-green-500 text-green-500"
                                                : null
                                        } `}
                                        href={`/${item.slug}`}
                                    >
                                        {item.name}
                                    </Link>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default DistrictFilter;

// <SwiperSlide
//     key={index}
//     style={{ width: "auto", display: "inline-block" }}
//     className="p-1 swiper-slide"
// >
//     <Link
//         className="px-3 py-1 text-xs border rounded-full hover:bg-slate-100"
//         href=""
//     >
//         {item.name}
//     </Link>
// </SwiperSlide>
