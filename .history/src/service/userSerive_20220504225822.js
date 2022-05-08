import mysql from 'mysql2/promise'
import bcrypt from 'bcryptjs'
const bluebird = require('bluebird')

const salt = bcrypt.genSaltSync(10)

const hashUserPassword = (userPassword) => {
    const hashPassword = bcrypt.hashSync(userPassword, salt)
    console.log('chech hash password: ', hashPassword)
    return hashPassword
}

const createNewUser = async (email, password, username) => {
    const hashPass = hashUserPassword(password)
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'jwt',
        Promise: bluebird,
    })
    try {
        const [rows, fields] = await connection.execute(
            'INSERT INTO users (email, password, username) VALUES (?,?,?)',
            [email, hashPass, username]
        )
        ]
    } catch (error) {
        console.log(error)
    }
}

const getUserList = async () => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'jwt',
        Promise: bluebird,
    })
    const users = []

    try {
        const [rows, fields] = await connection.execute('SELECT * FROM users')
        return rows
    } catch (error) {
        console.log(error)
    }
}

const deleteUser = async (id) => {}

module.exports = { createNewUser, getUserList }
