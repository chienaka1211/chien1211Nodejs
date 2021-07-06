'use strict';
const {Sequelize, DataTypes, Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Order_product extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }

    Order_product.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        product_id: {
            type: {
                allowNull: false,
                type: DataTypes.INTEGER
            },
            references: {
                model: 'Product',
                key: 'id'
            }
        },
        order_id: {
            type: {
                allowNull: false,
                type: DataTypes.INTEGER
            },
            references: {
                model: 'Orders',
                key: 'id'
            }
        },
        quantity: DataTypes.INTEGER,
        sale: DataTypes.DECIMAL(10, 2),
        total_price: DataTypes.DECIMAL(10, 2),
    }, {
        sequelize,
        underscored: true,
        timestamps: false,
        modelName: 'Order_Product',
        tableName: 'Order_Product'
    });
    return Order_product;
};