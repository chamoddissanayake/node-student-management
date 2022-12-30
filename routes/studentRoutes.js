const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.post('/students', studentController.createStudent);
router.get('/students/:studentId', studentController.getStudent);
router.get('/students', studentController.getAllStudents);
router.put('/students/:studentId', studentController.updateStudent);
router.delete('/students/:studentId', studentController.deleteStudent);

module.exports = router;
