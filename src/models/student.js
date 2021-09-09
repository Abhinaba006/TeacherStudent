const mongoose = require('mongoose')

const Students = mongoose.model('Students', {
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        unique: true,
    },
    class:{
        type:Number,
        required: true,
        validate(value){
            if(value<8 || value>9){
                throw new Error('Class should be 8 or 9')
            }
        }
    },
    section:{
        type:String,
        required: true,
        trim: true,
        validate(value){
            if(value!=='A' && value!=='B' && value!=='C'){
                throw new Error('Section should be A, B or C')
            }
        }
    },
    assignedTeacher:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"teacher",
        required: true
    }
})

module.exports = Students