import Image from "next/image";
import AnimatedButton from "./AnimatedButton";
import Link from "next/link";

const Intro = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-4 px-6 min-h-screen py-10 lg:py-0">
            <div className="pt-10 lg:pt-20 space-y-6 flex-1 w-full">
                <div className="flex items-center gap-2 uppercase font-semibold text-sm md:text-base">
                    <hr className="w-8 md:w-12 border-secondary" />
                    <p>Career Coach</p>
                    <p>.</p>
                    <p>Event Host</p>
                    <p>.</p>
                    <p>Minister</p>
                </div>
                <p className="text-4xl md:text-5xl lg:text-6xl tracking-wide font-semibold">Bukky Abdul</p>
                <p className="italic text-lg md:text-xl leading-relaxed">
                    "I&apos;m here to host the transition from where you are to where you&apos;re called to be,
                    walking with you through the daily grind while
                    we pull the curtain back on the divine potential God has already scripted into your career."
                </p>
                <p className="text-sm md:text-base leading-relaxed">Assistant Director, SCM Career Management · Event Compere · Content Creator · Educator · And more importantly a Bondservant of Jesus Christ.</p>
                <Link href={"/contact"}>
                    <AnimatedButton />
                </Link>
            </div>
            <div className="relative w-full lg:flex-1 min-h-[40vh] md:min-h-[50vh] lg:min-h-0">
                <Image
                    src={"/intro-image.jpg"}
                    alt="Hero image"
                    fill
                    className="object-cover lg:max-h-full rounded-lg lg:rounded-none"
                    quality={100}
                    priority
                />
            </div>
        </div>
    )
}

export default Intro