"use client";
import React from "react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const LayoutClient = () => {
    return (
        <ProgressBar
            height="2px"
            color="#D74838"
            options={{ showSpinner: false }}
            shallowRouting
        />
    );
};

export default LayoutClient;
