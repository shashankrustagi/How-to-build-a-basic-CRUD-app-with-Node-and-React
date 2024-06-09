// backend/controllers/student.controller.js
const Student = require("../models/Student");

// CREATE Student
async function createStudent(data) {
    try {
        const newStudent = await Student.create(data);
        return newStudent;
    } catch (error) {
        throw error;
    }
}

// READ Students
async function getStudents() {
    try {
        const students = await Student.find();
        return students;
    } catch (error) {
        throw error;
    }
}

// UPDATE student
async function updateStudent(id, newData) {
    try {
        const updatedStudent = await Student.findByIdAndUpdate(id, newData, { new: true });
        return updatedStudent;
    } catch (error) {
        throw error;
    }
}

// Delete Student
async function deleteStudent(id) {
    try {
        const deletedStudent = await Student.findByIdAndDelete(id);
        return deletedStudent;
    } catch (error) {
        throw error;
    }
}

module.exports = { createStudent, getStudents, updateStudent, deleteStudent };
