// backend/routes/student.route.js
const express = require('express');
const router = express.Router();
const { createStudent, getStudents, updateStudent, deleteStudent } = require('../controllers/studentController');


// CREATE Student
router.post('/create-student', async (req, res, next) => {
    try {
        const newStudent = await createStudent(req.body);
        res.status(201).json({ message: 'Student created successfully', student: newStudent });
    } catch (error) {
        next(error);
    }
});

// READ Students
router.get('/', async (req, res, next) => {
    try {
        const students = await getStudents();
        res.json(students);
    } catch (error) {
        next(error);
    }
});

// UPDATE student
router.put('/update-student/:id', async (req, res, next) => {
    try {
        const updatedStudent = await updateStudent(req.params.id, req.body);
        res.json(updatedStudent);
    } catch (error) {
        next(error);
    }
});

// DELETE Student
router.delete('/delete-student/:id', async (req, res, next) => {
    try {
        const deletedStudent = await deleteStudent(req.params.id);
        res.status(200).json({ msg: 'Student deleted', deletedStudent });
    } catch (error) {
        next(error);
    }
});

module.exports = router;
