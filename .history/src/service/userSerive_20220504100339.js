import mysql from 'mysql2/promise'
import bcrypt from 'bcryptjs'
const bluebird = require('bluebird')

// create the connection, specify bluebird as Promise

// query database
const [rows, fields] = await connection.execute(
    'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
    ['Morty', 14]
)

const salt = bcrypt.genSaltSync(10)

// create the connection to database
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'jwt',
// })

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

const getUserList = async () => {
    const users = []
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'test',
        Promise: bluebird,
    })
    connection.query(
        'Select * from users ',

        function (err, results, fields) {
            if (err) {
                console.log(err)
            }
            console.log('results', results)
        }
    )
}

module.exports = { createNewUser, getUserList }
