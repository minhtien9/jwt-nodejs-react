import mysql from 'mysql2'

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'jwt',
})

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

    connection.query(
        'INSERT INTO user (email, password, username) VALUES (?,?,?)',
        [email, password, username],
        function (err, results, fields) {
            if (err) {
                console.log(err)
            }
        }
    )

    return res.send('handleCreateNewUser')
}

module.exports = { handleHelloWorld, handleUserPage, handleCreateNewUser }
