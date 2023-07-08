"use client";
import React, { useContext, useState } from "react";
import Link from "next/link";
import { BaseURL } from "@/helpers/axiosInstance";
import axios from "axios";
import UserContext from "@/context/userContext";

export default function RequestPage() {
    const userContextData = useContext(UserContext);
    const [phoneNumber, setphoneNumber] = useState("");
    const [error, seterror] = useState("");

    const submitForm = () => {
        if (phoneNumber.length === 10) {
            seterror("");
            axios
                .post(
                    BaseURL + "api/v1/user/become-manager",
                    { phoneNumber },
                    { withCredentials: true }
                )
                .then((res) => {
                    if (res.status === 200) {
                        userContextData.updateUser();
                    }
                })
                .catch((err) => {});
        } else {
            seterror("Please enter a valid phone number");
        }
    };

    if (userContextData?.userData.requested === true) {
        return (
            <section className="flex items-center justify-center w-full h-screen bg-slate-100">
                <div className="container w-full mx-auto md:w-1/2">
                    <div className="px-5 py-12 bg-white border rounded ">
                        <h1 className="text-xl font-bold text-center">
                            We will soon verify your request.
                        </h1>
                        <p className="text-sm font-bold text-center text-slate-500">
                            For getting faster verification you can contact us
                            at out whatsapp at 99142-96525.
                        </p>

                        <div className="flex justify-center my-24">
                            <div className="text-center">
                                <a
                                    href="https://wa.me/919914296525"
                                    className="flex gap-2 px-5 py-2 text-white border rounded bg-primary-600 item-center"
                                >
                                    <span className="text-base font-bold">
                                        Message us on whatsapp
                                    </span>
                                </a>
                                <Link
                                    className="inline-block mt-3 underline text-primary-500"
                                    href="/"
                                >
                                    Home
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="flex items-center justify-center w-full h-screen bg-slate-100">
            <div className="container w-full mx-auto md:w-1/2">
                <div className="px-5 py-12 bg-white border rounded ">
                    <h1 className="text-xl font-bold text-center">
                        Become our Manager
                    </h1>
                    <p className="text-sm font-bold text-center text-slate-500">
                        To post jobs on our platform you need to become our
                        manager.
                    </p>
                    <div className="flex justify-center my-24">
                        <div className="flex flex-col items-center w-1/2 gap-5">
                            <div className="">
                                <label className="text-sm text-slate-500 ">
                                    Phone Number:
                                </label>
                                <input
                                    type="number"
                                    className="w-full px-3 py-1 border rounded bg-slate-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
                                    value={phoneNumber}
                                    onChange={(e) => {
                                        setphoneNumber(e.target.value);
                                    }}
                                />
                                {
                                    <p className="text-sm font-bold text-center text-red-500">
                                        {error}
                                    </p>
                                }
                            </div>
                            <button
                                onClick={submitForm}
                                className="flex gap-2 px-5 py-2 text-sm font-bold border rounded item-center bg-primary-50"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
