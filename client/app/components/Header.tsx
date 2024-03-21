import Image from "next/image";
import Link from 'next/link';

const links = ["Feed", "Contacts", "Jobs", "Messages", "Updates"];

export default function Header(){
    return (
        <nav className="flex items-center justify-between border-b border-gray-300 py-3 px-5 lg:px-10">
            <div className="flex items-center ml-[140px]">
                <Link href="/" className="block w-10 h-10">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7  mt-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                </Link>

                <ul className="hidden lg:flex list-none ml-5">
                    {links.map((link, index) => (
                        <li key={index} className="inline-block mr-8">
                            <Link href="/" className="hover:font-bold">{link}</Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex items-center space-x-4 mr-[120px]">
                <div className="hidden lg:flex mr-0">
                    <Link href="/create-job" className="hover:font-bold">Add Job</Link>
                </div>
                <div className="hidden lg:flex mr-8">
                    <Link href="/view-jobs" className="hover:font-bold">View Jobs</Link>
                </div>
                <div className="rounded-full overflow-hidden w-12 h-12 mr-[100px]">
                    <Link href="#"><Image src="/profile.png" alt="profile" width={100} height={100} /></Link>
                </div>
            </div>
        </nav>
    );
}
