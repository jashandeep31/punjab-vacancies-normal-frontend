"use client";
import React, { useContext } from "react";
import CutomFormik from "./CutomFormik";

const MainForm = ({ jobData }) => {
    const formik = CutomFormik(jobData.slug);

    return (
        <div className="container mx-auto mt-12">
            <p className="text-xs font-medium text-slate-500">Applying for</p>
            <h1 className="text-lg font-bold">{jobData.title}</h1>

            <form onSubmit={formik.handleSubmit}>
                <div className="grid gap-6 mt-6 md:grid-cols-2">
                    <div className="card">
                        <label className="mb-2 text-sm font-medium text-slate-700">
                            Full name:
                        </label>
                        <input
                            type="text"
                            className="block w-full px-2 py-2 text-sm border rounded focus:outline-none"
                            placeholder="Jashandeep Singh"
                            name="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.name && formik.touched.name ? (
                            <p className="text-xs text-red-500 ">
                                {formik.errors.name}
                            </p>
                        ) : null}
                    </div>
                    <div className="card">
                        <label className="mb-2 text-sm font-medium text-slate-700">
                            Phone Number:
                        </label>
                        <input
                            type="text"
                            className="block w-full px-2 py-2 text-sm border rounded focus:outline-none"
                            placeholder="9914299142"
                            name="phoneNumber"
                            value={formik.values.phoneNumber}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.phoneNumber &&
                        formik.touched.phoneNumber ? (
                            <p className="text-xs text-red-500 ">
                                {formik.errors.phoneNumber}
                            </p>
                        ) : (
                            <p className="text-xs font-medium text-slate-500">
                                Enter without country code.
                            </p>
                        )}
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
                        {formik.errors.education && formik.touched.education ? (
                            <p className="text-xs text-red-500 ">
                                {formik.errors.education}
                            </p>
                        ) : null}
                    </div>
                    <div className="card">
                        <label className="mb-2 text-sm font-medium text-slate-700">
                            Age:
                        </label>
                        <input
                            type="text"
                            className="block w-full px-2 py-2 text-sm border rounded focus:outline-none"
                            placeholder="20"
                            name="age"
                            value={formik.values.age}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.age && formik.touched.age ? (
                            <p className="text-xs text-red-500 ">
                                {formik.errors.age}
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
                            placeholder="3 years"
                            name="experience"
                            value={formik.values.experience}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.experience &&
                        formik.touched.experience ? (
                            <p className="text-xs text-red-500 ">
                                {formik.errors.experience}
                            </p>
                        ) : null}
                    </div>
                    <div className=""></div>
                    <div className="card ">
                        <label className="mb-2 text-sm font-medium text-slate-700">
                            Address:
                        </label>
                        <textarea
                            className="block w-full h-24 px-2 py-2 text-sm border rounded focus:outline-none"
                            placeholder="I am professional..."
                            name="address"
                            value={formik.values.address}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.address && formik.touched.address ? (
                            <p className="text-xs text-red-500 ">
                                {formik.errors.address}
                            </p>
                        ) : null}
                    </div>
                    <div className="card ">
                        <label className="mb-2 text-sm font-medium text-slate-700">
                            About you:
                        </label>
                        <textarea
                            className="block w-full h-24 px-2 py-2 text-sm border rounded focus:outline-none"
                            placeholder="I am professional..."
                            name="about"
                            value={formik.values.about}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.about && formik.touched.about ? (
                            <p className="text-xs text-red-500 ">
                                {formik.errors.about}
                            </p>
                        ) : null}
                    </div>
                </div>
                <div className="mt-6 ">
                    <button
                        disabled={formik.isSubmitting}
                        className="px-4 py-2 text-sm font-bold duration-300 rounded bg-primary-50 text-primary-500 hover:bg-primary-100"
                    >
                        Submit Now
                    </button>
                </div>
            </form>
        </div>
    );
};

export default MainForm;
