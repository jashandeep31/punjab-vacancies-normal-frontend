import ProtectedRoutes from "@/helpers/protectedRoutes";
import React from "react";
import PageCient from "./page.client";

export default function page(props) {
    return (
        <ProtectedRoutes permissions={["manager", "admin"]}>
            <PageCient slug={props.params.slug} />
        </ProtectedRoutes>
    );
}
