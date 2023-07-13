"use client";
import UserContext from "@/context/userContext";
import React, { useContext } from "react";

const Advanceform = ({ formik }) => {
    const userContextData = useContext(UserContext);
    if (userContextData.userData.role !== "admin") {
        return null;
    }
    return (
        <div className="mt-12">
            <h1 className="text-lg font-bold ">
                Advance Form u are doing something great
            </h1>
            <div className="grid gap-6 md:grid-cols-2">
                <div className="card">
                    <label className="mb-2 text-sm font-medium text-slate-700">
                        Street Address:
                    </label>
                    <input
                        type="text"
                        className="block w-full px-2 py-2 text-sm border rounded focus:outline-none"
                        placeholder="₹1500/month"
                        name="streetAddress"
                        value={formik.values.streetAddress}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>
                <div className="card">
                    <label className="mb-2 text-sm font-medium text-slate-700">
                        Address Locality:
                    </label>
                    <input
                        type="text"
                        className="block w-full px-2 py-2 text-sm border rounded focus:outline-none"
                        placeholder="₹1500/month"
                        name="addressLocality"
                        value={formik.values.addressLocality}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>
                <div className="card">
                    <label className="mb-2 text-sm font-medium text-slate-700">
                        addressRegion:
                    </label>
                    <input
                        type="text"
                        className="block w-full px-2 py-2 text-sm border rounded focus:outline-none"
                        placeholder="₹1500/month"
                        name="addressRegion"
                        value={formik.values.addressRegion}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>
                <div className="card">
                    <label className="mb-2 text-sm font-medium text-slate-700">
                        postalCode:
                    </label>
                    <input
                        type="text"
                        className="block w-full px-2 py-2 text-sm border rounded focus:outline-none"
                        placeholder="₹1500/month"
                        name="postalCode"
                        value={formik.values.postalCode}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>
                <div className="card">
                    <label className="mb-2 text-sm font-medium text-slate-700">
                        addressCountry:
                    </label>
                    <input
                        type="text"
                        className="block w-full px-2 py-2 text-sm border rounded focus:outline-none"
                        placeholder="₹1500/month"
                        name="addressCountry"
                        value={formik.values.addressCountry}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>
                <div className="card">
                    <label className="mb-2 text-sm font-medium text-slate-700">
                        minValue:
                    </label>
                    <input
                        type="text"
                        className="block w-full px-2 py-2 text-sm border rounded focus:outline-none"
                        placeholder="₹1500/month"
                        name="minValue"
                        value={formik.values.minValue}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>
                <div className="card">
                    <label className="mb-2 text-sm font-medium text-slate-700">
                        maxValue:
                    </label>
                    <input
                        type="text"
                        className="block w-full px-2 py-2 text-sm border rounded focus:outline-none"
                        placeholder="₹1500/month"
                        name="maxValue"
                        value={formik.values.maxValue}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>
                <div className="card">
                    <label className="mb-2 text-sm font-medium text-slate-700">
                        unitText:
                    </label>
                    <input
                        type="text"
                        className="block w-full px-2 py-2 text-sm border rounded focus:outline-none"
                        placeholder="₹1500/month"
                        name="unitText"
                        value={formik.values.unitText}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>
                <div className="card">
                    <label className="mb-2 text-sm font-medium text-slate-700">
                        value:
                    </label>
                    <input
                        type="text"
                        className="block w-full px-2 py-2 text-sm border rounded focus:outline-none"
                        placeholder="₹1500/month"
                        name="value"
                        value={formik.values.value}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>
                <div className="card">
                    <label className="mb-2 text-sm font-medium text-slate-700">
                        OrgName:
                    </label>
                    <input
                        type="text"
                        className="block w-full px-2 py-2 text-sm border rounded focus:outline-none"
                        placeholder="₹1500/month"
                        name="OrgName"
                        value={formik.values.OrgName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>
                <div className="card">
                    <label className="mb-2 text-sm font-medium text-slate-700">
                        logo:
                    </label>
                    <input
                        type="text"
                        className="block w-full px-2 py-2 text-sm border rounded focus:outline-none"
                        placeholder="₹1500/month"
                        name="logo"
                        value={formik.values.logo}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>
                <div className="card">
                    <label className="mb-2 text-sm font-medium text-slate-700">
                        website:
                    </label>
                    <input
                        type="text"
                        className="block w-full px-2 py-2 text-sm border rounded focus:outline-none"
                        placeholder="₹1500/month"
                        name="website"
                        value={formik.values.website}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>
                <div className="card">
                    <p
                        onClick={() => {
                            formik.setFieldValue(
                                "activeGoogleCard",
                                !formik.values.activeGoogleCard
                            );
                        }}
                    >
                        {formik.values.activeGoogleCard
                            ? "true is active"
                            : "false u are not advance"}
                    </p>
                </div>
                <div className="card">
                    <p
                        onClick={() => {
                            formik.setFieldValue(
                                "isBoth",
                                !formik.values.isBoth
                            );
                        }}
                    >
                        {formik.values.isBoth
                            ? "Enter min and max both"
                            : "Enter the value only"}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Advanceform;
