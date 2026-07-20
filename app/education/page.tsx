import React from 'react';
import Image from 'next/image';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const EducationPage = () => {
    const areas = [
        "Student and professional development",
        "Leadership training",
        "CliftonStrengths coaching and development",
        "Strengths-based leadership and team building",
        "Career readiness",
        "Workshop facilitation",
        "Immigrant administrators",
        "Legitimacy",
        "Higher education support and advocacy",
        "Student mentorship and development",
        "Communication and presentation skills"
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
                        Empowering Individuals & Communities
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-dusty-purple leading-tight font-playfair">
                        A Powerful Tool <br /> For Transformation
                    </h1>
                    <p className="text-lg md:text-2xl text-deep-gray/80 max-w-3xl leading-relaxed italic font-playfair">
                        "Education is one of the most powerful tools for transformation."
                    </p>
                </div>
            </section>

            {/* Narrative Content Section */}
            <section className="w-full px-6 py-24 bg-white border-y border-deep-gray/5">
                <div className="max-w-4xl mx-auto space-y-8 text-center">
                    <div className="w-16 h-1 bg-gold rounded-full mx-auto mb-8"></div>
                    <p className="text-deep-gray/90 text-xl leading-relaxed">
                        My work in education and training focuses on leadership development, student success, professional growth, and creating meaningful learning experiences that empower individuals and communities.
                    </p>
                    <p className="text-deep-gray/90 text-lg leading-relaxed">
                        As a PhD student in Higher Education Administration, my work and research are rooted in understanding higher education systems, student experiences, leadership, access, belonging, and the ways institutions can better serve diverse populations.
                    </p>
                    <p className="text-deep-gray/90 text-lg leading-relaxed font-medium">
                        I am passionate about helping students navigate academic, personal, spiritual, and professional spaces while also using my voice to advocate for students and create environments where they feel seen, supported, and empowered.
                    </p>
                </div>
            </section>

            {/* Areas & Image Section */}
            <section className="w-full px-6 py-24 bg-warm-beige/30 border-b border-deep-gray/5">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Featured Image */}
                    <div className="relative h-[650px] w-full rounded-3xl overflow-hidden shadow-2xl group border border-deep-gray/5 order-2 lg:order-1">
                        <div className="absolute inset-0 bg-gradient-to-t from-dusty-purple/40 via-transparent to-transparent opacity-80 z-10 mix-blend-overlay"></div>
                        <Image
                            src="/bukky26.jpeg"
                            alt="Education and Growth"
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                    </div>

                    {/* Right: Areas List */}
                    <div className="space-y-8 order-1 lg:order-2">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-dusty-purple font-playfair mb-6">
                                Practical Skills For Growth
                            </h2>
                            <p className="text-deep-gray/80 text-lg leading-relaxed mb-8">
                                Through workshops, speaking engagements, student development initiatives, mentorship, professional training, and CliftonStrengths development, I help learners and leaders build confidence, strategy, purpose, self-awareness, and practical skills for growth.
                            </p>
                        </div>

                        <div className="pt-8 border-t border-deep-gray/10">
                            <h3 className="text-xl font-bold text-dusty-purple mb-6 font-playfair uppercase tracking-wide">
                                Focus Areas Include
                            </h3>
                            <ul className="grid grid-cols-1 gap-4">
                                {areas.map((area, index) => (
                                    <li key={index} className="flex items-start gap-3 group">
                                        <div className="mt-1 shrink-0 w-6 h-6 rounded-full bg-white flex items-center justify-center group-hover:bg-gold transition-colors duration-300 shadow-sm">
                                            <svg className="w-3 h-3 text-dusty-purple group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-deep-gray/90 text-lg group-hover:text-dusty-purple transition-colors duration-300">
                                            {area}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Outro/Call to Action Section */}
            <section className="w-full px-6 py-24 bg-white text-center flex-grow">
                <div className="max-w-3xl mx-auto flex flex-col items-center">
                    <svg className="w-12 h-12 text-gold/50 mb-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                    <h3 className="text-3xl md:text-4xl font-medium text-dusty-purple mb-6 leading-snug font-playfair">
                        Ready to empower your students and leaders?
                    </h3>
                    <p className="text-deep-gray/80 text-lg leading-relaxed mb-10 max-w-xl">
                        Let's work together to create meaningful learning experiences and professional training.
                    </p>
                    <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-wider text-white uppercase transition-all duration-300 bg-dusty-purple rounded-full hover:bg-gold hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2">
                        Get In Touch
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default EducationPage;