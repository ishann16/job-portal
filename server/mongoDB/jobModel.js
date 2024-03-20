import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    logo: {
        type: String,// Assuming the logo will be a URL to an image
        default: 'https://st3.depositphotos.com/43745012/44906/i/450/depositphotos_449066958-stock-photo-financial-accounting-logo-financial-logo.jpg'
    },
    company: {
        type: String,
        required: true
    }
});

const Job = mongoose.model('Job', jobSchema);

export default Job;
