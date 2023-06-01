import mongoose from 'mongoose';

// Payload esperado do método post
const CourseSchema = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  category: { type: String },
  price: { type: Number },
});

export const Course = mongoose.model('Course', CourseSchema);