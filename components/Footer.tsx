import Link from 'next/link';
import AnimatedButton from './AnimatedButton';
import { Icon } from "@iconify/react";

export default function Footer() {

    const currentYear = new Date().getFullYear()

    return (
        <div>
            <hr className="border-secondary" />
            <footer className="bg-primary font-jost text-secondary px-6 py-10 md:py-0 w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 min-h-[20vh]">
                <h2 className="text-xl md:text-2xl font-semibold text-center md:text-left">
                    Bukky Abdul
                </h2>
                <div className="text-xs md:text-sm flex flex-col items-center justify-center text-center">
                    <p>© {currentYear} · All rights reserved</p>
                    <div className='flex gap-4 mt-2'>
                        <Link href={"https://www.instagram.com/bukky_abdul/"} target="_blank" rel="noopener noreferrer">
                            <Icon icon="mdi:instagram" className="w-5 h-5 transition-transform hover:scale-110" />
                        </Link>
                        <Link href={"https://www.instagram.com/bukkythehost/"} target="_blank" rel="noopener noreferrer">
                            <Icon icon="skill-icons:instagram" className="w-5 h-5 transition-transform hover:scale-110" />
                        </Link>
                    </div>
                </div>
                <Link href={"/contact"}>
                    <AnimatedButton />
                </Link>
            </footer>
        </div>
    );
}