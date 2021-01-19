const mongoose = require('mongoose');// third party
const express = require('express');// third party
const bodyParser = require('body-parser');// core modules

const db = require('./database/db');
const user_route = require('./routes/user_route');


const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(user_route);







const Student = mongoose.model('Student',{
    sname:{
        type: String
    },
    semail:{
        type: String
    },
    batch:{
        type: String
    }
})






app.post('/student/insert',function(req,res){
    const sanme = req.body.sanme;
    const semail = req.body.semail;
    const batch = req.body.batch;
    const data2 = new Student({
        sname:sanme,
        semail:semail,
        batch:batch
    });
    data2.save();
    res.send('one student inserted!!!');
})




app.get('/student/fetch',function(req,res){
    Student.find().then(function(studentdata){
        res.send(studentdata);
    })
})



app.listen(90);




