import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <footer className="py-6 bg-white border-t">
            <p className="text-sm text-center text-slate-500 ">
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
            </p>
        </footer>
    );
};

export default Footer;
