'use strict';


module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Orders', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            order_code: {
                allowNull: false,
                autoIncrement: true,
                type: Sequelize.INTEGER,
                unique:true
            },
            status: {
                type: Sequelize.BOOLEAN,
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
        await queryInterface.dropTable('Orders');
    }
};