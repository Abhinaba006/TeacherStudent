const express = require('express')
const bodyParser = require('body-parser')

require('./db/mongoose')
const Teacher = require('./models/teacher')
const Student = require('./models/student')

const teacherRouter = require('./routers/teacher')
const studentRouter = require('./routers/student')

const app = express()

app.use(bodyParser.json())

app.use(express.json())

// console.log(teacherRouter)

app.use(teacherRouter)
app.use(studentRouter)

module.exports = app
