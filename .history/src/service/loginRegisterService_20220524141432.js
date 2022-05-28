import bcrypt from 'bcryptjs'
import db from '../models'

const salt = bcrypt.genSaltSync(10)

const hashUserPassword = (userPassword) => {
    const hashPassword = bcrypt.hashSync(userPassword, salt)

    return hashPassword
}

const checkEmailExist = async (userEmail) => {
    let user = await db.User.findOne({ where: { email: userEmail } })

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
  try{
    let isEmailExist = await checkEmailExist(rawUserData.email)
    console.log('>>> check email',isEmailExist)
    if(isEmailExist===true) {
      return {'EM:The email is already exist'}
    }
  }
}

module.exports = {
    createNewUser,
    getUserList,
    deleteUser,
    getUserById,
    updateUserInfor,
}
