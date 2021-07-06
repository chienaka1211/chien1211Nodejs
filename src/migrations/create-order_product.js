'use strict';


module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Order_Product', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            order_id: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            product_id: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            quantity: {

                type: Sequelize.INTEGER
            },
            sale: {
                type: Sequelize.DECIMAL(10, 2),
            },
            total_price: {
                type: Sequelize.DECIMAL(10, 2)
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Order_Product');
    }
};