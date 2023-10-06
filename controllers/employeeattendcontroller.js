const Employeeattend = require('../models/employeeattend.model')
const mongoose = require('mongoose')

//get all employees attendance
const getEmployeeattends = async(req, res) => {
    const employeeattends = await Employeeattend.find({}).sort({createdAt: -1})

    res.status(200).json(employeeattends)
}


//get single employee attendace
const getEmployeeattend = async (req, res) => {
    const  { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No Such Employee Attendance'})
    }

    const employeeattend = await Employeeattend.findById(id)

    if(!employeeattend){
        return res.status(404).json({error: 'No Such Employee Attendance'})
    }

    res.status(200).json(employeeattend)
}


//create new employee attendance
const createEmployeeattend = async (req, res) => {
    const {employeeid, month, date, timein, timeout, } = req. body

    try {
        const employeeattend = await Employeeattend.create({employeeid, month, date, timein, timeout})
        res.status(200).json(employeeattend)

    }catch (error){
        res.status(400).json({error: error.message})

    }
}


//delete a employee
const deleteEmployeeattend =  async (req, res) =>{
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No Such Employee'})
    }

    const employeeattend = await Employeeattend.findOneAndDelete({_id: id})

    if(!employeeattend){
        return res.status(400).json({error: 'No Such Employee'})
    }

    res.status(200).json(employeeattend)

}

//update a employee
const updateEmployeeattend = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No Such Employee'})
    }

    const employeeattend = await Employeeattend.findOneAndUpdate({_id: id},{
        ...req.body
    })

    if(!employeeattend){
        return res.status(400).json({error: 'No such Employee'})
    }

    res.status(200).json(employeeattend)

}


module.exports = {
    getEmployeeattends,
    getEmployeeattend,
    createEmployeeattend,
    deleteEmployeeattend,
    updateEmployeeattend
}
