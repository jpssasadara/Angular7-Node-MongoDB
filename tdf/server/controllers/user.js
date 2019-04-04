//login_user);
const User = require('../models/user');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

exports.register_user = (req, res, next) => {

    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        email: req.body.email,
        password: req.body.password
    });
    user
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                massage: 'Handling post request to /products',
                dataSubmited: result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });

}

exports.login_user = (req, res, next) => {

    let userData = req.body
    User.findOne({email: userData.email}, (err, user) => {
      if (err) {
        console.log(err)    
      } else {
        if (!user) {
          res.status(401).send('Invalid Email')
        } else 
        if ( user.password !== userData.password) {
          res.status(401).send('Invalid Password')
        } else {
          let payload = {subject: user._id}
          let token = jwt.sign(payload, 'secretKey')
          res.status(200).send({token})
        }
      }
    })
}



