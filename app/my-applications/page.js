import React from "react";
import MyApplications from "./page.client";
import ProtectedRoutes from "@/helpers/protectedRoutes";

const page = () => {
    return (
        <ProtectedRoutes permissions={["any"]}>
            <MyApplications />
        </ProtectedRoutes>
    );
};

export default page;
