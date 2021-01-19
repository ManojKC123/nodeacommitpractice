
const mongoose = require('mongoose');// third party


const Users = mongoose.model('Users', {
    firstname: {
        type : String
    },
    age:{
        type : String
    },
    email:{
        type: String,
        required: true,
        unique:true
    },
    number:{
        type: String
    }
})

module.exports = Users;