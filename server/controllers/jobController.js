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

export const updateJob = async(req, res) =>{
    const {id} = req.params;
    const updatedJob = req.body;

    try {
        const result = await Job.updateOne({ _id: id }, updatedJob);

        if (result.modifiedCount > 0) {
			const newJob = await Job.findById(id);
			res.status(201).json({ message: "Job updated successfully", newJob });
		} else {
			res.status(201).json({ message: "Job not found or not updated!" });
		}
    } catch (error) {
        console.error("Error updating job:", error);
		res.status(500).json({ message: "Error occurred while creating job!", error });
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