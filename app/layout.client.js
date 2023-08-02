"use client";
import React, { useEffect, useState } from "react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import Script from "next/script";
const LayoutClient = () => {
    const [adKey, setAdKey] = useState(0);

    useEffect(() => {
        // Increment the adKey whenever the page changes
        setAdKey(adKey + 1);
    }, []);
    return (
        <>
            <ProgressBar
                height="4px"
                color="#E85646"
                options={{ showSpinner: false }}
                shallowRouting
            />
            <Script
                async
                key={adKey}
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5294151828912060"
                crossOrigin="anonymous"
            ></Script>
        </>
    );
};

export default LayoutClient;
