const express = require('express')
const {
    getEmployeesalaries,
    getEmployeesalary,
    createEmployeesalary,
    deleteEmployeesalary,
    updateEmployeesalary
} = require('../controllers/employeesalarycontroller')
const router = express.Router()


//GET a all employee
router.get('/', getEmployeesalaries)

//GET a single employee
router.get('/:id', getEmployeesalary)

//POST a new employee
router.post('/', createEmployeesalary)

//DELETE an employee
router.delete('/:id', deleteEmployeesalary)

//UPDATE an employee
router.patch('/:id', updateEmployeesalary)


module.exports = router