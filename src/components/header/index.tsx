import Image from "next/image";
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import { RiUser3Line } from "react-icons/ri";
import { BsBag } from "react-icons/bs";



export default function RitHeader1() {

    return (

        <header className="flex justify-between items-center p-4 bg-black/25 h-24  mt-6">

            <Link href="/" className="flex items-center">
                <figure className="mr-4 w-28">
                    <Image
                        src="/images/RitualLogo1.svg"
                        alt="RitualLogo"
                        width={100} // or your actual width
                        height={100} // or your actual height
                        className="object-contain" // or object-cover
                    />
                </figure>
            </Link>



            <div className="flex items-center justify-between">

                <div className="">

                    <div className="relative w-30 mr-4 hidden lg:block">
                        <input
                            type="text"
                            className="pl-10 pr-4 py-2 rounded"
                            placeholder="Search..."
                        />
                        <IoIosSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                    <div>
                        <Link href="/" className="flex items-center justify-center mr-4 lg:hidden">
                            <IoIosSearch className="w-7 h-7" />
                        </Link>
                    </div>

                </div>

                <div className="flex items-center space-x-4 mr-4">
                    <Link href="/" className="flex items-center justify-center">
                        <RiUser3Line className="w-6 h-6" />
                    </Link>
                    <Link href="/" className="flex items-center justify-center">
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

        </header>
    )
}