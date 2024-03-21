'use client';
import React, { useState, useEffect } from 'react';

// Interface for Job data (adapt as needed for your specific job structure)
interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: number;
  description: string;
  
}


const fetchJobs = async (): Promise<Job[]> => {
  const response = await fetch('https://your-api-endpoint.com/jobs');
  const data = await response.json();
  return data as Job[];
};

const Board: React.FC = () => {
  // State for jobs array and loading state
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch jobs on component mount
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const fetchedJobs = await fetchJobs();
        setJobs(fetchedJobs);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [jobIdToDelete, setJobIdToDelete] = useState(0);

  const handleDeleteJob = (id: number) => {
    
    if (window.confirm('Are you sure you want to delete this job?')) {
      setShowConfirmDelete(true);
      setJobIdToDelete(id);
    }
  };

  const handleConfirmDelete = () => {
    
    console.log(`Deleting job with ID: ${jobIdToDelete}`);
    setJobs(jobs.filter((job) => job.id !== jobIdToDelete));
    setShowConfirmDelete(false);
  };

  const handleCancelDelete = () => {
    setShowConfirmDelete(false);
  };

  return (
    <div className="board">
      {isLoading ? (
        <div>Loading jobs...</div>
      ) : (
        jobs.map((job) => (
          <div key={job.id} className="job-card">
            <h2>{job.title}</h2>
            <p>{job.description}</p>
            {/* ... other job details */}
            <button onClick={() => handleDeleteJob(job.id)}>Delete</button>
          </div>
        ))
      )}

      {/* Confirmation dialog (optional) */}
      {showConfirmDelete && (
        <div className="confirm-delete-dialog">
          <h1>Delete Job</h1>
          <p>Are you sure you want to delete this job?</p>
          <button onClick={handleConfirmDelete}>Confirm</button>
          <button onClick={handleCancelDelete}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default Board;
