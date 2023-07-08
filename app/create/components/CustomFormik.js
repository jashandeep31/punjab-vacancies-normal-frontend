"use client`";
import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useRouter } from "next/navigation";
import * as yup from "yup";
import { BaseURL } from "@/helpers/axiosInstance";

const createForm = yup.object({
    title: yup.string().required("Title is required"),
    organization: yup.string().required("Organization is required"),
    salary: yup.string().required("Salary is required"),
    jobSector: yup.string().required("Job sector is required"),
    jobType: yup.string().required("Job type is required"),
    experience: yup.string().required("Experience is required"),
    description: yup.string().required("Description is required"),
    interviewDetails: yup.string().required("Interview details are required"),
    education: yup.string().required("Education is required"),
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
});

function CustomFormik() {
    const router = useRouter();

    const initialValues = {
        title: "",
        organization: "",
        salary: "",
        jobSector: "",
        jobType: "",
        experience: "",
        description: "",
        interviewDetails: "",
        education: "",
        deadline: "",
        applyNowLink: "",
        district: "",
    };
    const formik = useFormik({
        initialValues,
        validationSchema: createForm,
        onSubmit: (values) => {
            axios
                .post(BaseURL + "api/v1/job/create", values, {
                    withCredentials: true,
                })
                .then((res) => {
                    if (res.status === 201) {
                        router.push("/job/" + res.data.job.slug);
                    }
                    formik.setSubmitting(false);
                })
                .catch((err) => {
                    formik.setSubmitting(false);
                });
        },
    });
    return formik;
}

export default CustomFormik;
