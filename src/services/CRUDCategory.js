import db from '../models/index'


const createCategory = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let category = await db.Category.create({
                name: data.name
            }, {returning: false})
            resolve(category)
        } catch (e) {
            reject(e)
        }
    })
}
const getListCategories = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let listCategories = await db.Category.findAll();

            resolve(listCategories)
        } catch (e) {
            reject(e)
        }

    })
}
const getDetailCategory = (data) => {
    console.log(data)
    return new Promise(async (resolve, reject) => {
        try {
            let detail = await db.Category.findAll({
                where: {
                    id: data.id
                }
            })

            resolve(detail)

        } catch (e) {
            reject(e)
        }
    })
}
const deleteCategory = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.Category.destroy({
                where: {
                    id: data.id
                }
            })
            resolve('DELETE SUCCESS!!!!!!!!!!')
        } catch (e) {
            reject(e)
        }
    })
}
const updateCategory = (data) => {
    console.log('----------->', data)
    return new Promise(async (resolve, reject) => {
        try {
            await db.Category.update({
                name: data.name
            }, {
                where: {
                    id: data.id
                }
            })
            resolve('UPDATE SUCCESS!!!!!!!!')
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    createCategory: createCategory,
    getListCategories: getListCategories,
    getDetailCategory: getDetailCategory,
    updateCategory: updateCategory,
    deleteCategory: deleteCategory

}