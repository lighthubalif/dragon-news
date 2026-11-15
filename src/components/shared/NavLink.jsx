"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={`${isActive ? "border-b-2 border-blue-600" : ""}`}
        >
            {children}
        </Link>
    );
};

export default NavLink;