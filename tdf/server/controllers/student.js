const Student = require('../models/student');
const mongoose = require('mongoose');

exports.create_student = (req, res, next) => {
    
   

    const student = new Student({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        topic: req.body.topic,
        timePreference: req.body.timePreference,
        subscribe: req.body.subscribe
    });
    student
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                massage: 'Handling post request to /products',
                createdproduct: result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });

}