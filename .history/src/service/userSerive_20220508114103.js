import mysql from 'mysql2/promise'
import bcrypt from 'bcryptjs'
const bluebird = require('bluebird')
import db from '../models'

const salt = bcrypt.genSaltSync(10)

const hashUserPassword = (userPassword) => {
    const hashPassword = bcrypt.hashSync(userPassword, salt)
    console.log('chech hash password: ', hashPassword)
    return hashPassword
}

const createNewUser = async (email, password, username) => {
    const hashPass = hashUserPassword(password)

    try {
        const user = await db.Users.create({
            email: email,
            password: hashPass,
            username: username,
        })

        console.log(user)
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

    try {
        const [rows, fields] = await connection.execute('SELECT * FROM users')
        return rows
    } catch (error) {
        console.log(error)
    }
}

const deleteUser = async (id) => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'jwt',
        Promise: bluebird,
    })
    try {
        const [rows, fields] = await connection.execute(
            'DELETE FROM users WHERE id=?',
            [id]
        )
        return rows
    } catch (error) {
        console.log(error)
    }
}

const getUserById = async (id) => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'jwt',
        Promise: bluebird,
    })
    try {
        const [rows, fields] = await connection.execute(
            'Select * FROM users WHERE id=?',
            [id]
        )
        return rows
    } catch (error) {
        console.log(error)
    }
}

const updateUserInfor = async (email, username, id) => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'jwt',
        Promise: bluebird,
    })
    try {
        const [rows, fields] = await connection.execute(
            'UPDATE users SET email = ?, username = ? WHERE id = ?',
            [email, username, id]
        )
        return rows
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createNewUser,
    getUserList,
    deleteUser,
    getUserById,
    updateUserInfor,
}
