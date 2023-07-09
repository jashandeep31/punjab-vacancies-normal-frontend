import { BaseURL } from "@/helpers/axiosInstance";
import axios from "axios";
import { useFormik } from "formik";
import React, { useContext } from "react";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import UserContext from "@/context/userContext";
import toast from "react-hot-toast";
function CutomFormik(slug) {
    const userContextData = useContext(UserContext);

    const router = useRouter();
    const validation = yup.object({
        name: yup
            .string()
            .required("Name is required")
            .max(20, "Max length is 40")
            .min(3, "minimum 3 letters"),
        phoneNumber: yup
            .number()
            .max(9999999999, "Not a valid number")
            .required("Number is required")
            .min(1000000000, "Not a valid Number"),
        education: yup.string().required("Education is required"),
        experience: yup.string().required("Experience is required"),
        age: yup
            .number()
            .required("Age is required")
            .max(99, "Max  age 99")
            .min(13, "you should atleast 13"),
        about: yup
            .string()
            .required("About you is required")
            .min(10, "10 words atleast")
            .max(200, "100 words max"),
        address: yup
            .string()
            .required("Address you is required")
            .min(10, "10 words atleast")
            .max(200, "100 words max"),
    });

    const initialValues = {
        name: "",
        phoneNumber: "",
        education: "",
        age: "",
        experience: "",
        address: "",
        about: "",
    };

    const formik = useFormik({
        initialValues,
        validationSchema: validation,
        onSubmit: (values) => {
            toast.promise(
                axios
                    .post(
                        BaseURL + "api/v1/application/apply/" + slug,
                        values,
                        {
                            withCredentials: true,
                        }
                    )
                    .then((res) => {
                        userContextData.updateUser();
                        router.push("/my-applications");
                    })
                    .catch((err) => {
                        formik.setSubmitting(false);
                        formik.setSubmitting(false);
                        throw new Error(err.response.data.message);
                    }),
                {
                    loading: "Applying...",
                    success: "Applied successfully",
                    error: (error) => <b>{error.message}</b>,
                }
            );
        },
    });
    return formik;
}

export default CutomFormik;
