import userService from '../service/userSerive'

const handleHelloWorld = (req, res) => {
    return res.render('home.ejs')
}

const handleUserPage = (req, res) => {
    return res.render('user.ejs')
}

const handleCreateNewUser = (req, res) => {
    const email = req.body.email
    const password = req.body.password
    const username = req.body.username

    // userService.createNewUser(email, password, username)
    userService.getUserList()

    return res.send('handleCreateNewUser')
}

module.exports = { handleHelloWorld, handleUserPage, handleCreateNewUser }
