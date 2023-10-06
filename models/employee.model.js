const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const employeeSchema = new Schema({

    epimage: {
        type: String,
        required: true,
    },

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

    password: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 8,
        maxlength: 12
    },

    nic: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        maxlength: 13
    },

    address: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    phonenumber: {
        type: Number,
        required: true,
        maxlength: 10
    },

    birthdate: {
        type: Date,
        required: true,
    },


    hiredate: {
        type: Date,
        required: true,
    },


}, {
    timestamps: true,
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;