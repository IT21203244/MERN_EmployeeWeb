const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const employeeSalarySchema = new Schema({

    name: {
        type: String,
        required: true,
    },

    employeeid: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        maxlength: 7
    },

    role: {
        type: String,
        required: true,
    },

    basicsalary: {
        type: Number,
        required: true
    },

    dailywage: {
        type: Number,
        required: true
    },

    allowances: {
        type: Number,
        required: true,
    },

    salaryallowances: {
        type: Number,
        required: true
    },

    staffloan: {
        type: Number,
        required: true
    },

    epf: {
        type: Number,
        required: true
    },

    etf: {
        type: Number,
        required: true
    },

    netsalary: {
        type: Number,
        required: true
    },
    

}, {
    timestamps: true,
});

const EmployeeSalary = mongoose.model('EmployeeSalary', employeeSalarySchema);

module.exports = EmployeeSalary;