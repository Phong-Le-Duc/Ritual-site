import Image from "next/image";
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import { RiUser3Line } from "react-icons/ri";
import { BsBag } from "react-icons/bs";
import { AiOutlineFire } from "react-icons/ai";

export default function RitHeader1() {

    return (
        <header className="">



            <nav className="hidden md:flex justify-end w-full p-2 text-sm pr-8">
                <Link href="/" className="text-white" aria-label="Newsletter">
                    Pulse
                </Link>
                <span className="text-white mx-3">|</span>
                <Link href="/" className="text-white" aria-label="About">
                    About
                </Link>
                <span className="text-white mx-3">|</span>
                <Link href="/" className="text-white" aria-label="Help">
                    Help
                </Link>
                <span className="text-white mx-3">|</span>
                <Link href="/" className="text-white" aria-label="Log in">
                    Log in
                </Link>
            </nav>


            <div className="flex justify-between items-center p-4 bg-gray-800/25 h-24">



                <Link href="/" className="flex items-center" aria-label="Home">
                    <figure className="mr-4 pl-2 w-28 h-auto">
                        <Image
                            src="/images/RitualLogo1.svg"
                            alt="RitualLogo"
                            width={100} // or your actual width
                            height={100} // or your actual height
                            className="object-contain" // or object-cover
                        />
                    </figure>
                </Link>

                <nav className="font-bebas hidden md:flex justify-center w-full p-2 text-xl gap-10">
                    <Link href="/" className="text-white" aria-label="News">
                        News
                    </Link>
                    <Link href="/" className="text-white" aria-label="About">
                        About
                    </Link>
                    <Link href="/" className="text-white" aria-label="Help">
                        Help
                    </Link>
                    <Link href="/flavor" className="text-white" aria-label="Spice">
                        Spice
                    </Link>
                </nav>

                <div className="flex items-center justify-between">

                    <div className="">

                        <div className="relative w-30 mr-4 hidden lg:block">
                            <input
                                type="text"
                                className="pl-10 pr-4 py-2 rounded"
                                placeholder="Search..."
                                aria-label="Search"
                            />
                            <IoIosSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        </div>
                        <div>
                            <Link href="/" className="flex items-center justify-center mr-4 lg:hidden" aria-label="Search">
                                <IoIosSearch className="w-7 h-7" />
                            </Link>
                        </div>

                    </div>

                    <div className="flex items-center space-x-4 mr-4">
                        <Link
                            href="/"
                            className="flex items-center justify-center md:hidden"
                            aria-label="Log in"
                        >
                            <RiUser3Line className="w-6 h-6" />
                        </Link>

                        {/* Favorites icon: visible only on md and up */}
                        <Link
                            href="/"
                            className="hidden md:flex items-center justify-center"
                            aria-label="Favorites"
                        >
                            <AiOutlineFire className="w-7 h-7" />
                        </Link>

                        <Link href="/" className="flex items-center justify-center" aria-label="Shopping cart">
                            <BsBag className="w-6 h-6" />
                        </Link>
                    </div>

                    <button className="md:hidden p-2" aria-label="Open menu">
                        <svg
                            className="w-8 h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

            </div>



        </header>
    )
}