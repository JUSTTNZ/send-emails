const jwt = require('jsonwebtoken')

const createJWT = ({payload}) => {
    const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: process.env.JWT_LIFETIME})  
    return token
}

const isTokenValid = ({token}) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET)
    } catch (error) {
        return false
    }
}

const attachCookiesToResponse = ({res, user}) => {
    const token = createJWT({payload: user});

    const oneDay = 1000 * 60 * 60 * 24
    res.cookie('token', token, {
        httpOnly: true,
        expiresIn: new Date(Date.now() + oneDay),
        secure: process.env.NODE_ENV === 'production',
        signed: true,
    })
   // res.status(200).json({ user })
}

module.exports = {
    createJWT,
    isTokenValid,
    attachCookiesToResponse
}