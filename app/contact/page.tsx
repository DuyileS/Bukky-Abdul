"use client"

import Footer from '@/components/Footer'
import Form from '@/components/Form';
import Navbar from '@/components/Navbar';
import { Icon } from '@iconify/react';

const page = () => {
    const year = new Date().getFullYear();

    return (
        <div className='homepage-theme text-deep-gray min-h-screen font-jost flex flex-col relative'>
            <Navbar />
            
            {/* Background elements */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-warm-beige to-white"></div>
            
            <div className="flex-1 w-full max-w-7xl 2xl:max-w-[1400px] mx-auto px-8 py-24 relative z-10 flex flex-col justify-center">
                
                {/* Top decorative row */}
                <div className="flex justify-between items-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-deep-gray/10 text-sm font-medium text-dusty-purple shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
                        Contact
                    </div>
                    <p className="flex items-center gap-1 font-semibold text-lg text-dusty-purple">
                        <span className='text-gold'>&copy;</span>
                        {year}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 2xl:gap-32 items-start mt-8">
                    
                    {/* Left Column: Text Info */}
                    <div className='space-y-8 lg:space-y-12'>
                        <div>
                            <h1 className='text-6xl md:text-7xl 2xl:text-8xl font-bold font-playfair text-dusty-purple mb-6 leading-tight'>
                                Let&apos;s Connect
                            </h1>
                            <div className="w-16 h-1 bg-gold rounded-full mb-8"></div>
                            <p className='text-lg 2xl:text-xl text-deep-gray/80 max-w-lg leading-relaxed'>
                                Ready to unlock your potential and elevate your journey? Reach out, I&apos;d love to hear your story and explore how I can support your growth.
                            </p>
                        </div>

                        <div className="bg-white/60 backdrop-blur-md border border-deep-gray/5 p-8 rounded-3xl shadow-sm space-y-6">
                            <h3 className="text-xl font-bold text-dusty-purple font-playfair uppercase tracking-wide border-b border-deep-gray/10 pb-4">
                                Contact Information
                            </h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-warm-beige flex items-center justify-center flex-shrink-0">
                                        <Icon icon="lucide:map-pin" className="w-6 h-6 text-gold" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-lg text-dusty-purple font-playfair">Location</p>
                                        <p className="text-deep-gray/80 text-lg mt-1">Tennessee, USA</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-warm-beige flex items-center justify-center flex-shrink-0">
                                        <Icon icon="ph:paper-plane-tilt" className="w-6 h-6 text-gold" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-lg text-dusty-purple font-playfair">Reach Out</p>
                                        <p className="text-deep-gray/80 text-lg mt-1">Send a message using the form</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="bg-white rounded-[2.5rem] shadow-xl border border-deep-gray/5 p-8 md:p-12">
                        <h2 className="text-3xl font-bold font-playfair text-dusty-purple mb-8">Send a Message</h2>
                        <Form />
                    </div>
                </div>
            </div>
            
            <div className="mt-auto relative z-10">
                <Footer />
            </div>
        </div>
    )
}

export default page