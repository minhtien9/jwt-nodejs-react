import loginRegisterService from '../service/loginRegisterService'

const testApi = (req, res) => {
    return res.status(200).json({ message: 'ok', data: 'test api' })
}

const handleRegister = (req, res) => {
    try {
        if (!req.body.email || !req.body.phone || !req.body.password) {
            return res
                .status(200)
                .json({ EM: 'Missing required parameters', EC: '1', DT: '' })
        }

        if (req.body.password && req.body.password.length < 4) {
            return res.status(200).json({
                EM: 'Your password is too short',
            })
        }
    } catch (error) {}
}

module.exports = { testApi, handleRegister }