const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors')
const getAllUsers = async(req, res) => {
    console.log(req.user)
    const users = await User.find({role: 'user'}).select('-password')
    res.status(StatusCodes.OK).json({ users });
}

const getSingleUsers = async(req, res) => {
    const user = await User.findOne({_id: req.params.id}).select('-password')
    if(!user) {
        throw new CustomError.NotFoundError(`No user with id : ${req.params.id}`)
    }
    res.status(StatusCodes.OK).json({ user });
}

const showCurrentUser  = async(req, res) => {
    res.send('show current users route')
}

const updateUser = async(req, res) => {
    res.send('update users route')
}

const updateUserPassword = async(req, res) => {
    res.send('update users password route')
}

module.exports = {
    getAllUsers,
    getSingleUsers,
    showCurrentUser,
    updateUser,
    updateUserPassword,

}