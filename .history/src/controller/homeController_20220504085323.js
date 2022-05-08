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

    const hashPassword = bcrypt.hashSync(password, salt)
    console.log('chech hash password: ', hashPassword)

    const check = bcrypt.compareSync(password, hashPassword) // true
    console.log('check', check)

    // connection.query(
    //     'INSERT INTO user (email, password, username) VALUES (?,?,?)',
    //     [email, password, username],
    //     function (err, results, fields) {
    //         if (err) {
    //             console.log(err)
    //         }
    //     }
    // )

    return res.send('handleCreateNewUser')
}

module.exports = { handleHelloWorld, handleUserPage, handleCreateNewUser }
