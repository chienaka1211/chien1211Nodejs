const {Sequelize} = require('sequelize');


// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize('my_db', 'postgres', '123456', {
    host: 'localhost',
    logging: console.log,
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }

});

let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
module.exports = connectDB;