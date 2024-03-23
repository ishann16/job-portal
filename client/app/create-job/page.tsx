'use client'
import React, { useState } from 'react';
import axios from 'axios';

const defaultJob = {
    title: '',
    company: '',
    location: '',
    salary: 0,
    description: ''
};

const Form = () => {
    const [jobData, setJobData] = useState(defaultJob);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setJobData({ ...jobData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted", jobData);

        try {
            const res = await axios.post('https://job-portal-sage-nu.vercel.app/api/admin/add', jobData); // Adjust the API endpoint according to your backend setup
            console.log("API response:", res.data); // Assuming the response contains data
            setJobData(defaultJob);
            alert("Job Details Added");
        } catch (error) {
            console.error("Error:", error);
        }
        // Here you can do something with the form data, such as sending it to a server
    };

    return (
        <div className="flex flex-col items-center justify-center mr-3 p-8 gap-2">
            <h1>Add New Job</h1>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="title" style={{ display: 'block' }}>Title</label>
                    <input type="text" id="title" name="title" value={jobData.title} onChange={handleChange} style={{ borderColor: "black", borderWidth: "1px" }} className="w-[500px] h-full p-4" />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="company" style={{ display: 'block' }}>Company:</label>
                    <input type="text" id="company" name="company" value={jobData.company} onChange={handleChange} style={{ borderColor: "black", borderWidth: "1px" }} className="w-[500px] h-full p-4" />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="location" style={{ display: 'block' }}>Location:</label>
                    <input type="text" id="location" name="location" value={jobData.location} onChange={handleChange} style={{ borderColor: "black", borderWidth: "1px" }} className="w-[500px] h-full p-4" />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="salary" style={{ display: 'block' }}>Salary:</label>
                    <input type="number" id="salary" name="salary" value={jobData.salary} onChange={handleChange} style={{ borderColor: "black", borderWidth: "1px" }} className="w-[500px] h-full p-4" />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="description" style={{ display: 'block' }}>Description:</label>
                    <textarea id="description" name="description" value={jobData.description} onChange={handleChange} style={{ borderColor: "black", borderWidth: "1px" }} className="w-[500px] h-full p-4" />
                </div>
                <button style={{ marginLeft: "220px", borderColor: "black", borderWidth: "1px", borderRadius: "20px" }} type="submit"><p className='p-2'>Submit</p></button>
            </form>
        </div>
    );
};

export default Form;