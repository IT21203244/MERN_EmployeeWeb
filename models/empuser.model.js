const mongoose = require('mongoose')

const Schema = mongoose.Schema

const empusersSchema = new Schema({
    
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Empuser', empusersSchema)