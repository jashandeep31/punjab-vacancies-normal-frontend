"use client`";
import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useRouter } from "next/navigation";
import * as yup from "yup";
import { BaseURL } from "@/helpers/axiosInstance";
import toast from "react-hot-toast";

const createForm = yup.object({
    title: yup.string().required("Title is required").trim(),
    organization: yup.string().required("Organization is required").trim(),
    salary: yup.string().required("Salary is required").trim(),
    jobSector: yup.string().required("Job sector is required").trim(),
    jobType: yup.string().required("Job type is required").trim(),
    experience: yup.string().required("Experience is required").trim(),
    description: yup.string().required("Description is required").trim(),
    interviewDetails: yup
        .string()
        .required("Interview details are required")
        .trim(),
    education: yup.string().required("Education is required").trim(),
    district: yup.string().required("District is required"),
    deadline: yup
        .date()
        .min(new Date(), "Deadline should not be less than today")
        .test(
            "valid",
            "Deadline should not be more than 28days from today",
            (value) => {
                const maxDeadline = new Date();
                maxDeadline.setDate(new Date().getDate() + 28);
                return new Date(value) <= maxDeadline;
            }
        )
        .required("Deadline is required"),
    inbuiltForm: yup.boolean().required(),
    activeGoogleCard: yup.boolean(),
    streetAddress: yup.string(),
    addressLocality: yup.string(),
    addressRegion: yup.string(),
    postalCode: yup.string(),
    addressCountry: yup.string(),
    minValue: yup.string(),
    maxValue: yup.number(),
    unitText: yup.string(),
    isBoth: yup.boolean().default(false),
    value: yup.number(),
    OrgName: yup.string(),
    logo: yup.string(),
    website: yup.string(),
});

function CustomFormik() {
    const router = useRouter();

    const initialValues = {
        title: "Software Engineer",
        organization: "ABC Company",
        salary: "Competitive",
        jobSector: "Information Technology",
        jobType: "Full-time",
        experience: "2-4 years",
        description: "We are seeking a skilled Software Engineer...",
        interviewDetails: "Shortlisted candidates will be notified...",
        education: "Bachelor's degree in Computer Science or related field",
        deadline: "2023-07-31",
        applyNowLink: "https://example.com/apply",
        district: "San Francisco",
        inbuiltForm: false,
        activeGoogleCard: false,
        streetAddress: "123 Main St",
        addressLocality: "City",
        addressRegion: "State",
        postalCode: "12345",
        addressCountry: "IN",
        minValue: "10",
        maxValue: 100,
        unitText: "INR",
        isBoth: false,
        value: 50,
        OrgName: "Company Name",
        logo: "https://example.com/logo.png",
        website: "https://example.com",
    };
    const formik = useFormik({
        initialValues,
        validationSchema: createForm,
        onSubmit: (values) => {
            toast.promise(
                axios
                    .post(BaseURL + "api/v1/job/create", values, {
                        withCredentials: true,
                    })
                    .then((res) => {
                        if (res.status === 201) {
                            router.push("/job/" + res.data.job.slug);
                        }
                    })
                    .catch((err) => {
                        formik.setSubmitting(false);
                        throw new Error(err.response.data.message);
                    }),
                {
                    loading: "Creating job...",
                    success: <b>Job created successfully</b>,
                    error: (error) => <b>{error.message}</b>,
                }
            );
        },
    });
    return formik;
}

export default CustomFormik;
