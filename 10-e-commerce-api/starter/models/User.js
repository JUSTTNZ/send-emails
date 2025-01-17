const { required } = require('joi')
const mongoose = require('mongoose')

const UserSchema =  new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please provide name'],
        minlength: 3,
        maxlength: 50,
    },
    email: {
        type: String,
        required: [true, 'please provide email'],
    },
    password: {
        type: String,
        required: [true, 'please provide password'],
        minlength: 6,
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },


})

module.exports = mongoose.model('User', UserSchema)