import Link from 'next/link';
import AnimatedButton from './AnimatedButton';
import { Icon } from "@iconify/react";

export default function Footer() {

    const currentYear = new Date().getFullYear()

    return (
        <div>
            <hr className='text-secondary' />
            <footer className="bg-primary font-jost text-secondary px-6 w-full flex items-center justify-between min-h-[20vh]">
                <h2 className="text-xl md:text-2xl font-semibold">
                    Bukky Abdul
                </h2>
                <div className="text-sm flex flex-col items-center justify-center">
                    <p>© {currentYear} · All rights reserved</p>
                    <div className='flex gap-2'>
                        <Link href={"https://www.instagram.com/bukky_abdul/"}>
                            <Icon icon="mdi:instagram" className="w-4 h-4" />
                        </Link>
                        <Link href={"https://www.instagram.com/bukkythehost/"}>
                            <Icon icon="skill-icons:instagram" className="w-4 h-4" />
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