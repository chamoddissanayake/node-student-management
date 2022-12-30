const Student = require('../models/student');

let studentCounter = 1;

const createStudent = async (studentData) => {
    const lastStudent = await Student.findOne().sort({ studentId: -1 }); 
    const newStudentId = lastStudent ? lastStudent.studentId + 1 : 1;
    
    const student = new Student({ ...studentData, studentId: newStudentId });
    return await student.save();
  };

const getStudentById = async (studentId) => {
  return await Student.findOne({ studentId });
};

const getAllStudents = async () => {
  return await Student.find();
};

const updateStudent = async (studentId, updateData) => {
  return await Student.findOneAndUpdate({ studentId }, updateData, { new: true });
};

const deleteStudent = async (studentId) => {
  return await Student.findOneAndDelete({ studentId });
};

module.exports = {
  createStudent,
  getStudentById,
  getAllStudents,
  updateStudent,
  deleteStudent,
};
