import Job from "../mongoDB/jobModel.js";

export const createJob = async(req, res) =>{
    const {title, description, location, salary, company} = req.body;

    try {
        const newJob = await Job.create({title, description, location, salary, company});

        res.status(201).json({message: "New job created successfully", newJob});
    } catch (error) {
        console.error("Error creating job:", error);
		res.status(500).json({ message: "Error occurred while creating job!", error });
    }
}

export const viewOneJob = async(req, res) =>{
    const {id} = req.params;
    try {
        const job = await Job.findById(id);

        if(!job){
            return res.status(200).json({ message: "Job not found in DB!" });
        }
        res.status(201).json({ message: "Job retrieved successfully", job });
    } catch (error) {
        console.error("Error occured:", error);
        res.status(500).json({ message: "Error occurred while getting job!", error });
    }
}

export const viewAllJobs = async(req, res) =>{
    try {
        const jobs = await Job.find();

        if (jobs.length === 0) {
			return res.status(200).json({ message: "There are no jobs in DB!" });
		}
        res.status(201).json({ message: "Jobs retrieved successfully", jobs });
    } catch (error) {
        console.error("Error occured:", error);
        res.status(500).json({ message: "Error occurred while getting job!", error });
    }
}
// Function to fetch a single job by its ID
export async function getJobById(jobId) {
    try {
      const response = await fetch(`/api/jobs/${jobId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch job data');
      }
      const jobData = await response.json();
      return jobData;
    } catch (error) {
      console.error('Error fetching job data:', error);
      throw error;
    }
  }
  
  // Function to update a job
  export async function updateJob(jobId, newData) {
    try {
      const response = await fetch(`/api/jobs/${jobId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData),
      });
      if (!response.ok) {
        throw new Error('Failed to update job');
      }
      const updatedJob = await response.json();
      return updatedJob;
    } catch (error) {
      console.error('Error updating job:', error);
      throw error;
    }
  }
  


export const deleteJob = async(req, res) =>{
    const {id} = req.params;
    try {
        const result = await Job.deleteOne({ _id: id });
		if (result.deletedCount > 0) {
			res.status(201).json({ message: "Job deleted successfully" });
		} else {
			res.status(201).json({ message: "Job not found or not deleted!" });
		}
    } catch (error) {
        console.error("Error while deleting job:", error);
		res.status(500).json({ message: "Error occurred while deleting job!", error });
    }
}