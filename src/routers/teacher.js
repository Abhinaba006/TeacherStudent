const express = require('express')
const Teacher = require('../models/teacher')
const { model } = require('mongoose')
const Student = require('../models/student')

const router = express.Router()


// create a new teacher
router.post('/teacher', async(req, res) => {
    const teacher = new Teacher(req.body)
    await teacher.save()
    res.send(teacher)
})
// read all teachers
router.get('/teacher', async(req, res) => {
    const subject = req.query.subject

    if(subject){
        const teacher = await Teacher.find({subject})
        res.send(teacher)
    }
    else{
        const teacher = await Teacher.find()
        res.send(teacher)
    }
})

router.get('/teacher/:id/student', async(req, res) => {
    const student = await Student.find({"assignedTeacher":req.params.id})
    res.send(student)
})

// delete a teacher
router.delete('/teacher/:id', async(req, res) => {
    const { id } = req.params
    const teacher = await Teacher.findByIdAndDelete(id)
    res.send(teacher)
})



module.exports = router