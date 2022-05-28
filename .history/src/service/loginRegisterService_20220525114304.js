import bcrypt from 'bcryptjs'
import db from '../models'
import { Op } from 'sequelize'

const salt = bcrypt.genSaltSync(10)

const hashUserPassword = (userPassword) => {
    const hashPassword = bcrypt.hashSync(userPassword, salt)

    return hashPassword
}

const checkEmailExist = async (userEmail) => {
    let user = await db.User.findOne({
        where: { email: userEmail },
    })

    if (user) {
        return true
    }
    return false
}
const checkPhoneExist = async (userPhone) => {
    let user = await db.User.findOne({ where: { email: userPhone } })

    if (user) {
        return true
    }
    return false
}

const registerNewUser = async (rawUserData) => {
    try {
        // check email, phone are axist
        let isEmailExist = await checkEmailExist(rawUserData.email)
        if (isEmailExist === true) {
            return {
                EM: 'The email is already exist',
                EC: 1,
            }
        }
        let isPhoneExist = await checkPhoneExist(rawUserData.phone)
        if (isPhoneExist === true) {
            return {
                EM: 'The phone number is already exist',
                EC: 1,
            }
        }

        // hash user password
        let hashPassword = hashUserPassword(rawUserData.password)

        // create new user
        await db.User.create({
            email: rawUserData.email,
            username: rawUserData.username,
            password: hashPassword,
            phone: rawUserData.phone,
        })

        return {
            EM: 'A user is create successfully',
            EC: '0',
        }
    } catch (e) {
        console.log(e)
        return {
            EM: 'Something went wrong',
            EC: -2,
        }
    }
}

const checkPassword = (inputPassword, hashPassword) => {
    return bcrypt.compareSync(inputPassword, hashPassword)
}

const handleUserLogin = async (rawData) => {
    try {
        let user = await db.User.findOne({
            where: {
                [Op.or]: [
                    { email: rawData.valueLogin },
                    { phone: rawData.valueLogin },
                ],
            },
        })

        if (user) {
            console.log('>>> found user with email/phone')
            let isCorrectPassword = checkPassword(
                rawData.password,
                user.password
            )
            if (isCorrectPassword === true) {
                return {
                    EM: 'ok',
                    EC: 0,
                    DT: '',
                }
            }
        }

        console.log('>>> input user ')
    } catch (error) {}
}

module.exports = {
    registerNewUser,
}
