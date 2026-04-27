import Image from "next/image";
import AnimatedButton from "./AnimatedButton";
import Link from "next/link";

const Intro = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 font-jost min-h-screen w-full items-stretch">
            <div className="space-y-6 flex flex-col justify-center px-6 lg:px-16 py-20 lg:py-0">
                <div className="flex items-center gap-2 uppercase font-semibold text-sm md:text-base">
                    <hr className="w-8 md:w-12 border-secondary" />
                    <div className="uppercase flex tracking-[0.22em] text-secondary text-xs font-medium">
                        <p>Career Coach</p>
                        <p>.</p>
                        <p>Event Host</p>
                        <p>.</p>
                        <p>Minister</p>
                    </div>
                </div>
                <p className="text-4xl md:text-5xl lg:text-6xl font-playfair font-semibold">Bukky <span className="italic text-secondary">Abdul</span></p>
                <p className="italic font-playfair tracking-tighter text-lg md:text-xl leading-relaxed">
                    "I&apos;m here to host the transition from where you are to where you&apos;re called to be,
                    walking with you through the daily grind while
                    we pull the curtain back on the divine potential God has already scripted into your career."
                </p>
                <p className="text-sm md:text-base leading-relaxed">Assistant Director, SCM Career Management · Event Compere · Content Creator · Educator · And more importantly a Bondservant of Jesus Christ.</p>
                <Link href={"/contact"}>
                    <AnimatedButton />
                </Link>
            </div>
            <div className="relative w-full h-full min-h-[50vh] lg:min-h-screen">
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