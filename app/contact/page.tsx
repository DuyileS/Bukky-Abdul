"use client"

import Footer from '@/components/Footer'
import Form from '@/components/Form';
import Navbar from '@/components/Navbar';
import { Icon } from '@iconify/react';

const page = () => {

    const year = new Date().getFullYear();

    return (
        <div className='bg-primary min-h-screen font-playfair flex flex-col text-white'>
            <Navbar />
            <div className="flex-1 w-full max-w-7xl 2xl:max-w-[1400px] bg-primary font-jost text-white mx-auto px-8 py-12">
                <div className="flex justify-between">
                    <p className="flex items-center gap-1">
                        <span>
                            <Icon
                                icon="mdi:square-rounded"
                                className="w-4 h-4 text-secondary-700"
                            />
                        </span>{" "}
                        <span className="font-medium">Fill The Form Out</span>
                    </p>
                    <p className="flex gap-1 font-semibold text-2xl">
                        <span>&copy;</span>
                        {year}
                    </p>
                </div>
                <div className="flex rounded-md bg-secondary-200 w-32 h-10 justify-center text-center items-center gap-2 p-2 mt-20">
                    <Icon icon="ph:paper-plane-tilt" className="w-4 h-4 text-secondary-700 font-bold" />
                    <p className="text-[#5b1219] text-sm font-semibold">Contact Now</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 mt-2 gap-8 2xl:gap-12">
                    <div className='space-y-4'>
                        <h1 className='text-7xl 2xl:text-8xl font-bold'>Let&apos;s Connect</h1>
                        <p className='font-semibold text-lg 2xl:text-xl max-w-lg'>Ready to unlock your potential and elevate your journey? <br /> Reach out I&apos;d love to hear your story and explore how I can support your growth.</p>
                        <hr className='w-3/4' />
                        <p className="flex items-center gap-1">
                            <span>
                                <Icon
                                    icon="lucide:map-pin"
                                    className="w-10 h-8 text-secondary-700"
                                />
                            </span>{" "}
                            <span className="font-bold text-3xl">Address</span>
                        </p>
                        <p className="ml-8 font-semibold text-lg mb-4">Tennessee, USA</p>
                        <hr className='w-3/4 pb-4' />
                    </div>
                    <Form />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default page