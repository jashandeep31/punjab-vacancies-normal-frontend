"use client";
import { Headland_One } from "next/font/google";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const Footer = () => {
    return (
        <>
            <footer
                className={`py-6 mt-12 bg-white border-t  w-full `}
                id="Footer"
            >
                <div className="container mx-auto ">
                    <div className=" top">
                        <h1 className="text-lg font-bold">Punjab Vacancies</h1>
                        <p className="text-xs font-medium text-slate-500">
                            Get update of every job in punjab.
                        </p>
                    </div>
                    <div className="grid gap-6 mt-12 md:grid-cols-3">
                        <div className="">
                            <h5 className="text-sm font-bold">Quick Links</h5>
                            <ul className="grid gap-3 mt-4 text-sm text-slate-500">
                                <li>
                                    <Link
                                        className="duration-300 hover:underline"
                                        href="/"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="duration-300 hover:underline"
                                        href="/my-applications"
                                    >
                                        My Applications
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="duration-300 hover:underline"
                                        href="/about-us"
                                    >
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="duration-300 hover:underline"
                                        href="/terms-conditions"
                                    >
                                        Terms and conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="">
                            <h5 className="text-sm font-bold">Follow us</h5>
                            <ul className="grid gap-3 mt-4 text-sm text-slate-500">
                                <li>
                                    <Link
                                        className="duration-300 hover:underline"
                                        href="https://www.instagram.com/punjabvacancies/"
                                    >
                                        Instagram
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="duration-300 hover:underline"
                                        href="https://t.me/punjabvacancies"
                                    >
                                        Telegram
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="">
                            <h5 className="text-sm font-bold">Legal Link</h5>
                            <ul className="grid gap-3 mt-4 text-sm text-slate-500">
                                <li>
                                    <Link
                                        className="duration-300 hover:underline"
                                        href="/contact-us"
                                    >
                                        Contact Us
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        className="duration-300 hover:underline"
                                        href="/terms-conditions"
                                    >
                                        Terms and conditions
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="duration-300 hover:underline"
                                        href="/privacy-policy"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-4 text-sm text-center text-slate-500">
                        <p className="text-sm text-center text-slate-500 ">
                            © 2023{" "}
                            <Link
                                className="underline text-bold hover:text-primary-500"
                                href="https://www.deepdevelopers.in/"
                            >
                                Deepdevelopers.in
                            </Link>{" "}
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;

{
    /* <p className="text-sm text-center text-slate-500 ">
© 2023{" "}
<Link
    className="underline text-bold hover:text-primary-500"
    href=""
>
    punjabvacancies.live
</Link>{" "}
&{" "}
<Link
    className="underline text-bold hover:text-primary-500"
    href="https://www.deepdevelopers.in/"
>
    deepdevelopers.in
</Link>{" "}
</p> */
}
