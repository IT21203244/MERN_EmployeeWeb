const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const employeeattendSchema = new Schema({

    employeeid: {
        type: String,
        required: true,
        trim: true,
        maxlength: 7
    },

    month: {
        type: String,
        required: true,
    },

    date: {
        type: Date,
        required: true,
    },

    timein: {
        type: String,
        required: true,
    },

    timeout: {
        type: String,
        required: true,
    },

    totalhours: {
        type: Number,
    }


}, {
    timestamps: true,
});

const Employeeattend = mongoose.model('Employeeattend', employeeattendSchema);

module.exports = Employeeattend;
