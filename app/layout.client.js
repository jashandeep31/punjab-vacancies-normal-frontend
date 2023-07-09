"use client";
import React from "react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const LayoutClient = () => {
    return (
        <ProgressBar
            height="4px"
            color="#E85646"
            options={{ showSpinner: false }}
            shallowRouting
        />
    );
};

export default LayoutClient;
