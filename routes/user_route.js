const express = require('express');
const Users = require('../models/user_model');
const router = express.Router();
const {check, validationResult}  = require('express-validator');
const bcryptjs = require('bcryptjs');



//mpm i express-validator --save
//npm i bcryptjs --save
router.post('/insert',[
    check('email',"Email is required!").not().isEmpty()
],function(req,res){
    const errors = validationResult(req);
    if(errors.isEmpty()){
        const Name = req.body.name;
        const Age = req.body.age;
        const Email = req.body.email;
        const Number = req.body.number;
        //encryption
        bcryptjs.hash(Email,10,function(err,hash){
            console.log(hash)
        })


        const data = new Users({
            firstname: Name, 
            age: Age,
            email: Email,
            number: Number
         });
        data.save();
        res.send("insert");

    }
    else{
            res.send(errors.array())
    }



})

router.get('/users/fetch',function(req,res){
    Users.find().then(function(userdata){
        res.send(userdata);
    })
})

router.delete('/users/delete/:id',function(req,res){
    const id = req.params.id;
    Users.deleteOne({_id : id}).then(function(){
        res.send("deleted!!!");
    })
})

router.put('/users/update/:id',function(req,res){
    const id = req.params.id;
    const age = req.body.address;
    const email = req.body.email;
    Users.updateOne({_id:id},
        {age:age},
        {email:email}).then(function(){
            res.send("updated!!!");
        })
})


module.exports = router;