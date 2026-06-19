"use client"

import { links } from "@/constants";
import Link from "next/link";
import Button from "./Button";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import { useState } from "react";

interface NavbarProps {
    variant?: "transparent" | "primary";
}

const Navbar = ({ variant = "transparent" }: NavbarProps) => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const isPrimary = variant === "primary";

    return (
        <nav className={`sticky top-0 flex font-jost justify-between items-center z-50 lg:max-w-full p-4 mx-auto w-full border-b transition-colors duration-300 ${isPrimary
            ? "border-primary/20 bg-primary shadow-lg"
            : "border-white/10 bg-white/5 backdrop-blur-md"
            }`}>
            <Link href={"/"} className="relative z-50">
                <Image
                    src={"/logo-removebg-preview.png"}
                    alt="Logo"
                    height={40}
                    width={80}
                    quality={100}
                />
            </Link>
            <ul className="hidden lg:flex justify-center gap-8 lg:gap-4 2xl:gap-16">
                {links.map((link, index) => {
                    const isActive = pathname === link.href;

                    return (
                        <li
                            key={index}
                            className="text-white/80 hover:text-white text-xl"
                        >
                            <Link
                                href={link.href}
                                className={`text-xs uppercase transition-colors duration-300 ${isActive ? "text-white" : "text-white/80 hover:text-white"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    );
                })}
            </ul>
            <Link href={"/contact"} className="hidden lg:block">
                <Button />
            </Link>
            <div className="lg:hidden z-50">
                <Icon
                    icon={isOpen ? "mdi:close" : "mdi:menu"}
                    className="w-10 h-10 focus:outline-none cursor-pointer transition-transform duration-300 text-white"
                    onClick={() => setIsOpen(!isOpen)}
                />
            </div>
            <div
                className={`fixed inset-0 w-full h-screen bg-primary flex items-center justify-center transition-all duration-500 ease-in-out ${isOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-full pointer-events-none"
                    } lg:hidden z-40`}
            >
                <ul className="flex flex-col items-center gap-8 text-center">
                    {links.map((link, index) => (
                        <li key={index}>
                            <Link
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-2xl uppercase font-semibold tracking-widest text-white/80 hover:text-white transition-colors duration-300"
                            >
                                {link.label || "Home"}
                            </Link>
                        </li>
                    ))}
                    <li className="mt-4">
                        <Link href="/contact" onClick={() => setIsOpen(false)}>
                            <Button />
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
