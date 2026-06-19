import React from 'react';
import Image from 'next/image';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SpeakingPage = () => {
    const topics = [
        "Leadership and purpose",
        "Career development",
        "Personal Branding",
        "Faith and identity",
        "Storytelling and communication",
        "Student and young professional development",
        "Navigating multiple talents & gifts",
        "Creativity and impact"
    ];

    return (
        <div className="homepage-theme text-deep-gray font-jost min-h-screen flex flex-col">
            <Navbar />

            {/* Hero Section */}
            <section className="relative w-full min-h-[65vh] flex flex-col justify-center items-center text-center px-6 py-24 overflow-hidden pt-32">
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-warm-beige to-white"></div>
                <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center mt-12">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-deep-gray/10 text-sm font-medium text-dusty-purple mb-8 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
                        Inspire Action, Reflection, & Growth
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-dusty-purple leading-tight font-playfair">
                        Some conversations <br /> change perspectives.
                    </h1>
                    <p className="text-lg md:text-2xl text-deep-gray/80 max-w-3xl leading-relaxed italic font-playfair">
                        "Some stories change lives."
                    </p>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="w-full px-6 py-24 bg-white border-y border-deep-gray/5">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Text Content */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-dusty-purple font-playfair mb-6">
                                Authentic Storytelling
                            </h2>
                            <div className="w-16 h-1 bg-gold rounded-full mb-8"></div>
                            <p className="text-deep-gray/90 text-lg leading-relaxed">
                                As a speaker, I engage audiences through authentic storytelling, thoughtful insight, humor, faith, leadership conversations, and practical encouragement.
                            </p>
                            <p className="text-deep-gray/90 text-lg leading-relaxed mt-4 font-medium">
                                The goal is not simply to speak at people, but to create conversations that inspire action, reflection, and growth.
                            </p>
                        </div>

                        <div className="pt-8 border-t border-deep-gray/10">
                            <h3 className="text-xl font-bold text-dusty-purple mb-6 font-playfair uppercase tracking-wide">
                                Speaking Topics
                            </h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {topics.map((topic, index) => (
                                    <li key={index} className="flex items-start gap-3 group">
                                        <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-warm-beige flex items-center justify-center group-hover:bg-gold transition-colors duration-300">
                                            <svg className="w-3 h-3 text-dusty-purple group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-deep-gray/80 text-md group-hover:text-dusty-purple transition-colors duration-300">
                                            {topic}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right: Featured Image */}
                    <div className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl group border border-deep-gray/5">
                        <div className="absolute inset-0 bg-gradient-to-t from-dusty-purple/60 via-transparent to-transparent opacity-80 z-10 mix-blend-overlay"></div>
                        <Image
                            src="/gallery16.jpg"
                            alt="Public Speaking Stage"
                            fill
                            className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                        />
                    </div>
                </div>
            </section>

            {/* Outro/Call to Action Section */}
            <section className="w-full px-6 py-24 bg-warm-beige/50 border-t border-deep-gray/5 text-center flex-grow">
                <div className="max-w-3xl mx-auto flex flex-col items-center">
                    <svg className="w-12 h-12 text-gold/50 mb-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                    <h3 className="text-3xl md:text-4xl font-medium text-dusty-purple mb-6 leading-snug font-playfair">
                        Ready to inspire your audience?
                    </h3>
                    <p className="text-deep-gray/80 text-lg leading-relaxed mb-10 max-w-xl">
                        Let's collaborate to bring transformative conversations and authentic storytelling to your next event or organization.
                    </p>
                    <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-wider text-white uppercase transition-all duration-300 bg-dusty-purple rounded-full hover:bg-gold hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2">
                        Book for Speaking
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default SpeakingPage;
