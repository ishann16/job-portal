import Image from "next/image"
export default function JobBoard(){
    return(
        <main className="flex items-center justify-center p-10 gap-10">
            <div  style={{ height:"300px", width:"250px", borderRadius:"10px", borderColor: "gray", borderWidth: "1px" }}>
                <div className="p-5"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-12 h-12">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg></div>
                <span></span>
            

            </div>
            <div  style={{ height:"300px", width:"250px", borderRadius:"10px", borderColor: "gray", borderWidth: "1px" }}>

            </div>
            <div  style={{ height:"300px", width:"250px", borderRadius:"10px", borderColor: "gray", borderWidth: "1px" }}>

            </div>
        </main>
    );
}