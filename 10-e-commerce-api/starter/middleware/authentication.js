const CustomError = require('../errors')
const {isTokenValid} = require('../utils')

const authenticateUser = async(req, res, next) => {
    const token = req.signedCookies.token

    if(!token) {
        throw new CustomError.UnauthenticatedError('Authentication Invalid')
    }
    try {
        const {name, userId, role} = isTokenValid({token})
        req.user = {name, userId, role}
        // const payload = isTokenValid({token})
        // console.log(payload)
        next()
    } catch (error) {
        throw new CustomError.UnauthenticatedError('Authentication invalid')
    }
}

const authorizePermissions = (req, res, next) => {
    const {role} = req.user
    if(role !== 'admin') {
        throw new CustomError.UnauthorizedError('Not authorized to access this route')
    }
    next();
}
module.exports = {
    authenticateUser,
    authorizePermissions
}