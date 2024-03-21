'use client';
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from 'react';

const itemsPerPage = 9;

interface Job {
    _id: string;
    title: string;
    company: string;
    location: string;
    salary: number;
    description: string;
}

export default function Home() {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate the index range for the current page
    const indexOfLastJob = currentPage * itemsPerPage;
    const indexOfFirstJob = indexOfLastJob - itemsPerPage;

    // Reverse the jobs array to ensure new jobs appear first
    const reversedJobs = [...jobs].reverse();

    const currentJobs = reversedJobs.slice(indexOfFirstJob, indexOfLastJob);

    // Change page
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    useEffect(() => {
        console.log("hello");
        getAllJobs();
    }, []);

    const getAllJobs = async () => {
        try {
            const res = await axios.get<{ jobs: Job[] }>('http://localhost:5000/api/view-all');
            console.log(res.data.jobs);
            setJobs(res.data.jobs);
        } catch (error: any) {
            console.log("error while getting all jobs", error.message);
        }
    };

    return (
        <main>
            <h1 className="flex flex-wrap justify-center p-5 text-2xl font-bold mb-4">View Jobs</h1>
            <div className="flex flex-wrap justify-center">
                {currentJobs.map((job, index) => (
                    <div key={job._id} style={{ borderRadius: "10px", borderColor: "gray", borderWidth: "1px" }} className="w-80 max-w-xs mx-4 my-4">
                        <div className="p-5">
                            <p className="font-bold m-2 mb-2">Title: {job.title}</p>
                            <p className="m-2">Company: {job.company}</p>
                            <p className="m-2">Location: {job.location}</p>
                            <p className="m-2">Salary: {job.salary}</p>
                            <p className="m-2">Description: {job.description}</p>
                        </div>
                        <div className="flex flex-col items-center justify-center mb-4 mt-4">
                        <Link href="/UpdateJob">
                            <button className="flex items-center overflow-hidden justify-center w-full h-full p-3"  style={{ backgroundColor: "orange", borderRadius: "20px"}}>
                                Update
                            </button></Link>
                            <Link href="/delete-job"><button className="flex items-center overflow-hidden  justify-center w-600 h-full mt-4 p-3"  style={{ backgroundColor: "orange", borderRadius: "20px"}}>
                                Delete
                            </button></Link>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-4">
                {Array.from({ length: Math.ceil(jobs.length / itemsPerPage) }, (_, index) => (
                    <button key={index} onClick={() => paginate(index + 1)} className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">{index + 1}</button>
                ))}
            </div>
        </main>
    );
}
