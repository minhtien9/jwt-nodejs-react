import bcrypt from 'bcryptjs'
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
        await db.User.create({
            email: email,
            password: hashPass,
            username: username,
        })
    } catch (error) {
        console.log(error)
    }
}

const getUserList = async () => {
    let users = []

    users = await db.User.findAll()
    return users
    // const connection = await mysql.createConnection({
    //     host: 'localhost',
    //     user: 'root',
    //     database: 'jwt',
    //     Promise: bluebird,
    // })

    // try {
    //     const [rows, fields] = await connection.execute('SELECT * FROM user')
    //     return rows
    // } catch (error) {
    //     console.log(error)
    // }
}

const deleteUser = async (userId) => {
    await db.User.destroy({
        where: {
            id: userId,
        },
    })
    // const connection = await mysql.createConnection({
    //     host: 'localhost',
    //     user: 'root',
    //     database: 'jwt',
    //     Promise: bluebird,
    // })
    // try {
    //     const [rows, fields] = await connection.execute(
    //         'DELETE FROM users WHERE id=?',
    //         [id]
    //     )
    //     return rows
    // } catch (error) {
    //     console.log(error)
    // }
}

const getUserById = async (id) => {
    let user = {}
    user = await db.User.findOne({ where: { id: id } })

    return user.get({ plain: true })
    // const connection = await mysql.createConnection({
    //     host: 'localhost',
    //     user: 'root',
    //     database: 'jwt',
    //     Promise: bluebird,
    // })
    // try {
    //     const [rows, fields] = await connection.execute(
    //         'Select * FROM users WHERE id=?',
    //         [id]
    //     )
    //     return rows
    // } catch (error) {
    //     console.log(error)
    // }
}

const updateUserInfor = async (email, username, id) => {
    await db.User.update(
        { email: email, username: username },
        {
            where: {
                id: id,
            },
        }
    )
    // const connection = await mysql.createConnection({
    //     host: 'localhost',
    //     user: 'root',
    //     database: 'jwt',
    //     Promise: bluebird,
    // })
    // try {
    //     const [rows, fields] = await connection.execute(
    //         'UPDATE users SET email = ?, username = ? WHERE id = ?',
    //         [email, username, id]
    //     )
    //     return rows
    // } catch (error) {
    //     console.log(error)
    // }
}

module.exports = {
    createNewUser,
    getUserList,
    deleteUser,
    getUserById,
    updateUserInfor,
}
