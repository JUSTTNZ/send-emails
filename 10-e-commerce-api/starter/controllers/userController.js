const getAllUsers = async(req, res) => {
    res.send('get all users route')
}

const getSingleUsers = async(req, res) => {
    res.send('get single users route')
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