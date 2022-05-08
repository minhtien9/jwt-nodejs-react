import mysql from 'mysql2'
import bcrypt from 'bcryptjs'

const salt = bcrypt.genSaltSync(10)

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'jwt',
})

const hashUserPassword = (userPassword) => {
    const hashPassword = bcrypt.hashSync(userPassword, salt)
    console.log('chech hash password: ', hashPassword)
    return hashPassword
}

const createNewUser = (email, password, username) => {
    const hashPass = hashUserPassword(password)
    connection.query(
        'INSERT INTO users (email, password, username) VALUES (?,?,?)',
        [email, hashPass, username],
        function (err, results, fields) {
            if (err) {
                console.log(err)
            }
        }
    )
}

const getUserList = () => {
    const users = []

    connection.query(
        'Select * INTO users (email, password, username) VALUES (?,?,?)',
        [email, hashPass, username],
        function (err, results, fields) {
            if (err) {
                console.log(err)
            }
        }
    )
}
