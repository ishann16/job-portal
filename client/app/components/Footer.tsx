export default function Footer(){
    return(
    <footer style={{borderTop:"0.5px solid grey"}} className="bg-white ">
        <div className="flex items-between justify-center mx-auto w-full max-w-screen-xl">
            <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-black">Booking support</h2>
                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                        <li className="mb-4">
                            <a href="#" className=" hover:underline">COVID-19</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Help Center</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Support</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Trust & Saftey</a>
                        </li>
                    </ul>
                </div>
            <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-black">Community</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Against Discrimination</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Invite Friends</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Gift Cards</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-black">About</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                        <a href="#" className="hover:underline">How it works</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Careers</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">About us</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Media</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-black">Become an employer</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Post your job</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Buisness account</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Resource Center</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Community</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div style={{borderTop:"0.5px solid grey"}}className="px-4 py-6 flex items-center justify-between">
        <span style={{marginLeft:"100px"}} className="text-gray-600">Privacy Policy&nbsp;<a href="#" className="ml-2 mr-2">License</a>&nbsp;API&nbsp;&copy;&nbsp;2021 All Rights Reserved.
        </span>
        <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            <span className="text-gray-600">English</span>
            <a href="#" className="text-gray-600 hover:text-gray-900 dark:hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M15.75 8.25a.75.75 0 0 1 .75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 1 1-.992-1.124A2.243 2.243 0 0 0 15 9a.75.75 0 0 1 .75-.75Z" />
                    <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM4.575 15.6a8.25 8.25 0 0 0 9.348 4.425 1.966 1.966 0 0 0-1.84-1.275.983.983 0 0 1-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 0 1 2.328-.377L16.5 15h.628a2.25 2.25 0 0 1 1.983 1.186 8.25 8.25 0 0 0-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.575 15.6Z" clip-rule="evenodd" />
                </svg>
            </a>
        </div> 
    </div>
</footer>
    );
}