
import {secret} from '../config/token'

const checkToken = (req, res, next) => {
    const token = req.header('auth-token');
    console.log('>>>>>>>>', token)

    if (!token) {
        res.status(401).send('You do not have token')
    } else if (token === secret) {
       next()
    }else {
        res.status(400).send('Token does not exist')
    }

}

module.exports = {
    checkToken: checkToken
}