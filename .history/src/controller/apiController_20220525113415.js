import loginRegisterService from '../service/loginRegisterService'

const testApi = (req, res) => {
    return res.status(200).json({
        message: 'ok',
        data: 'test api',
    })
}

const handleRegister = async (req, res) => {
    try {
        if (!req.body.email || !req.body.phone || !req.body.password) {
            return res.status(200).json({
                EM: 'Missing required parameters',
                EC: '1',
                DT: '',
            })
        }

        if (req.body.password && req.body.password.length < 4) {
            return res.status(200).json({
                EM: 'Your password must have more than 3 characters',
                EC: '1',
                DT: '',
            })
        }

        // service:create user
        let data = await loginRegisterService.registerNewUser(req.body)

        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: '',
        })
    } catch (error) {
        return res.status(500).json({
            EM: 'error from server',
            EC: '-1',
            DT: '',
        })
    }
}

const handleLogin = async (req, res) => {
    try {
        let data = await loginRegisterService.handleRegister
    } catch (error) {}
    console.log('Check login from react: ', req.body)
    return res.status(200).json({ message: 'ok', data: 'test api login' })
}
module.exports = { testApi, handleRegister, handleLogin }
