'use client';
import { useEffect, useState } from 'react';
import { getJobById, updateJob } from '../../../server/controllers/jobController';
import { Document } from 'mongoose';
import React from 'react';

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
      navigateToUpdateJob(jobId);
    }
  }, []);

  const navigateToUpdateJob = async (jobId: string) => {
    try {
      const jobDocument: Document<any, any> = await getJobById(jobId);
      const jobData: any = jobDocument.toObject();
      const formData: JobData = {
        _id: jobData._id,
        title: jobData.title,
        company: jobData.company,
        location: jobData.location,
        salary: jobData.salary,
        description: jobData.description
      };
      setFormData(formData);
    } catch (error) {
      console.error('Error fetching job data:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formDataForUpdate: Partial<JobData> = {
        title: formData.title,
        company: formData.company,
        location: formData.location,
        salary: formData.salary,
        description: formData.description
      };
      if (!formDataForUpdate.title || !formDataForUpdate.company || !formDataForUpdate.location || !formDataForUpdate.salary || !formDataForUpdate.description) {
        throw new Error('All fields are required');
      }
      const updatedJob = await updateJob(formData._id, formDataForUpdate);
      console.log('Job updated successfully:', updatedJob);
      // Redirect to the job details page or perform other actions
    } catch (error) {
      console.error('Error updating job:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mr-3 p-8 gap-2">
      <h1>{formData._id ? 'Update Job' : 'Add New Job'}</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="title" style={{ display: 'block' }}>Title:</label>
          <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="company" style={{ display: 'block' }}>Company:</label>
          <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="location" style={{ display: 'block' }}>Location:</label>
          <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="salary" style={{ display: 'block' }}>Salary:</label>
          <input type="number" id="salary" name="salary" value={formData.salary} onChange={handleChange} />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="description" style={{ display: 'block' }}>Description:</label>
          <textarea id="description" name="description" value={formData.description} onChange={handleChange} />
        </div>
        <button type="submit">{formData._id ? 'Update' : 'Submit'}</button>
      </form>
    </div>
  );
};

export default UpdateJob;
