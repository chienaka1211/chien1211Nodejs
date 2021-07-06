import CRUDCategory from '../services/CRUDCategory'


const getListCategories = async (req, res) => {
    let list = await CRUDCategory.getListCategories()
    res.json(list)
}

const getDetailCategory = async (req, res) => {
    let id = req.params.id;
    let detail = await CRUDCategory.getDetailCategory({id})
    console.log('>>>>>>>>>>>', detail)
    res.json(detail)
}
const createCategory = async (req, res) => {
    let data = await CRUDCategory.createCategory(req.body)
    res.json(data)
}
const deleteCategory = async (req, res) => {
    let id = req.params.id
    let data = await CRUDCategory.deleteCategory({id})
    res.json(data)
}
const updateCategory = async (req, res) => {
    let id = req.params.id;
    let name = req.body.name;

    let data = await CRUDCategory.updateCategory({id, name})
    res.json(data);
}

module.exports = {
    getListCategories: getListCategories,
    getDetailCategory: getDetailCategory,
    createCategory: createCategory,
    deleteCategory: deleteCategory,
    updateCategory: updateCategory
}