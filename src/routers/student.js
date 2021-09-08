const express = require('express')
const Student = require('../models/student')

const router = express.Router()
// create a new student
router.post('/student', async (req, res) => {
    const student = new Student(req.body)
    await student.save()
    res.send(student)
})

// read students
router.get('/student', async (req, res) => {
    const Class = req.query.class
    const section = req.query.section
    if(Class && section) {  
        const students = await Student.find({class: Class, section: section})
        res.send(students)
    } else if(Class) {
        const students = await Student.find({class: Class})
        res.send(students)
    } else if(section) {
        const students = await Student.find({section: section})
        res.send(students)
    } else {
        const students = await Student.find({})
        res.send(students)
    }
})

// UPDATE STUDENT
router.patch('/student/:id', async (req, res) => {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    res.send(student)
})

// delete student

router.delete('/student/:id', async (req, res) => {
    const student = await Student.findByIdAndDelete(req.params.id)
    res.send(student)
})

module.exports = router