const express = require('express');
const router = express.Router();
const StudentController = require('../controllers/student');

router.post('/' , StudentController.create_student);
router.get('/', StudentController.students_get_all);


module.exports=router;