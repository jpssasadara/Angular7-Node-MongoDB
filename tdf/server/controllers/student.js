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



exports.students_get_all = (req, res1, next) => {
    /*res.status(200).json({
        massage:'Handling GET request to /products'
    });*/
    Student.find()
        .select('name email phone topic timePreference subscribe') // <<== Selecting fields
        .exec()
        .then(docs => {
            console.log(docs);
            const response = {
                students: docs.map(doc => {
                    return {
                        //students: docs
                        name: doc.name,
                        email: doc.email,
                        phone: doc.phone,
                        topic: doc.topic,
                        timePreference: doc.timePreference,
                        subscribe: doc.subscribe
                    };
                })
            }
            res1.status(200).json(response.students);
        }
        )
        .catch(err => {
            res1.status(500).json({
                error: err
            });
        });
}

