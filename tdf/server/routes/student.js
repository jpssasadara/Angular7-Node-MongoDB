const express = require('express');
const router = express.Router();
const StudentController = require('../controllers/student');

router.post('/' , StudentController.create_student);


module.exports=router;