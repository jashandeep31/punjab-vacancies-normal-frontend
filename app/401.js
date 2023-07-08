import React from "react";
import Link from "next/link";
import Image from "next/image";
import GoogleIcons from "../public/icons/google.png";
import { BaseURL } from "@/helpers/axiosInstance";

export default function CustomPer() {
    return (
        <section className="flex items-center justify-center w-full h-screen bg-slate-100">
            <div className="container w-full mx-auto md:w-1/2">
                <div className="px-5 py-12 bg-white border rounded ">
                    <h1 className="text-xl font-bold text-center">
                        Login is required
                    </h1>
                    <p className="text-sm font-bold text-center text-slate-500">
                        To access this page login is required
                    </p>
                    <div className="flex justify-center my-24">
                        <button
                            className="flex gap-2 px-5 py-2 border rounded item-center bg-primary-50"
                            onClick={() =>
                                window.open(
                                    BaseURL + "api/v1/auth/google/callback",
                                    "_self"
                                )
                            }
                        >
                            <Image
                                src={GoogleIcons}
                                alt="google"
                                className="w-6"
                            />
                            <span className="text-base font-bold">
                                Login with Google
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
