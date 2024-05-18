"use client"

import { signOut } from "next-auth/react";

const Logout = () => {
    return (
        <button
            className="bg-[#d7601a] px-3"
            onClick={() => signOut({ callbackUrl: "https://roamright.vercel.app/login" })}
        >
            Log out
        </button>
    );
};

export default Logout;