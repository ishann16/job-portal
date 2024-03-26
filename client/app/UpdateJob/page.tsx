'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface JobData {
  _id: string;
  title: string;
  company: string;
  location: string;
  salary: number;
  description: string;
}

const UpdateJob: React.FC = () => {
  const [formData, setFormData] = useState<JobData>({
    _id: '',
    title: '',
    company: '',
    location: '',
    salary: 0,
    description: ''
  });

  useEffect(() => {
    const jobId = new URLSearchParams(window.location.search).get('jobId');
    if (jobId) {
      getJobDetails(jobId);
    }
  }, []);

  const getJobDetails = async (jobId: string) => {
    try {
      const response = await axios.get<JobData>(`https://job-portal-sage-nu.vercel.app/api/admin/get/${jobId}`);
      const jobData = response.data;
      setFormData(jobData);
    } catch (error) {
      console.error('Error fetching job details:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const updatedJob = await axios.put<JobData>(`https://job-portal-sage-nu.vercel.app/api/admin/update/${formData._id}`, formData);
      console.log('Job updated successfully:', updatedJob.data);
      // Perform any necessary actions after updating the job
    } catch (error) {
      console.error('Error updating job:', error);
    }
  };

  return (
    <div>
      <h2>Update Job</h2>
      <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="title" style={{ display: 'block' }}>Title</label>
                    <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} style={{ borderColor: "black", borderWidth: "1px" }} className="w-[500px] h-full p-4" />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="company" style={{ display: 'block' }}>Company:</label>
                    <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} style={{ borderColor: "black", borderWidth: "1px" }} className="w-[500px] h-full p-4" />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="location" style={{ display: 'block' }}>Location:</label>
                    <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} style={{ borderColor: "black", borderWidth: "1px" }} className="w-[500px] h-full p-4" />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="salary" style={{ display: 'block' }}>Salary:</label>
                    <input type="number" id="salary" name="salary" value={formData.salary} onChange={handleChange} style={{ borderColor: "black", borderWidth: "1px" }} className="w-[500px] h-full p-4" />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="description" style={{ display: 'block' }}>Description:</label>
                    <textarea id="description" name="description" value={formData.description} onChange={handleChange} style={{ borderColor: "black", borderWidth: "1px" }} className="w-[500px] h-full p-4" />
                </div>
                <button style={{ marginLeft: "220px", borderColor: "black", borderWidth: "1px", borderRadius: "20px" }} type="submit"><p className='p-2'>Submit</p></button>
            </form>
    </div>
  );
};

export default UpdateJob;
