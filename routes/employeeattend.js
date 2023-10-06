const express = require('express')
const {
    getEmployeeattends,
    getEmployeeattend,
    createEmployeeattend,
    deleteEmployeeattend,
    updateEmployeeattend
} = require('../controllers/employeeattendcontroller')
const router = express.Router()


//GET a all employee
router.get('/', getEmployeeattends)

//GET a single employee
router.get('/:id', getEmployeeattend)

//POST a new employee
router.post('/', createEmployeeattend)

//DELETE an employee
router.delete('/:id', deleteEmployeeattend)

//UPDATE an employee
router.patch('/:id', updateEmployeeattend)

module.exports = router