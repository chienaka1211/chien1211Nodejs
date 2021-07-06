import db from '../models/index'

const getUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findAll()
            resolve(user)
        } catch (e) {
            reject(e)
        }
    })
}

const createUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.User.create({
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email
            })
            resolve('ok!!!!create success')
        } catch (e) {
            reject(e)
        }
    })
}

const deleteUser = (data) => {
    return new Promise(async (resolve,reject) => {
        try {
            await db.User.destroy({
                where:{
                    firstName: data.firstName,
                }
            })
            resolve('OK DELETE')
        }catch (e) {
            reject(e)
        }
    })
}
const updateUser = (data) => {
    return new Promise(async (resolve,reject) => {
        try {
            await db.User.update({
                where:{
                    firstName: data.firstName,
                }
            })
            resolve('Update Ok!!!!!!!!')
        }catch (e) {
            reject(e)
        }
    })
}


module.exports = {
    getUser: getUser,
    createUser: createUser,
    deleteUser:deleteUser,
    updateUser:updateUser
};