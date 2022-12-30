const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  studentId: { type: Number, unique: true },
  name: { type: String, required: true },
  age: { type: Number, required: true },
  grade: { type: Number, required: true },
});

module.exports = mongoose.model('Student', studentSchema);
