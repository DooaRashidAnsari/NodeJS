const dbConfig = require("./config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(`${dbConfig.dialect}://${dbConfig.HOST}:${dbConfig.port}/${dbConfig.DB}`, {
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

sequelize
.authenticate()
.then(() => {
console.log('Connection has been established successfully.');
})
.catch(err => {
console.error('Unable to connect to the database:', err);
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./User")(sequelize, Sequelize);

module.exports = db;