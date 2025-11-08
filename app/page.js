import Image from "next/image";
import Link from "next/link";

export default function Home() {
    let timeOfDay = "";
    let timeEmoji = "";

    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {
        timeOfDay = "morning";
        timeEmoji = "☀️";
    } else if (hour >= 12 && hour < 17) {
        timeOfDay = "afternoon";
        timeEmoji = "♥️";
    } else {
        timeOfDay = "evening";
        timeEmoji = "🌙";
    }

    return (
        <>
            {/* Start Main Content */}
            <div className="h-screen">
                <div className="h-full sm:rounded-lg bg-linear-[-20deg,#1E261F10_20%,#111511_80%] flex flex-col justify-between sm:p-4 p-2">
                    <div className="flex justify-between items-center space-x-4 max-sm:text-md text-center sm:px-3 sm:pb-3 sm:pt-1 p-4 font-fraunces font-light">
                        <Link
                            href="/captains-log"
                            className="min-w-fit"
                        >
                            v 0.1.0
                        </Link>
                        <div className="h-px w-full bg-[#fff8dc50]"></div>
                        <span className="min-w-fit">
                            <em>brand experience architecture</em>
                        </span>
                    </div>
                    <div className="flex justify-center items-center w-full h-full px-3">
                        <main className="flex flex-col justify-center items-center sm:text-xl text-md h-full w-full lg:border-x lg:border-[#fff8dc50] font-light max-sm:-mt-7">
                            <div className="max-w-[480px]">
                                <div className="text-center">
                                    <Image
                                        src="/FullLogo_Stacked_Light.png"
                                        alt="Alchxmy Studio Logo"
                                        width={250}
                                        height={250}
                                        className="mx-auto max-sm:hidden"
                                    />
                                    <Image
                                        src="/FullLogo_Stacked_Light.png"
                                        alt="Alchxmy Studio Logo"
                                        width={200}
                                        height={200}
                                        className="mx-auto sm:hidden"
                                    />
                                    <p className="pt-4">
                                        Our head architect is currently crafting
                                        a brand new virtual experience! In the
                                        meantime, feel free to poke around and
                                        explore ✨
                                    </p>
                                </div>
                                <div className="pt-5 w-full">
                                    <Link
                                        href="#"
                                        className="flex justify-between py-3 px-5 bg-[#1E261F] border-black border rounded-lg drop-shadow-md/50 mt-2"
                                    >
                                        <span>Portfolio Adventure</span>
                                        <Image
                                            src="/rightarrow.svg"
                                            alt="Arrow"
                                            width={20}
                                            height={20}
                                        />
                                    </Link>
                                    <Link
                                        href="#"
                                        className="flex justify-between py-3 px-5 bg-primary-800 border-black border rounded-lg drop-shadow-md/50 mt-3 opacity-50"
                                    >
                                        <span>About the Studio</span>
                                        <Image
                                            src="/rightarrow.svg"
                                            alt="Arrow"
                                            width={20}
                                            height={20}
                                        />
                                    </Link>
                                </div>
                            </div>
                        </main>
                    </div>
                    <footer className="font-fraunces font-light">
                        <div className="flex justify-between items-center space-x-4 max-sm:text-sm text-center sm:pt-4 sm:px-2 sm:pb-1 p-4">
                            <span className="min-w-fit">
                                <em>good {timeOfDay} from los angeles </em>
                                {timeEmoji}
                            </span>
                            <div className="h-px w-full bg-[#fff8dc50]"></div>
                            <div className="flex space-x-4 min-w-fit">
                                <Link href="https://github.com/cromtoribio/alchxmy-studio">
                                    <Image
                                        src="/github.svg"
                                        alt="Github"
                                        width={20}
                                        height={20}
                                    />
                                </Link>
                                <Link href="https://www.instagram.com/alchxmystudio">
                                    <Image
                                        src="/instagram.svg"
                                        alt="Github"
                                        width={20}
                                        height={20}
                                    />
                                </Link>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
}
