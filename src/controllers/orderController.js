import CRUDOder from "../services/CRUDOder";

const getListOder = async (req, res) => {
    let list = await CRUDOder.getListOrder()
    res.json(list)
}

const createOrder = async (req, res) => {

    let data = await CRUDOder.createOrder(req.body)
    if (!data) {
        res.status(400).send('Not Found!!!!!!!!')
    } else {
        res.json(data)
    }

}
const deleteOder = async (req, res) => {
    let id = req.params.id;
    let data = await CRUDOder.deleteOrder({id})
    res.json(data)
}
const getOderDetail = async (req, res) => {
    let idOrder = req.params.id;
    let detail = await CRUDOder.getDetailOrder({idOrder});
    res.json(detail)
}

const updateOder = async (req, res) => {
    let id = req.params.id;
    let data = await CRUDOder.updateOrder({id}, req.body)
    if (!data) {
        res.status(400).send('Not Found!!!!!!!!')
    } else {
        res.json(data)
    }
}
const addProductToOrder = async (req, res) => {
    let data = await CRUDOder.addProductToOrder(req.body)
    res.json(data)
}
const removeProductToOrder = async (req, res) => {
    let data = await CRUDOder.removeProductToOrder(req.body)
    res.json(data)
}

module.exports = {
    getListOder: getListOder,
    createOrder: createOrder,
    deleteOder: deleteOder,
    getOderDetails: getOderDetail,
    updateOder: updateOder,
    addProductToOrder: addProductToOrder,
    removeProductToOrder: removeProductToOrder
}