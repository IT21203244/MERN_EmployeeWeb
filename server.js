const express = require('express')
require('dotenv').config()

const mongoose = require('mongoose')

const employeeRoutes = require('./routes/employee')
const employeeattendRoutes = require('./routes/employeeattend')
const employeesalaryRoutes = require('./routes/employeesalary')
const empuserRoutes = require('./routes/empuser')



//express app
const app = express()

//middleware
app.use(express.json())

app.use((req,res, next) =>{
    console.log(req.path, req.method)
    next()
})


//routes
app.use('/api/employee', employeeRoutes)
app.use('/api/employeeattend', employeeattendRoutes)
app.use('/api/employeesalary', employeesalaryRoutes)
app.use('/api/empuser', empuserRoutes)



//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listening for requests
        app.listen(process.env.PORT, ()=> {
            console.log('connected to db & listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })


