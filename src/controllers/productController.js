import CRUDProduct from "../services/CRUDProduct"


const getProduct = async (req, res) => {
    let data = await CRUDProduct.getProduct()
    console.log('----------------')
    console.log(data)
    console.log('----------------')
    res.json(data)

}
const productDetails = async (req,res) => {
    let idProduct = req.params.id
    let details= await CRUDProduct.productDetails({idProduct})
    res.json(details)
}
const createProduct = async (req, res) => {

    let message = await CRUDProduct.createProduct(req.body)
    console.log(message)
    res.json(message)

}

const deleteProduct = async (req, res) => {
    let id = req.params.id;
    let message = await CRUDProduct.deleteProduct({id})
    console.log(message)
    res.json(message)
}

const updateProduct = async (req, res) => {
    let id = req.params.id

    let message = await CRUDProduct.updateProduct({id}, req.body);
    console.log(message);
    res.json(message);

}
module.exports = {
    getProduct: getProduct,
    createProduct: createProduct,
    deleteProduct: deleteProduct,
    updateProduct: updateProduct,
    productDetails:productDetails
}