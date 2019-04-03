const express = require('express');
const router = express.Router();
const EventController = require('../controllers/event');


router.get('/', EventController.students_get_all_special);


module.exports=router;