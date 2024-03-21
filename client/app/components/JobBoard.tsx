'use client';
import React, { useState } from 'react';
import Image from 'next/image';

export default function JobBoard() {
    const [showPopup1, setShowPopup1] = useState(false);
    const [showPopup2, setShowPopup2] = useState(false);
    const [showPopup3, setShowPopup3] = useState(false);

    const togglePopup1 = () => {
        setShowPopup1(!showPopup1);
    };

    const togglePopup2 = () => {
        setShowPopup2(!showPopup2);
    };

    const togglePopup3 = () => {
        setShowPopup3(!showPopup3);
    };

    return (
        <main className="flex items-center justify-center p-10 pt-0 gap-10">
            <button onClick={togglePopup1}>
                <div  style={{ height:"300px", width:"300px", borderRadius:"10px", borderColor: "gray", borderWidth: "1px" }}>
                    <div className="p-5">
                        <Image src="/db.jpeg" alt="logo" width={60} height={60}/>
                        </div>
                    <div className="p-3 ">
                        <p style={{ fontSize: "18px" }}><strong>Crisis Intervention Specialist</strong></p>
                        <p style={{ fontSize: "16px" }}>London, Dribble Inc.</p>
                    </div>
                    <div className="flex items-center justify-center rounded-full h-[50px] w-auto border border-gray-300 m-6">$50k - $55k per month</div>
                </div>
            </button>

            {showPopup1 && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-8 w-[500px] h-auto rounded-md">
                    <div className='flex flex-row items-center justify-between mb-4'>
                    <Image src="/db.jpeg" alt="logo" width={60} height={60}/>
                    <button onClick={togglePopup1} className="mt-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                        <h2 className="text-xl font-bold mt-0 mb-4">Crisis Intervention Specialist</h2>
                        <p className="mt-0 mb-2">London, Dribble Inc.</p>
                        <h4 className='font-bold'>Description</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam recusandae, fuga adipisci tenetur mollitia, quisquam numquam sit animi soluta quae quas nam fugiat, amet nemo? Tenetur veniam natus quasi reiciendis fugit nihil officia magni similique porro! Itaque, rerum saepe eveniet aspernatur quibusdam architecto facere perferendis, at, deleniti omnis ex recusandae.</p>
                        <div className='ml-[150px] mt-4 bg-orange' style={{width:"150px"}}>
                            <button className="flex items-center overflow-hidden justify-center w-full h-full p-2"  style={{ backgroundColor: "orange", borderRadius: "20px"}}>Apply Now</button>
                        </div>
                    </div>
                </div>
            )}

            <button onClick={togglePopup2}>
                <div  style={{ height:"300px", width:"300px", borderRadius:"10px", borderColor: "gray", borderWidth: "1px" }}>
                    <div className="p-5">
                        <Image src="/google.jpeg" alt="logo" width={100} height={100}/>
                    </div>
                    <div className="p-3 ">
                        <p style={{ fontSize: "18px" }}><strong>Virtual Scheduler - Remote</strong></p>
                        <p style={{ fontSize: "16px" }}>New York, Google Inc.</p>
                    </div>
                    <div className="flex items-center justify-center rounded-full h-[50px] w-auto border border-gray-300 m-6">$40k - $48k per month</div>
                </div>
            </button>

            {showPopup2 && (
               <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
               <div className="bg-white p-8 w-[500px] h-auto rounded-md">
                   <div className='flex flex-row items-center justify-between mb-4'>
                    <Image src="/google.jpeg" alt="logo" width={60} height={60}/>
                    <button onClick={togglePopup2} className="mt-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                   <h2 className="text-xl font-bold mt-0 mb-4">Virtual Scheduler - Remote</h2>
                   <p className="mt-0 mb-2">New York, Google Inc.</p>
                   <h4 className='font-bold'>Description</h4>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam recusandae, fuga adipisci tenetur mollitia, quisquam numquam sit animi soluta quae quas nam fugiat, amet nemo? Tenetur veniam natus quasi reiciendis fugit nihil officia magni similique porro! Itaque, rerum saepe eveniet aspernatur quibusdam architecto facere perferendis, at, deleniti omnis ex recusandae.</p>
                   <div className='ml-[150px] mt-4 bg-orange' style={{width:"150px"}}>
                       <button className="flex items-center overflow-hidden justify-center w-full h-full p-2"  style={{ backgroundColor: "orange", borderRadius: "20px"}}>Apply Now</button>
                   </div>
               </div>
           </div>
            )}

            <button onClick={togglePopup3}>
                <div  style={{ height:"300px", width:"300px", borderRadius:"10px", borderColor: "gray", borderWidth: "1px" }}>
                    <div className="p-5">
                    <Image src="/fb.jpeg" alt="logo" width={60} height={60}/>
                    </div>
                    <div className="p-3 ">
                        <p style={{ fontSize: "18px" }}><strong>Patient Care Advocate</strong></p>
                        <p style={{ fontSize: "16px" }}>Washington, Resource inc. </p>
                    </div>
                    <div className="flex items-center justify-center rounded-full h-[50px] w-auto border border-gray-300 m-6">$55k - $60k per month</div>

                </div>
            </button>

            {showPopup3 && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
                <div className="bg-white p-8 w-[500px] h-auto rounded-md">
                <div className='flex flex-row items-center justify-between mb-4'>
                    <Image src="/fb.jpeg" alt="logo" width={60} height={60}/>
                    <button onClick={togglePopup3} className="mt-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                    
                    <h2 className="text-xl font-bold mt-0 mb-2">Patient Care Advocate</h2>
                    <p className="mt-0 mb-2">Washington, Resource inc.</p>
                    <h4 className='font-bold'>Description</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam recusandae, fuga adipisci tenetur mollitia, quisquam numquam sit animi soluta quae quas nam fugiat, amet nemo? Tenetur veniam natus quasi reiciendis fugit nihil officia magni similique porro! Itaque, rerum saepe eveniet aspernatur quibusdam architecto facere perferendis, at, deleniti omnis ex recusandae.</p>
                    <div className='ml-[150px] mt-4 bg-orange' style={{width:"150px"}}>
                        <button className="flex items-center overflow-hidden justify-center w-full h-full p-2"  style={{ backgroundColor: "orange", borderRadius: "20px"}}>Apply Now</button>
                    </div>
                </div>
            </div>
            )}
        </main>
    );
}
