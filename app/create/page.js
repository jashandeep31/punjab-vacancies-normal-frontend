"use client";
import Navbar from "@/components/Navbar";
import ProtectedRoutes from "@/helpers/protectedRoutes";
import { Loader2 } from "lucide-react";
import React from "react";
import CustomFormik from "./components/CustomFormik";
import Districts from "./components/Districts";
import Buttons from "./components/Buttons";
import Footer from "@/components/Footer";
import Advanceform from "./components/Advanceform";
export default function Create() {
    const Main = () => {
        const formik = CustomFormik();
        return (
            <div>
                <Navbar />

                <div className="container mx-auto mt-6 md:mt-12">
                    <h1 className="text-lg font-medium md:text-xl">
                        Create Job Post
                    </h1>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="grid gap-4 mt-8 cards md:grid-cols-2 md:gap-6">
                            <div className="card">
                                <label className="mb-2 text-sm font-medium text-slate-700">
                                    Title:
                                </label>
                                <input
                                    type="text"
                                    className="block w-full px-2 py-2 text-sm border rounded focus:outline-none"
                                    placeholder="Looking For teacher"
                                    name="title"
                                    value={formik.values.title}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />

                                {formik.errors.title && formik.touched.title ? (
                                    <p className="mt-1 text-xs text-red-400 ">
                                        {formik.errors.title}
                                    </p>
                                ) : (
                                    <p className="mt-1 text-xs text-slate-400">
                                        Ex: Sofware developer, Teacher etc.
                                    </p>
                                )}
                            </div>
                            <div className="card">
                                <label className="mb-2 text-sm font-medium text-slate-700">
                                    Organization Name:
                                </label>
                                <input
                                    type="text"
                                    className="block w-full px-2 py-2 text-sm border rounded focus:outline-none"
                                    placeholder="Deep Developers"
                                    name="organization"
                                    value={formik.values.organization}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.organization &&
                                formik.touched.organization ? (
                                    <p className="mt-1 text-xs text-red-400 ">
                                        {formik.errors.organization}
                                    </p>
                                ) : (
                                    <p className="mt-1 text-xs text-slate-400">
                                        Ex: Deep Developers, Punjab Vacancies
                                    </p>
                                )}
                            </div>

                            <div className="card">
                                <label className="mb-2 text-sm font-medium text-slate-700">
                                    Salary:
                                </label>
                                <input
                                    type="text"
                                    className="block w-full px-2 py-2 text-sm border rounded focus:outline-none"
                                    placeholder="₹1500/month"
                                    name="salary"
                                    value={formik.values.salary}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.salary &&
                                formik.touched.salary ? (
                                    <p className="mt-1 text-xs text-red-400 ">
                                        {formik.errors.salary}
                                    </p>
                                ) : null}
                            </div>

                            <div className="card">
                                <label className="mb-2 text-sm font-medium text-slate-700">
                                    Experience:
                                </label>
                                <input
                                    type="text"
                                    className="block w-full px-2 py-2 text-sm border rounded focus:outline-none"
                                    placeholder="Fresher"
                                    name="experience"
                                    value={formik.values.experience}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.experience &&
                                formik.touched.experience ? (
                                    <p className="mt-1 text-xs text-red-400 ">
                                        {formik.errors.experience}
                                    </p>
                                ) : null}
                            </div>
                            <div className="card">
                                <label className="mb-2 text-sm font-medium text-slate-700">
                                    Education:
                                </label>
                                <input
                                    type="text"
                                    className="block w-full px-2 py-2 text-sm border rounded focus:outline-none"
                                    placeholder="B.tech"
                                    name="education"
                                    value={formik.values.education}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />

                                {formik.errors.education &&
                                formik.touched.education ? (
                                    <p className="mt-1 text-xs text-red-400 ">
                                        {formik.errors.education}
                                    </p>
                                ) : (
                                    <p className="mt-1 text-xs text-slate-400">
                                        Ex: B.tech, MCA, etc.
                                    </p>
                                )}
                            </div>
                            <div className="card">
                                <label className="mb-2 text-sm font-medium text-slate-700">
                                    District:
                                </label>
                                <select
                                    name="district"
                                    className="block w-full px-2 py-2 text-sm border rounded focus:outline-none"
                                    id="district"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.district}
                                >
                                    <option value="" disabled>
                                        Please select District
                                    </option>
                                    {Districts.map((item, index) => (
                                        <option
                                            className="py-2"
                                            value={item.slug}
                                            key={index}
                                        >
                                            {item.name}
                                        </option>
                                    ))}
                                </select>
                                {formik.errors.district &&
                                formik.touched.district ? (
                                    <p className="mt-1 text-xs text-red-400 ">
                                        {formik.errors.district}
                                    </p>
                                ) : null}
                            </div>
                            <div className="card">
                                <label className="mb-2 text-sm font-medium text-slate-700">
                                    Job Sector:
                                </label>
                                <select
                                    name="jobSector"
                                    className="block w-full px-2 py-2 text-sm border rounded focus:outline-none"
                                    id="jobSector"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.jobSector}
                                >
                                    <option>Select Option</option>
                                    <option className="py-2" value="private">
                                        Private
                                    </option>
                                    <option className="py-2" value="government">
                                        Government
                                    </option>
                                </select>
                                {formik.errors.jobSector &&
                                formik.touched.jobSector ? (
                                    <p className="mt-1 text-xs text-red-400 ">
                                        {formik.errors.jobSector}
                                    </p>
                                ) : null}
                            </div>
                            <div className="card">
                                <label className="mb-2 text-sm font-medium text-slate-700">
                                    Job Type:
                                </label>
                                <select
                                    name="jobType"
                                    className="block w-full px-2 py-2 text-sm border rounded focus:outline-none"
                                    id="jobType"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.jobType}
                                >
                                    <option disabled value="">
                                        Select Option
                                    </option>
                                    <option className="py-2" value="Full Time">
                                        Full Time
                                    </option>
                                    <option className="py-2" value="Part Time">
                                        Part Time
                                    </option>
                                    <option
                                        className="py-2"
                                        value="Freelancing"
                                    >
                                        Freelancer
                                    </option>
                                    <option className="py-2" value="Internship">
                                        Internship
                                    </option>
                                </select>
                                {formik.errors.jobType &&
                                formik.touched.jobType ? (
                                    <p className="mt-1 text-xs text-red-400 ">
                                        {formik.errors.jobType}
                                    </p>
                                ) : null}
                            </div>
                            <div className="card">
                                <label className="mb-2 text-sm font-medium text-slate-700">
                                    Last Date:
                                </label>
                                <input
                                    type="date"
                                    className="block w-full px-2 py-2 text-sm border rounded focus:outline-none"
                                    name="deadline"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.deadline}
                                />
                                {formik.errors.deadline &&
                                formik.touched.deadline ? (
                                    <p className="mt-1 text-xs text-red-400 ">
                                        {formik.errors.deadline}
                                    </p>
                                ) : (
                                    <p className="mt-1 text-xs text-slate-400">
                                        Select the last date till which you are
                                        accepting application.
                                    </p>
                                )}
                            </div>
                            <div className=""></div>

                            <div className="card">
                                <label className="mb-2 text-sm font-medium text-slate-700">
                                    Interview Detail
                                </label>
                                <textarea
                                    className="block w-full h-24 px-2 py-2 text-sm border rounded focus:outline-none "
                                    name="interviewDetails"
                                    placeholder="At DBEE office...."
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.interviewDetails}
                                />
                                {formik.errors.interviewDetails &&
                                formik.touched.interviewDetails ? (
                                    <p className="mt-1 text-xs text-red-400 ">
                                        {formik.errors.interviewDetails}
                                    </p>
                                ) : null}
                            </div>
                            <div className="card">
                                <label className="mb-2 text-sm font-medium text-slate-700">
                                    Job Description
                                </label>
                                <textarea
                                    className="block w-full h-24 px-2 py-2 text-sm border rounded focus:outline-none"
                                    placeholder="Looking for someone who...."
                                    name="description"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.description}
                                />
                                {formik.errors.description &&
                                formik.touched.description ? (
                                    <p className="mt-1 text-xs text-red-400 ">
                                        {formik.errors.description}
                                    </p>
                                ) : null}
                            </div>
                            <div className="md:col-span-2">
                                <Buttons formik={formik} />
                            </div>
                        </div>
                        <Advanceform formik={formik} />
                        <div className="mt-6">
                            <button
                                className="px-4 py-2 text-sm font-medium text-white rounded bg-primary-500 disabled:bg-primary-400 "
                                type="submit"
                                disabled={formik.isSubmitting}
                            >
                                {formik.isSubmitting ? (
                                    <span className="flex gap-1 item-center">
                                        <svg
                                            className="w-5 h-5 mr-3 animate-spin "
                                            viewBox="0 0 24 24"
                                        >
                                            <Loader2 />
                                        </svg>
                                        Creating
                                    </span>
                                ) : (
                                    <span className="flex gap-1 item-center">
                                        Create Job Post
                                    </span>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
                <Footer />
            </div>
        );
    };
    return (
        <ProtectedRoutes permissions={["manager", "admin"]}>
            <Main />
        </ProtectedRoutes>
    );
}
