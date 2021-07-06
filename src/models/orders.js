'use strict';
const {Sequelize, DataTypes, Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Orders extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Orders.hasMany(models.Order_Product)
        }
    }

    Orders.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        }, order_code: {
            allowNull: false,
            type: DataTypes.STRING,
            unique: true
        },
        status: DataTypes.STRING,

    }, {
        sequelize,
        modelName: 'Orders',
        tableName: 'Orders'
    });
    return Orders;
};