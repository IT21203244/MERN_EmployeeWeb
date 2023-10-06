const Employee = require('../models/employee.model')
const mongoose = require('mongoose')

//get all employees
const getEmployees = async(req, res) => {
    const employees = await Employee.find({}).sort({createdAt: -1})

    res.status(200).json(employees)
}


//get single employee
const getEmployee = async (req, res) => {
    const  { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No Such Employee'})
    }

    const employee = await Employee.findById(id)

    if(!employee){
        return res.status(404).json({error: 'No Such Employee'})
    }

    res.status(200).json(employee)
}


//create new employee
const createEmployee = async (req, res) => {
    const {epimage, name, employeeid, role, password, nic, address, email, phonenumber, birthdate, hiredate} = req. body
    
    let emptyfields = []

    if(!epimage) {
        emptyfields.push('epimage')
    }
    if(!name) {
        emptyfields.push('name')
    }
    if(!employeeid) {
        emptyfields.push('employeeid')
    }
    if(!role) {
        emptyfields.push('role')
    }
    if(!password) {
        emptyfields.push('password')
    }
    if(!nic) {
        emptyfields.push('nic')
    }
    if(!address) {
        emptyfields.push('address')
    }
    if(!email) {
        emptyfields.push('email')
    }
    if(!phonenumber) {
        emptyfields.push('phonenumber')
    }
    if(!birthdate) {
        emptyfields.push('birthdate')
    }
    if(!hiredate) {
        emptyfields.push('hiredate')
    }
    if(emptyfields.lenght > 0){
        return res.status(400).json({error: 'Please Fill In All The Fields', emptyfields})
    }



    //add doc to db
    try {
        const employee = await Employee.create({epimage, name, employeeid, role, password, nic, address, email, phonenumber, birthdate, hiredate})
        res.status(200).json(employee)

    }catch (error){
        res.status(400).json({error: error.message})

    }
}


//delete a employee
const deleteEmployee =  async (req, res) =>{
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No Such Employee'})
    }

    const employee = await Employee.findOneAndDelete({_id: id})

    if(!employee){
        return res.status(400).json({error: 'No Such Employee'})
    }

    res.status(200).json(employee)

}

//update a employee
const updateEmployee = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No Such Employee'})
    }

    const employee = await Employee.findOneAndUpdate({_id: id},{
        ...req.body
    })

    if(!employee){
        return res.status(400).json({error: 'No such Employee'})
    }

    res.status(200).json(employee)

}





module.exports = {
    getEmployees,
    getEmployee,
    createEmployee,
    deleteEmployee,
    updateEmployee
}