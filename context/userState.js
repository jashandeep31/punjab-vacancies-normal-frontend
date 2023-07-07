"use client";
import React, { useEffect, useState } from "react";
import UserContext from "./userContext";
import axios from "axios";
import { BaseURL } from "@/helpers/axiosInstance";
export default function UserState({ children }) {
    const [userState, setuserState] = useState("loading");
    const [userData, setuserData] = useState([]);

    useEffect(() => {
        axios
            .get(BaseURL + "api/v1/auth", { withCredentials: true })
            .then((res) => {
                if (res.status === 200) {
                    setuserData(res.data.user);
                    setuserState("authenticated");
                }
            })
            .catch((err) => {
                setuserData([]);
                setuserState("unauthenticated");
            });

        return () => {};
    }, []);

    return (
        <UserContext.Provider value={{ userState, userData }}>
            {children}
        </UserContext.Provider>
    );
}
