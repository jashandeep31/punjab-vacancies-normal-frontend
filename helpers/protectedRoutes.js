"use client";
import CustomPer from "@/app/401";
import UserContext from "@/context/userContext";
import React, { useContext } from "react";

const ProtectedRoutes = ({ children, permissions }) => {
    const userContextData = useContext(UserContext);

    if (userContextData?.userState === "loading") {
        return <p>Loading...</p>;
    } else if (userContextData?.userState === "authenticated") {
        if (
            permissions.includes("any") ||
            permissions.includes(userContextData?.userData?.role)
        ) {
            return <>{children}</>;
        } else return <CustomPer />;
    }
    return <CustomPer />;
};

export default ProtectedRoutes;
