'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


interface Job {
    _id: string;
    title: string;
    company: string;
    location: string;
    salary: number;
    description: string;
}

interface FormProps {
    jobId?: string;
}

interface JobData {
    title: string;
    company: string;
    location: string;
    salary: number;
    description: string;
}

const defaultJob: JobData = {
    title: '',
    company: '',
    location: '',
    salary: 0,
    description: ''
};

const Form: React.FC<FormProps> = ({ jobId }) => {
    const [jobData, setJobData] = useState<JobData>(defaultJob);

    useEffect(() => {
        if (jobId) {
            // Fetch existing job details if jobId is provided
            axios.get(`/api/admin/${jobId}`)
                .then(res => {
                    setJobData(res.data);
                })
                .catch(error => {
                    console.error('Error fetching job details:', error);
                });
        }
    }, [jobId]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setJobData({ ...jobData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            let res;
            if (jobId) {
                // Perform update request
                res = await axios.put(`/api/admin/update/${jobId}`, jobData);
                console.log('Update successful:', res.data);
                alert("Job updated successfully!");
            } else {
                // Perform create request
                res = await axios.post('/api/admin/add', jobData);
                console.log('Creation successful:', res.data);
                alert("Job details added successfully!");
            }
            setJobData(defaultJob);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center mr-3 p-8 gap-2">
            <h1>{jobId ? 'Update Job' : 'Add New Job'}</h1>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="title" style={{ display: 'block' }}>Title</label>
                    <input type="text" id="title" name="title" value={jobData.title} onChange={handleChange} />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="company" style={{ display: 'block' }}>Company:</label>
                    <input type="text" id="company" name="company" value={jobData.company} onChange={handleChange} />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="location" style={{ display: 'block' }}>Location:</label>
                    <input type="text" id="location" name="location" value={jobData.location} onChange={handleChange} />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="salary" style={{ display: 'block' }}>Salary:</label>
                    <input type="number" id="salary" name="salary" value={jobData.salary} onChange={handleChange} />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="description" style={{ display: 'block' }}>Description:</label>
                    <textarea id="description" name="description" value={jobData.description} onChange={handleChange} />
                </div>
                <button type="submit">{jobId ? 'Update' : 'Submit'}</button>
            </form>
        </div>
    );
};

export default Form;
