import React from 'react';
import Image from 'next/image';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MediaPage = () => {
    return (
        <div className="homepage-theme text-deep-gray font-jost min-h-screen flex flex-col">
            <Navbar />
            
            {/* Hero Section */}
            <section className="relative w-full min-h-[60vh] flex flex-col justify-center items-center text-center px-6 py-24 overflow-hidden pt-32">
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-warm-beige to-white"></div>
                <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center mt-12">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-deep-gray/10 text-sm font-medium text-dusty-purple mb-8 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
                        Media is storytelling amplified
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-dusty-purple leading-tight font-playfair">
                        Faith-Filled Stories<br />Told Through Media
                    </h1>
                    <p className="text-lg md:text-xl text-deep-gray/80 max-w-2xl leading-relaxed">
                        This space is dedicated to telling stories inspired by God through creative and digital platforms. Through film, digital media, storytelling, conversations, and visual expression, the goal is to create faith-filled content that inspires, challenges, encourages, and points people back to God and living a life called by Jesus.
                    </p>
                </div>
            </section>

            {/* Belief & Purpose Section */}
            <section className="w-full px-6 py-24 bg-white border-y border-deep-gray/5">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-dusty-purple font-playfair">
                            A Tool For Impact
                        </h2>
                        <div className="w-12 h-1 bg-gold rounded-full"></div>
                        <p className="text-deep-gray/80 text-lg leading-relaxed">
                            Every project is rooted in meaningful storytelling and the belief that media can be used as a tool for impact, transformation, and evangelism.
                        </p>
                        <p className="text-deep-gray/80 text-lg leading-relaxed">
                            Whether through short films, interviews, digital content, or creative storytelling, this platform exists to share stories that carry heart, faith, culture, and purpose.
                        </p>
                    </div>
                    <div className="relative h-[400px] w-full rounded-3xl overflow-hidden group shadow-lg">
                        <div className="absolute inset-0 bg-gradient-to-br from-dusty-purple/10 to-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 mix-blend-overlay"></div>
                        <div className="w-full h-full bg-warm-beige flex items-center justify-center border border-deep-gray/5 rounded-3xl relative overflow-hidden">
                            <div className="absolute inset-0 opacity-[0.05] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjMmYyZjJmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8cGF0aCBkPSJNMCAwaDR2NEgwbTQgNGg0djRINFoiIGZpbGw9IiMyZjJmMmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+Cjwvc3ZnPg==')]"></div>
                            <svg className="w-24 h-24 text-dusty-purple/50 drop-shadow-md relative z-20 group-hover:scale-110 transition-transform duration-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm-2 14.5v-9l6 4.5-6 4.5z" /></svg>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Project Section */}
            <section className="w-full px-6 py-32 relative bg-warm-beige/50">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col items-center mb-16">
                        <span className="text-gold font-semibold tracking-wider uppercase text-sm mb-4">Featured Project</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-center text-dusty-purple font-playfair">Disguise</h2>
                    </div>

                    <div className="group relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden bg-white shadow-xl border border-deep-gray/5 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            {/* Poster Image */}
                            <div className="relative h-[400px] md:h-auto overflow-hidden bg-warm-beige">
                                <Image
                                    src="/images/disguise-poster.png"
                                    alt="Disguise Short Film Poster"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent md:hidden"></div>
                            </div>
                            
                            {/* Content */}
                            <div className="flex flex-col justify-center p-8 md:p-12 z-10 relative">
                                <h3 className="text-2xl font-bold mb-4 text-dusty-purple group-hover:text-gold transition-colors font-playfair">
                                    Disguise
                                </h3>
                                <p className="text-deep-gray/80 leading-relaxed mb-8">
                                    Disguise is our first short film project, centered on storytelling that reflects staying rooted and grounded in God, no matter what, through a creative lens.
                                </p>
                                <div className="mt-auto">
                                    <div className="inline-flex flex-col">
                                        <span className="text-xs text-deep-gray/60 uppercase tracking-wider mb-1 font-medium">Release Date</span>
                                        <span className="text-lg font-medium text-dusty-purple flex items-center gap-2">
                                            <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                            July 2026
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Outro/Footer Section */}
            <section className="w-full px-6 py-24 bg-white border-t border-deep-gray/5 text-center flex-grow">
                <div className="max-w-3xl mx-auto flex flex-col items-center">
                    <svg className="w-12 h-12 text-gold/50 mb-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                    <h3 className="text-2xl md:text-3xl font-medium text-dusty-purple mb-6 leading-snug font-playfair">
                        More faith-inspired media projects and storytelling experiences are on the way.
                    </h3>
                    <p className="text-deep-gray/80 text-lg leading-relaxed mb-12">
                        This space reflects creativity, communication, culture, and stories that glorify God while connecting with people in authentic and meaningful ways.
                    </p>
                    <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-deep-gray/20 to-transparent"></div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default MediaPage;