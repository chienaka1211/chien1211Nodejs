'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Category', [{
            name: 'Smartphone',
            createdAt: new Date(),
            updatedAt: new Date()
        }]);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Category', null, {});
    }
};