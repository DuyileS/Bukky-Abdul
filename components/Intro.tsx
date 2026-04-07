import Image from "next/image";
import AnimatedButton from "./AnimatedButton";
import Link from "next/link";

const Intro = () => {
    return (
        <div className="flex gap-4 px-6 min-h-screen my-8">
            <div className="pt-20 space-y-4">
                <div className="flex items-center gap-2 uppercase font-semibold">
                    <hr className="w-[10%]" />
                    <p>Career Coach</p>
                    <p>.</p>
                    <p>Event Host</p>
                    <p>.</p>
                    <p>Minister</p>
                </div>
                <p className="text-6xl tracking-wide font-semibold">Bukky Abdul</p>
                <p className="italic">
                    "I&apos;m here to host the transition from where you are to where you&apos;re called to be <br />
                    walking with you through the daily grind <br /> while
                    we pull the curtain back on the divine potential God has already scripted into your career."
                </p>
                <p>Assistant Director, SCM Career Management . Event Compere. Content Creator. Educator. <br /> And more importantly a Bondservant of Jesus Christ.</p>
                <Link href={"/contact"}>
                    <AnimatedButton />
                </Link>
            </div>
            <div className="relative flex-1">
                <Image
                    src={"/intro-image.jpg"}
                    alt="Hero image"
                    fill
                    className="object-cover max-h-full"
                    quality={100}
                    priority
                />
            </div>
        </div>
    )
}

export default Intro