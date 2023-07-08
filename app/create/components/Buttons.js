"use client";
import React, { useEffect, useState } from "react";

const Buttons = ({ formik }) => {
    const [typeOf, settypeOf] = useState("automatic");
    useEffect(() => {
        if (typeOf === "automatic") {
            formik.setFieldValue("inbuiltForm", true);
        } else {
            formik.setFieldValue("inbuiltForm", false);
        }
        return () => {};
    }, [typeOf]);

    return (
        <div className="">
            <div className="flex justify-center gap-1 text-sm font-medium md:justify-start">
                <button
                    type="button"
                    className={`px-4 py-3 border-2 rounded-l ${
                        typeOf === "nolink"
                            ? "border-primary-200 shadow-sm"
                            : null
                    } `}
                    onClick={() => {
                        settypeOf("nolink");
                    }}
                >
                    No Link
                </button>
                <button
                    type="button"
                    className={`px-1 py-2 border-2 ${
                        typeOf === "automatic"
                            ? "border-primary-200 shadow-sm"
                            : null
                    } `}
                    onClick={() => settypeOf("automatic")}
                >
                    Automated Link
                    <span className="block text-xs text-slate-500 ">
                        Recommended
                    </span>
                </button>
                <button
                    type="button"
                    className={`px-4 py-3 border-2 rounded-r ${
                        typeOf === "ext" ? "border-primary-200 shadow-sm" : null
                    }`}
                    onClick={() => settypeOf("ext")}
                >
                    External Link
                </button>
            </div>
            {typeOf === "ext" && (
                <div className="w-1/2 mt-3 card">
                    <label className="mb-2 text-sm font-medium text-slate-700">
                        Apply Link:
                    </label>
                    <input
                        type="text"
                        className="block w-full px-2 py-2 text-sm border rounded focus:outline-none"
                        placeholder="Enter URL to google form"
                        name="applyNowLink"
                        onChange={formik.handleChange}
                        required={true}
                        onBlur={formik.handleBlur}
                        value={formik.values.applyNowLink}
                    />
                </div>
            )}
        </div>
    );
};

export default Buttons;
