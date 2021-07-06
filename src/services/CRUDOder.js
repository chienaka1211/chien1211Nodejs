import db from "../models/index"

db.Orders.belongsToMany(db.Product, {through: db.Order_Product})
db.Product.belongsToMany(db.Orders, {through: db.Order_Product})


const createOrder = async (data) => {

    let _idProduct = data.idProduct;
    let _quantity = data.quantity;
    try {
        // check product exist
        const product = await db.Product.findByPk(_idProduct);

        if (!product) {
            console.log('Not Found!!!!!!!!!!!!!!')

        } else {
            return new Promise(async (resolve, reject) => {
                try {
                    let priceSale = await db.Product.findAll({
                        attributes: ['price'],
                        where: {
                            id: _idProduct
                        }
                    })
                    let _priceSale = priceSale[0].dataValues.price

                    let order = await db.Orders.create({
                        order_code: data.order_code,
                        status: data.status,
                    })
                    let orderProduct = await db.Order_Product.create({
                        order_id: order.id,
                        product_id: _idProduct,
                        quantity: _quantity,
                        sale: _priceSale,
                        total_price: _priceSale * _quantity
                    })
                    resolve(order, orderProduct)
                } catch (e) {
                    reject(e);
                }
            })
        }
    } catch (e) {

    }


}
const deleteOrder = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.Orders.destroy({
                where: {
                    id: data.id
                }
            })
            resolve(`DELETE ORDER SUCCESS!!!!!!!!!!!`)
        } catch (e) {
            reject(e)
        }
    })
}
const getListOrder = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let listOrder = await db.Orders.findAll()
            resolve(listOrder)
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailOrder = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let detail = await db.Orders.findOne({
                include: [{
                    model: db.Product
                }],
                where: {
                    id: data.idOrder
                }
            })
            resolve(detail)
        } catch (e) {
            reject(e)
        }
    })
}

const addProductToOrder = async (data) => {
    let _idProduct = data.idProduct;
    console.log('>>>>>>>>>>>>>', _idProduct)
    let _quantity = data.quantity;
    try {

        const product = await db.Order_Product.findOne({
            where: {
                product_id: _idProduct
            }
        })
        console.log('>>>>>>>>>>>', product)

        if (product == null) {
            return new Promise(async (resolve, reject) => {
                try {
                    let priceSale = await db.Product.findAll({
                        attributes: ['price'],
                        where: {
                            id: _idProduct
                        }
                    })
                    let _priceSale = priceSale[0].dataValues.price
                    console.log('================>', _priceSale)

                    await db.Order_Product.create({
                        order_id: data.order_id,
                        product_id: _idProduct,
                        quantity: _quantity,
                        sale: _priceSale,
                        total_price: _priceSale * _quantity
                    })
                    resolve('ADD NEW PRODUCT SUCCESS!!!!!!!!')
                } catch (e) {
                    reject(e)
                }
            })

        } else {

            return new Promise(async (resolve, reject) => {
                try {

                    let priceSale = await db.Product.findAll({
                        attributes: ['price'],
                        where: {
                            id: _idProduct
                        }
                    })
                    let _priceSale = priceSale[0].dataValues.price
                    console.log('================>', _priceSale)
                    await db.Order_Product.update({
                        quantity: _quantity,
                        sale: _priceSale,
                        total_price: _quantity * _priceSale
                    }, {
                        where: {
                            product_id: _idProduct
                        }
                    })
                    resolve("SUCCESS!!!!!!!!!!")
                } catch (e) {
                    reject(e)
                }
            })
        }
    } catch (err) {
        console.log(err)

    }
}
const removeProductToOrder = (data) => {
    console.log('<<<<<<<<<<<<<<<<<', data)
    return new Promise(async (resolve, reject) => {
        try {
            await db.Order_Product.destroy({
                where: {
                    product_id: data.idProduct
                }
            })
            resolve('REMOVE PRODUCT SUCCESS!!!!!!!!!!!!!!!!')
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    createOrder: createOrder,
    getListOrder: getListOrder,
    addProductToOrder: addProductToOrder,
    getDetailOrder: getDetailOrder,
    removeProductToOrder: removeProductToOrder,
    deleteOrder: deleteOrder
}