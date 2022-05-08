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

    userService.

    const hashPassword = bcrypt.hashSync(password, salt)
    console.log('chech hash password: ', hashPassword)

    const check = bcrypt.compareSync(password, hashPassword) // true
    console.log('check', check)

    return res.send('handleCreateNewUser')
}

module.exports = { handleHelloWorld, handleUserPage, handleCreateNewUser }
