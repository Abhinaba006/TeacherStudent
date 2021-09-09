const mongoose = require('mongoose')

const Teacher = mongoose.model('Teaher', {
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        unique: true,
        required: true
    },
    subject:{
        type: String,
        required: true
    },
})

module.exports = Teacher