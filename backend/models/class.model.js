import mongoose from "mongoose";

const ClassSchema = new mongoose.Schema({
    title: { type: String, required: true },
    date: { type: Date, required: true },
    location: { type: String, required: true },
});

//module.exports = mongoose.model('Class', ClassSchema);
export const Class = mongoose.model("Class", ClassSchema)
