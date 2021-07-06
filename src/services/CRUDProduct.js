import db from "../models/index";
//relation database
db.Product.belongsToMany(db.Category, {through: db.Product_Category})
db.Category.belongsToMany(db.Product, {through: db.Product_Category})


const getProduct = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let product = await db.Product.findAll()
            resolve(product)
        } catch (e) {
            reject(e)
        }
    })
}
const productDetails = (data) => {
    console.log(data)

    return new Promise(async (resolve, reject) => {
        try {
            let details = await db.Product.findOne({
                include: [{
                    model: db.Category,
                }
                ],
                where: {
                    id: data.idProduct
                }

            })
            // let category = await db.Category.findAll({
            //     attributes:['name'],
            //     include:[{
            //         model:db.Product_Category,
            //         where:{
            //             category_id:_category[0].dataValues.category_id
            //         }
            //     }]
            // })
            // console.log('-------------',category[0].dataValues.name,'----------')

            resolve(details)


        } catch (e) {
            reject(e)
        }
    })
}

const createProduct = (data) => {
    return new Promise(async (resolve, reject) => {

        try {
            let product = await db.Product.create({
                name: data.name,
                price: data.price,
                description: data.description
            })
            let productCategory = await db.Product_Category.create(
                {
                    product_id: product.id,
                    category_id: data.category
                },
                {returning: false}
            )
            resolve(product, productCategory)
        } catch (e) {
            reject(e)
        }
    })
}

const deleteProduct = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.Product.destroy({
                where: {
                    id: data.id
                }
            })
            resolve('deleted success!!!!!!!!')
        } catch (e) {
            reject(e)
        }
    })
}
const updateProduct = (data, req) => {
    console.log(data)
    console.log(req)
    return new Promise(async (resolve, reject) => {
        try {
            await db.Product.update({
                name: req.name,
                price: req.price,
                description: req.description
            }, {
                where: {
                    id: data.id
                }
            })

            resolve('Updated success!!!!!!!!!!')
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    getProduct: getProduct,
    createProduct: createProduct,
    deleteProduct: deleteProduct,
    updateProduct: updateProduct,
    productDetails: productDetails
}