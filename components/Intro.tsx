import Image from "next/image";
import AnimatedButton from "./AnimatedButton";
import Link from "next/link";

const Intro = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 font-jost min-h-screen w-full items-stretch">
            <div className="space-y-6 flex flex-col justify-center px-6 lg:px-16 py-20 lg:py-0">
                <div className="flex items-center gap-2 uppercase font-semibold text-sm md:text-base mt-12">
                    <hr className="w-8 md:w-12 border-secondary" />
                    <div className="uppercase flex tracking-[0.22em] text-secondary text-xs font-medium">
                        <p>Career Coach</p>
                        <p>.</p>
                        <p>Event Host</p>
                        <p>.</p>
                        <p>Discipler</p>
                    </div>
                </div>
                <p className="text-4xl md:text-5xl lg:text-6xl font-playfair font-semibold">Bukky <span className="italic text-secondary">Abdul</span></p>
                <p className="italic font-playfair tracking-tighter text-lg md:text-xl leading-relaxed">
                    &quot;We are all in the business of telling stories.
                    <br /><br />
                    Every conversation, every opportunity, every stage, every room, and every calling carries a story waiting to be told.
                    <br /><br />
                    Welcome to a platform built through faith, fueled by purpose, and expressed through the many gifts, passions, and experiences of Bukky Abdul.
                    <br /><br />
                    Whether through coaching, discipleship, education, media, hosting, or creative expression, this space exists to help people discover their voice, own their journey, and confidently tell their story to the world.
                    <br /><br />
                    So, what story are you called to tell, and how can I help you tell it?&quot;
                </p>
                <p className="text-sm md:text-base leading-relaxed"> Event Compere · Content Creator · Educator · And more importantly a Bondservant of Jesus Christ.</p>
                <Link className="mb-6" href={"/contact"}>
                    <AnimatedButton />
                </Link>
            </div>
            <div className="relative w-full h-full min-h-[50vh] lg:min-h-screen">
                <Image
                    src={"/optimized-hero.jpg"}
                    alt="Hero image"
                    fill
                    className="object-cover md:object-[50%_35%] lg:object-center px-8 lg:px-0 lg:max-h-full rounded-lg lg:rounded-none"
                    quality={100}
                    priority
                />
            </div>
        </div>
    )
}

export default Intro