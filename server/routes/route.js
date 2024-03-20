import express from 'express';
import { createJob, deleteJob, updateJob, viewAllJobs, viewOneJob } from '../controllers/jobController.js';

const router = express.Router();

// Add Job
router.post("/admin/add", createJob)

//View All Job
router.get("/view-one/:id", viewOneJob)

//view all jobs
router.get("/view-all", viewAllJobs)

//Edit Job
router.put("/admin/update/:id", updateJob)

//Remove Job
router.delete("/admin/delete/:id", deleteJob)

export default router;
