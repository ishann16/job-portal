'use client';
import React, { useEffect, useState } from 'react';
import axios from "axios";
import Link from 'next/link';

const itemsPerPage = 9;

interface Job {
    _id: string;
    title: string;
    company: string;
    location: string;
    salary: number;
    description: string;
}



const Home: React.FC = () => {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [showDeletePopup, setShowDeletePopup] = useState(false); // State for delete pop-up

    const indexOfLastJob = currentPage * itemsPerPage;
    const indexOfFirstJob = indexOfLastJob - itemsPerPage;

    const reversedJobs = [...jobs].reverse();
    const currentJobs = reversedJobs.slice(indexOfFirstJob, indexOfLastJob);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
    useEffect(() => {
        getAllJobs();
    }, []);

    const getAllJobs = async () => {
        try {
            const res = await axios.get<{ jobs: Job[] }>('https://job-portal-sage-nu.vercel.app/api/view-all');
            setJobs(res.data.jobs);
        } catch (error: any) {
            console.log("error while getting all jobs", error.message);
        }
    };

    const removeJob = async (id: string) => {
        try {
            await axios.delete(`https://job-portal-sage-nu.vercel.app/api/admin/delete/${id}`);
            setJobs(prevJobs => prevJobs.filter(job => job._id !== id)); 
            setShowDeletePopup(true); 
            setTimeout(() => setShowDeletePopup(false), 0); 
            alert("Job Deleted");
        } catch (error: any) {
            console.log("error while deleting job", error.message);
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
                            <button className="flex items-center overflow-hidden justify-center w-600 h-full mt-4 p-3" style={{ backgroundColor: "orange", borderRadius: "20px"}}>
                                Update</button>
                        </Link>
                            <button onClick={() => removeJob(job._id)} className="flex items-center overflow-hidden  justify-center w-600 h-full mt-4 p-3"  style={{ backgroundColor: "orange", borderRadius: "20px"}}>
                                Delete
                            </button>
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
export default Home;
