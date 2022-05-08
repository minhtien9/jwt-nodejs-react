import userService from '../service/userSerive'

const handleHelloWorld = (req, res) => {
    return res.render('home.ejs')
}

const handleUserPage = async (req, res) => {
    const userList = await userService.getUserList()
    return res.render('user.ejs', { userList })
}

const handleCreateNewUser = (req, res) => {
    const email = req.body.email
    const password = req.body.password
    const username = req.body.username

    userService.createNewUser(email, password, username)

    return res.redirect('/user')
}

const handleDeleteUser = (req, res) => {
    await userService.deleteUser(req.params.id)
    return res.redirect('/user')
}
module.exports = { handleHelloWorld, handleUserPage, handleCreateNewUser,handleDeleteUser }
