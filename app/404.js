import React from "react";
import Link from "next/link";

export default function CustomError() {
    return (
        <section className="bg-white dark:bg-gray-900 ">
            <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
                <div>
                    <p className="text-sm font-medium text-primary-500 dark:text-primary-400">
                        404 error
                    </p>
                    <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
                        Page not found
                    </h1>
                    <p className="mt-4 text-gray-500 dark:text-gray-400">
                        Sorry, the page you are looking for doesn&lsquo;t exist.
                    </p>

                    <div className="flex items-center mt-6 gap-x-3">
                        <Link
                            href="/"
                            className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 rounded-lg bg-primary-500 shrink-0 sm:w-auto hover:bg-primary-600 dark:hover:bg-primary-500 dark:bg-primary-600"
                        >
                            Take me home
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
