import React from "react";
import MyApplications from "./page.client";
import ProtectedRoutes from "@/helpers/protectedRoutes";
import Footer from "@/components/Footer";

const page = () => {
    return (
        <ProtectedRoutes permissions={["any"]}>
            <MyApplications />
            <Footer />
        </ProtectedRoutes>
    );
};

export default page;
