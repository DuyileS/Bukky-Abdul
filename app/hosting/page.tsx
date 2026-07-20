import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Icon } from '@iconify/react';

const HostingPage = () => {
    return (
        <div className="homepage-theme min-h-screen flex flex-col font-jost">
            <Navbar variant="primary" />

            <main className="flex-1 relative overflow-hidden">

                {/* Intro/Hero Section */}
                <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                    <Image
                        src="/gallery4.JPG"
                        alt="Hosting Hero"
                        fill
                        className="object-[50%_35%] object-cover opacity-40"
                        priority
                    />
                    <div className="absolute inset-0 bg-linear-to from-primary/60 via-transparent to-primary" />

                    <div className="relative z-10 text-center px-6 max-w-4xl mx-auto space-y-6">
                        <h1 className="text-5xl md:text-7xl font-playfair font-semibold">
                            Professional <span className="italic text-secondary">Hosting</span>
                        </h1>
                        <p className="text-lg md:text-xl font-playfair italic text-deep-gray/90 max-w-2xl mx-auto leading-relaxed">
                            "An event is more than a program. It is an experience, a memory, and a story unfolding in real time."
                        </p>
                        <p className="text-base md:text-lg text-deep-gray/80 max-w-3xl mx-auto leading-relaxed">
                            As a professional event host and emcee, I bring energy, professionalism, warmth, cultural awareness, and intentional audience engagement to every stage.
                        </p>
                    </div>
                </section>

                <div className="flex flex-col items-center py-12 px-6 md:px-12 w-full">

                    {/* Services Section */}
                    <div className="relative z-10 max-w-6xl w-full mb-16">
                        <div className="bg-white/80 backdrop-blur-md rounded-[2.5rem] p-8 md:p-12 shadow-xl relative overflow-hidden border border-[#4a1c52]/10">
                            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,_#4a1c52_1px,_transparent_1px)] bg-[size:20px_20px]"></div>

                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-5xl font-playfair font-bold text-center mb-12 text-[#4a1c52]">Hosting Services</h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {[
                                        "Weddings and receptions",
                                        "Corporate and professional events",
                                        "Birthdays and social events",
                                        "Conferences and panels",
                                        "Cultural and community events",
                                        "Award ceremonies and galas",
                                        "Live interviews and conversations"
                                    ].map((service, index) => (
                                        <div key={index} className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm border border-[#4a1c52]/5 hover:border-[#4a1c52]/20 hover:bg-[#4a1c52]/[0.02] transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                                            <div className="w-10 h-10 rounded-full bg-[#4a1c52]/5 flex items-center justify-center shrink-0">
                                                <Icon icon="mdi:star-four-points" className="text-gold w-5 h-5" />
                                            </div>
                                            <span className="font-medium text-lg leading-tight text-deep-gray/90">{service}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Container */}
                    <div className="relative z-10 max-w-5xl w-full bg-white/40 backdrop-blur-sm rounded-3xl p-8 md:p-16 shadow-2xl border border-white/30 my-8">

                        {/* Header Section */}
                        <div className="text-center mb-16">
                            <div className="flex justify-center mb-2">
                                <Image
                                    src="/hostLogo.png"
                                    alt="Bukky the Host"
                                    width={500}
                                    height={280}
                                    className="w-[100px] md:w-[150px] lg:w-[200px] h-auto object-contain drop-shadow-sm"
                                    priority
                                />
                            </div>
                            <p className="tracking-[0.2em] font-semibold text-sm md:text-base text-[#4a1c52]">
                                PROFESSIONAL EVENT HOST & MC
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-[#2d0f33]">

                            {/* Left Column */}
                            <div className="space-y-12">
                                {/* Hosting Rates */}
                                <section>
                                    <h2 className="text-3xl font-bold italic mb-6 border-b-2 border-[#4a1c52]/20 pb-2 uppercase tracking-wide">Hosting Rates</h2>
                                    <div className="space-y-4">
                                        <div className="flex justify-between font-bold text-sm uppercase tracking-wider text-[#4a1c52]/70">
                                            <span>Event Type</span>
                                            <span>Starting Rate</span>
                                        </div>
                                        <div className="h-px bg-[#4a1c52]/20 w-full"></div>
                                        <div className="flex justify-between items-center py-1">
                                            <span className="text-lg font-medium">Weddings</span>
                                            <span className="text-xl font-bold">$500</span>
                                        </div>
                                        <div className="flex justify-between items-center py-1 border-t border-[#4a1c52]/10 pt-2">
                                            <span className="text-lg font-medium">Corporate Events</span>
                                            <span className="text-xl font-bold">$600</span>
                                        </div>
                                        <div className="flex justify-between items-center py-1 border-t border-[#4a1c52]/10 pt-2">
                                            <span className="text-lg font-medium">Birthdays & Social Events</span>
                                            <span className="text-xl font-bold">$400</span>
                                        </div>
                                        <p className="text-xs italic mt-4 text-[#4a1c52]/80 leading-relaxed">
                                            Final pricing varies based on event size, duration, location, and specific requirements.
                                        </p>
                                    </div>
                                </section>

                                {/* Booking Includes */}
                                <section>
                                    <h2 className="text-3xl font-bold italic mb-6 border-b-2 border-[#4a1c52]/20 pb-2 uppercase tracking-wide">Booking Includes</h2>
                                    <ul className="space-y-3">
                                        {[
                                            "Professional event hosting and emceeing",
                                            "Pre-event consultation and planning call",
                                            "Event timeline and run-of-show coordination",
                                            "Coordination with planner, DJ, and key vendors",
                                            "Crowd engagement and audience management",
                                            "Announcements, transitions, and program flow execution"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#4a1c52] shrink-0" />
                                                <span className="text-lg leading-snug">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </section>

                                {/* Booking Policy */}
                                <section>
                                    <h2 className="text-3xl font-bold italic mb-6 border-b-2 border-[#4a1c52]/20 pb-2 uppercase tracking-wide">Booking Policy</h2>
                                    <ul className="space-y-3">
                                        {[
                                            "A 50% non-refundable retainer is required to secure your date",
                                            "Remaining balance is due 14 days prior to the event",
                                            "Dates are only confirmed upon receipt of the retainer",
                                            "Payments are non-refundable but may be transferrable (case-by-case basis)"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#4a1c52] shrink-0" />
                                                <span className="text-lg leading-snug">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            </div>

                            {/* Right Column */}
                            <div className="space-y-12">
                                {/* Travel Policy */}
                                <section>
                                    <h2 className="text-3xl font-bold italic mb-6 border-b-2 border-[#4a1c52]/20 pb-2 uppercase tracking-wide">Travel Policy</h2>
                                    <p className="text-lg mb-4 font-medium">For events requiring travel, the client is responsible for:</p>
                                    <ul className="space-y-3 mb-4">
                                        {[
                                            "Flight",
                                            "Hotel accommodations",
                                            "Ground transportation"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#4a1c52] shrink-0" />
                                                <span className="text-lg leading-snug">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="text-sm italic text-[#4a1c52]/80 bg-[#4a1c52]/5 p-3 rounded-lg border-l-4 border-[#4a1c52]">
                                        Travel may be included in a custom package upon request.
                                    </p>
                                </section>

                                {/* Additional Info */}
                                <section>
                                    <h2 className="text-3xl font-bold italic mb-6 border-b-2 border-[#4a1c52]/20 pb-2 uppercase tracking-wide">Additional Info</h2>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#4a1c52] shrink-0" />
                                            <span className="text-lg leading-snug">Rates are based on standard event durations. Additional hours available upon request</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#4a1c52] shrink-0" />
                                            <div className="text-lg leading-snug">
                                                Based in Knoxville, Tennessee
                                                <div className="font-bold italic mt-2 flex items-center gap-2 text-2xl text-[#4a1c52]">
                                                    Available to Travel <Icon icon="mdi:airplane" className="rotate-45" />
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </section>

                                {/* Let's Connect */}
                                <section className="pt-8 border-t border-[#4a1c52]/10">
                                    <h2 className="text-4xl font-bold italic mb-2 uppercase tracking-tight">Let&apos;s Connect!</h2>
                                    <p className="text-xl font-semibold mb-6 tracking-tight text-[#4a1c52]">Now booking 2026 events!</p>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 text-xl">
                                            <div className="bg-[#4a1c52] p-2 rounded-lg text-white">
                                                <Icon icon="mdi:email" className="w-6 h-6" />
                                            </div>
                                            <a href="mailto:bukkythehost@gmail.com" className="hover:underline font-medium">bukkythehost@gmail.com</a>
                                        </div>
                                    </div>
                                </section>
                            </div>

                        </div>
                    </div>

                    {/* Video Section */}
                    <div className="relative z-10 max-w-6xl w-full mt-12 mb-20">
                        <h2 className="text-4xl font-playfair font-bold text-center mb-12 text-[#4a1c52] italic tracking-wide">Event Highlights</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Original Video */}
                            <div className="rounded-3xl overflow-hidden shadow-xl border border-white/30 aspect-video bg-black/5 flex">
                                <video
                                    src="/hosting.mp4"
                                    controls
                                    preload="metadata"
                                    className="w-full h-full object-center object-contain bg-black/5"
                                />
                            </div>

                            {/* Iframe Placeholder 1 */}
                            <div className="rounded-3xl overflow-hidden shadow-xl border border-white/30 aspect-video bg-white/60 flex items-center justify-center backdrop-blur-sm relative group transition-all hover:bg-white/80">
                                {/* TODO: Replace the div below with your actual iframe code. Example: <iframe src="https://www.youtube.com/embed/..." className="w-full h-full" allowFullScreen></iframe> */}
                                <video
                                    src="/hosting2.mp4"
                                    controls
                                    preload="metadata"
                                    className="w-full h-full object-center object-contain bg-black/5"
                                />
                            </div>

                            {/* Iframe Placeholder 2 */}
                            <div className="rounded-3xl overflow-hidden shadow-xl border border-white/30 aspect-video bg-white/60 flex items-center justify-center backdrop-blur-sm relative group transition-all hover:bg-white/80">
                                <video
                                    src="/hosting3.mp4"
                                    controls
                                    preload="metadata"
                                    className="w-full h-full object-center object-contain bg-black/5"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default HostingPage;