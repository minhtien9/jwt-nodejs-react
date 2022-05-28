import loginRegisterService from '../service/loginRegisterService'

const testApi = (req, res) => {
    return res.status(200).json({ message: 'ok', data: 'test api' })
}

const handleRegister = (req, res) => {
    try {
        if (!req.body.email || !req.body.phone || !req.body.password) {
            return res.status(200).json
        }
    } catch (error) {}
}

module.exports = { testApi, handleRegister }
