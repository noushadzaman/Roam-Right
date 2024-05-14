"use client"

import { signOut } from "next-auth/react";

const Logout = () => {
    return (
        <button
            className="bg-[#d7601a] px-3"
            onClick={() => signOut({ callbackUrl: "http://localhost:3000/login" })}
        >
            Log out
        </button>
    );
};

export default Logout;