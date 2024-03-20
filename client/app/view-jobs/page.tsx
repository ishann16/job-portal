'use client'
import axios from "axios";
import JobBoard from "../components/JobBoard";
import  { useEffect, useState } from 'react';


export default function Home() {
    const [jobs, setJobs] = useState([]);

    useEffect(()=>{
        console.log("hello");
        getAlljobs();
    }, []);

    const getAlljobs = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/view-all');
            console.log(res.data.jobs);
            setJobs(res.data.jobs);
        } catch (error: any) {
            console.log("error while getting all jobs", error.message);
        }
    };

    return (
        <main>
            <div className="cards">
                {jobs.map((job) => (
                    <div key={job._id}>
                        <p onClick={handleClick(job._id)}>Title: {job.title}</p>
                        <p>Company: {job.company}</p>
                        <p>Location: {job.location}</p>
                        <p>Salary: {job.salary}</p>
                        <p>Description: {job.description}</p>
                    </div>
                ))}
            </div>
        </main>
    );
}
