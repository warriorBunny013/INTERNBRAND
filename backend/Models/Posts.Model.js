import mongoose from 'mongoose';
// const { Schema } = mongoose;

const DataSchema=new mongoose.Schema({
    id: Number,
    brand: String,
    company: String,
    position: String,
    department: String,
    duration: Number,
    experience: String,
    stipend: String,
    stipends: Number,
    location: String,
    category: String,
    type: String,
    timings: String,
    posted: Number,
    endsin: Number,
    openposition: Number,
    totalapplicant: Number,
    skills: [String],
    about: String,
    requirements: [String],
    responsibilities: [String],
    createdAt: {type: Date, default: Date.now}
    
})

export default mongoose.model("Datas",DataSchema);