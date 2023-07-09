"use client";
import {
    AlignJustify,
    HeartHandshake,
    Home,
    Newspaper,
    ScrollText,
    SmartphoneNfc,
    StickyNote,
    User,
    UserCheck2,
    X,
} from "lucide-react";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import GoogleIcons from "../public/icons/google.png";
import Image from "next/image";
import UserContext from "@/context/userContext";
import { usePathname } from "next/navigation";
import { BaseURL } from "@/helpers/axiosInstance";
const Navbar = () => {
    const userContextData = useContext(UserContext);
    const [navbarStatus, setnavbarStatus] = useState(false);

    const pathname = usePathname;
    useEffect(() => {
        setnavbarStatus(false);
        return () => {};
    }, [pathname]);

    const LinksRender = () => {
        return (
            <>
                <li>
                    <Link href="/" className="flex items-center gap-2">
                        <Home size={14} className="text-primary-500" />
                        <span className="text-slate-500">Home</span>
                    </Link>
                </li>
                {userContextData.userState !== "authenticated" ? (
                    <li>
                        <Link
                            href="/about-us"
                            className="flex items-center gap-2"
                        >
                            <Newspaper size={14} className="text-primary-500" />
                            <span className="text-slate-500">About Us</span>
                        </Link>
                    </li>
                ) : null}
                {userContextData.userState !== "authenticated" ? (
                    <li>
                        <Link
                            href="/terms-conditions"
                            className="flex items-center gap-2"
                        >
                            <HeartHandshake
                                size={14}
                                className="text-primary-500"
                            />
                            <span className="text-slate-500">
                                {" "}
                                Terms & Conditions
                            </span>
                        </Link>
                    </li>
                ) : null}
                {userContextData.userState !== "authenticated" ? (
                    <li>
                        <Link
                            href="/contact-us"
                            className="flex items-center gap-2"
                        >
                            <SmartphoneNfc
                                size={14}
                                className="text-primary-500"
                            />
                            <span className="text-slate-500"> Contact Us</span>
                        </Link>
                    </li>
                ) : null}
                {userContextData?.userData?.role === "manager" ? (
                    <li>
                        <Link
                            href="/my-jobs"
                            className="flex items-center gap-2"
                        >
                            <ScrollText
                                size={14}
                                className="text-primary-500"
                            />
                            <span className="text-slate-500">My Jobs</span>
                        </Link>{" "}
                    </li>
                ) : null}

                {userContextData?.userData?.role === "manager" ? (
                    <li>
                        <Link
                            href="/create"
                            className="flex items-center gap-2"
                        >
                            <ScrollText
                                size={14}
                                className="text-primary-500"
                            />
                            <span className="text-slate-500">
                                Create New Post
                            </span>
                        </Link>{" "}
                    </li>
                ) : null}
                {userContextData?.userData?.role === "user" ? (
                    <li>
                        <Link
                            href="/create"
                            className="flex items-center gap-2"
                        >
                            <UserCheck2
                                size={14}
                                className="text-primary-500"
                            />
                            <span className="text-slate-500">
                                Become manager
                            </span>
                        </Link>{" "}
                    </li>
                ) : null}

                {userContextData?.userData?.role === "user" ? (
                    <li>
                        <Link
                            href="/my-applications"
                            className="flex items-center gap-2"
                        >
                            <ScrollText
                                size={14}
                                className="text-primary-500"
                            />
                            <span className="text-slate-500">
                                My applications
                            </span>
                        </Link>{" "}
                    </li>
                ) : null}
                {userContextData.userState !== "authenticated" ? (
                    <li>
                        <button
                            onClick={() =>
                                window.open(
                                    BaseURL + "api/v1/auth/google/callback",
                                    "_self"
                                )
                            }
                            className="flex items-center gap-2 px-4 py-2 border rounded bg-slate-50"
                        >
                            <Image
                                src={GoogleIcons}
                                alt="google"
                                className="w-6"
                            />
                            <span className="text-sm">Login with Google</span>
                        </button>
                    </li>
                ) : (
                    <li>
                        {" "}
                        <Link href="/" className="flex items-center gap-2">
                            <User size={14} className="text-primary-500" />
                            <span className="text-slate-500">
                                Hi, {userContextData.userData.name}
                            </span>
                        </Link>{" "}
                    </li>
                )}
            </>
        );
    };
    return (
        <>
            <div className="fixed top-0 z-10 flex items-center w-full h-16 bg-white border-b">
                <div className="container flex items-center justify-between mx-auto">
                    <Link href="/">
                        <h1 id="Logo" className="font-bold">
                            Punjab Vacancies
                        </h1>
                    </Link>
                    <ul className="items-center hidden text-sm md:flex gap-7">
                        <LinksRender />
                    </ul>
                    <button
                        className="block md:hidden"
                        onClick={() => {
                            setnavbarStatus(!navbarStatus);
                        }}
                    >
                        {!navbarStatus ? <AlignJustify /> : <X />}
                    </button>
                </div>
            </div>
            <div
                className={`fixed top-0 z-10 w-full h-full px-4 py-4 mt-16 bg-white border-b md:hidden ${
                    navbarStatus ? "block" : "hidden"
                } `}
            >
                <ul className="grid gap-4">
                    <LinksRender />
                </ul>
            </div>
            <div className="h-16"></div>
        </>
    );
};

export default Navbar;
