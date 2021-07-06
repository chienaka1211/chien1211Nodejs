import CRUDServices from '../services/CRUDServices'


let getHome = async (req, res) => {
    let data = await CRUDServices.getUser()
    console.log('----------------')
    console.log(data)
    console.log('----------------')
    res.json(data)

}
let createUser = async (req,res) => {
    let message = await CRUDServices.createUser(req.body);
    console.log(req.body)
    res.json(message)

}
let deleteUser = async (req,res) => {
    let _delete = await CRUDServices.deleteUser(req.body);
    console.log(_delete)
    res.send('delete success')
}
let updateUser = async (req,res) => {
    let _update = await CRUDServices.updateUser(req.body);
    console.log(_update)
    res.json()
}
module.exports = {
    getHome: getHome,
    createUser:createUser,
    deleteUser:deleteUser,
    updateUser:updateUser
}