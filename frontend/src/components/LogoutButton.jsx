"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
    const router = useRouter();

    const logout = () => {
        localStorage.clear('token');
        router.push('/');
    };

    return (
        <>
            <button onClick={logout} className="text-semibold text-white text-md">Logout</button>
        </>
    )
}