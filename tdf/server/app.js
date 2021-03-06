const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const studentRoutes = require('./routes/student');
const eventRoutes = require('./routes/event');
const specialRoutes = require('./routes/special');
const userRoutes = require('./routes/user');
mongoose.connect('mongodb://sasadara:' + process.env.MONGO_ATLAS_PW + '@cluster0-shard-00-00-itawz.mongodb.net:27017,cluster0-shard-00-01-itawz.mongodb.net:27017,cluster0-shard-00-02-itawz.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true'
/*{
  useMongoClient:true
}*/
);

/*app.use((req,res,next)=>{
    res.status(200).json({
        message: 'It works !'
    });
});*/

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Handling CORS error
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods','PUT,POST,PATCH,DELETE')
        return res.status(200).json({});
    }
    next();
});

//Routes which should handle requests
app.use('/enroll',studentRoutes);

//Routes which should handle requests
app.use('/event',eventRoutes);

//Routes which should handle requests
app.use('/specialevent',specialRoutes);

//Routes which should handle requests
app.use('/user',userRoutes);



// for handling invalied URLs------------>>FROM

app.use((req,res,next)=>{
    const error = new Error('Not found OOOH');
    error.status = 404;
    next(error);
})
app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error: {
            message:error.message
        }
    });
});
//------------------------------------------ TO

module.exports = app; 