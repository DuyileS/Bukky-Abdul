"use client"

import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import AnimatedButton from '@/components/AnimatedButton'
import Testimonials from '@/components/Testimonials'

const offerings = [
  {
    title: "Career Planning",
    description: "Create a personalized career plan that aligns with your values, strengths, and long-term goals.",
    icon: "mdi:file-tree"
  },
  {
    title: "Career Exploration",
    description: "Explore new career paths and possibilities with guided clarity and confidence.",
    icon: "mdi:compass-outline"
  },
  {
    title: "Career Transition",
    description: "Navigate a smooth career transition into a new role, industry, or stage of life.",
    icon: "mdi:transition-masked"
  },
  {
    title: "Résumé & CV Optimization",
    description: "Revise and optimize your résumé/CV so it stands out to recruiters and hiring managers.",
    icon: "mdi:file-document-edit-outline"
  },
  {
    title: "Compelling Cover Letters",
    description: "Craft compelling, tailored cover letters that tell your unique professional story.",
    icon: "mdi:email-edit-outline"
  },
  {
    title: "Professional Networking",
    description: "Build and strengthen your professional network, both online and in person.",
    icon: "mdi:account-group-outline"
  },
  {
    title: "Strategic Job Search",
    description: "Design and execute an effective, strategic job search (not just “apply and hope”).",
    icon: "mdi:magnify"
  },
  {
    title: "LinkedIn Optimization",
    description: "Optimize and polish your LinkedIn profile to attract the right opportunities.",
    icon: "mdi:linkedin"
  },
  {
    title: "Personal Branding",
    description: "Develop and elevate your personal brand so you’re memorable and marketable.",
    icon: "mdi:star-face"
  },
  {
    title: "Interview Preparation",
    description: "Practice and prepare for job interviews through mock interviews and feedback.",
    icon: "mdi:microphone-outline"
  },
  {
    title: "Graduate School Prep",
    description: "Plan and prepare for graduate school applications, from program selection to personal statements.",
    icon: "mdi:school-outline"
  }
]

const CareerCoachingPage = () => {
  return (
    <div className="bg-primary text-white font-jost min-h-screen selection:bg-secondary selection:text-white">
      <Navbar />

      <main>
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <Image
            src="/coaching-hero.jpg"
            alt="Career Coaching Hero"
            fill
            className="object-[50%_35%] object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-linear-to from-primary/60 via-transparent to-primary" />

          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto space-y-6">
            <h1 className="text-5xl md:text-7xl font-playfair font-semibold">
              Career <span className="italic text-secondary">Coaching</span>
            </h1>
            <p className="text-lg md:text-xl font-playfair italic text-gray-200 max-w-2xl mx-auto leading-relaxed">
              "Guiding you from where you are to the divine potential God has scripted into your career."
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold">What I Offer</h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive support designed to help you navigate every stage of your professional journey with confidence and clarity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((offering, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-secondary/50 transition-all duration-500 hover:-translate-y-2 flex flex-col items-start gap-5 backdrop-blur-sm"
              >
                <div className="p-4 rounded-xl bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-500">
                  <Icon icon={offering.icon} className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-playfair font-semibold group-hover:text-secondary transition-colors duration-300">
                  {offering.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  {offering.description}
                </p>
              </div>
            ))}
          </div>
        </section>
        {/* <Testimonials /> */}
        {/* CTA Section */}
        <section className="py-24 px-6 bg-secondary/5">
          <div className="max-w-4xl mx-auto text-center space-y-8 p-12 rounded-3xl border border-secondary/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -ml-32 -mb-32" />

            <h2 className="text-3xl md:text-5xl font-playfair font-bold">Ready to tell your professional story? Reach out here</h2>
            <p className="text-lg text-gray-300 font-jost max-w-xl mx-auto">
              Let's work together to unlock your full potential and design a career that truly reflects your values and aspirations.
            </p>
            <div className="flex justify-center pt-4">
              <Link href="/contact">
                <AnimatedButton />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default CareerCoachingPage
