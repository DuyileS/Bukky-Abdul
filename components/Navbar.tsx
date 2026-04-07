"use client"

import { links } from "@/constants";
import Link from "next/link";
import Button from "./Button";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import { useState } from "react";

const Navbar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 flex font-jost justify-between items-center z-50 max-w-7xl 2xl:max-w-[1400px] p-4 mx-auto w-full border-b border-secondary bg-primary/80 backdrop-blur-md">
            <Link href={"/"}>
                {/* <Image
                    src={"/logo.png"}
                    alt="Logo"
                    height={40}
                    width={80}
                    quality={100}
                /> */}
                <h1>BUKKY ABDUL</h1>
            </Link>
            <div className="hidden md:flex justify-between items-center">
                <ul className="flex justify-center gap-8 lg:gap-4  2xl:gap-16  mr-8 lg:mr-24 2xl:mr-4">
                    {links.map((link, index) => {
                        const isActive = pathname === link.href;

                        return (
                            <li
                                key={index}
                                className="text-gray-400 hover:text-white text-xl"
                            >
                                <Link
                                    href={link.href}
                                    className={`text-xs uppercase transition-colors duration-300 ${isActive ? "text-white" : "text-gray-400 hover:text-white"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                <Link href={"/contact"}>
                    <Button />
                </Link>
            </div>
            <div className="md:hidden z-50">
                <Icon
                    icon={isOpen ? "mdi:close" : "mdi:menu"}
                    className="w-10 h-10 focus:outline-none cursor-pointer transition-transform duration-300"
                    onClick={() => setIsOpen(!isOpen)}
                />
            </div>
            <div
                className={`fixed top-0 left-0 w-full h-1/2 bg-primary text-center transition-all duration-300 ease-in-out overflow-hidden ${isOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-full pointer-events-none"
                    } md:hidden`}
            >
                <ul className="flex flex-col items-center gap-6 py-6 my-12">
                    <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
                    <li><Link href="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
                    <li><Link href="/about" onClick={() => setIsOpen(false)}>About</Link></li>
                    <li><Link href="/contact" onClick={() => setIsOpen(false)}><Button /></Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
