const express = require('express')
const {
    getEmployees,
    getEmployee,
    createEmployee,
    deleteEmployee,
    updateEmployee
} = require('../controllers/employeecontroller')
const router = express.Router()


//GET a all employee
router.get('/', getEmployees)

//GET a single employee
router.get('/:id', getEmployee)

//POST a new employee
router.post('/', createEmployee)

//DELETE an employee
router.delete('/:id', deleteEmployee)

//UPDATE an employee
router.put('/:id', updateEmployee)


module.exports = router