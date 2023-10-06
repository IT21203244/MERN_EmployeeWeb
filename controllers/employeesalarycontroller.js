const EmployeeSalary = require('../models/employeeSalary.model')
const mongoose = require('mongoose')

//get all employees
const getEmployeesalaries = async(req, res) => {
    const employeesalaries = await EmployeeSalary.find({}).sort({createdAt: -1})

    res.status(200).json(employeesalaries)
}


//get single employee
const getEmployeesalary = async (req, res) => {
    const  { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return
    }

    const employeesalary = await EmployeeSalary.findById(id)

    if(!employeesalary){
        return res.status(404).json({error: 'No Such Employee Salary'})
    }

    res.status(200).json(employeesalary)
}

//create new employee
const createEmployeesalary = async (req, res) => {
    const {name, employeeid, role, basicsalary, dailywage, allowances, salaryallowances, staffloan, epf, etf, netsalary} = req. body

    try {
        const employeesalary = await EmployeeSalary.create({name, employeeid, role, basicsalary, dailywage, allowances, salaryallowances, staffloan, epf, etf, netsalary})
        res.status(200).json(employeesalary)

    }catch (error){
        res.status(400).json({error: error.message})

    }
}


//delete a employee
const deleteEmployeesalary =  async (req, res) =>{
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No Such Employee salary'})
    }

    const employeesalary = await EmployeeSalary.findOneAndDelete({_id: id})

    if(!employeesalary){
        return res.status(400).json({error: 'No Such Employee salary'})
    }

    res.status(200).json(employeesalary)

}

//update a employee
const updateEmployeesalary = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No Such Employee salary'})
    }

    const employeesalary = await EmployeeSalary.findOneAndUpdate({_id: id},{
        ...req.body
    })

    if(!employeesalary){
        return res.status(400).json({error: 'No such Employee salary'})
    }

    res.status(200).json(employeesalary)

}




module.exports = {
    getEmployeesalaries,
    getEmployeesalary,
    createEmployeesalary,
    deleteEmployeesalary,
    updateEmployeesalary
}