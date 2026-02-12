// const { Sequelize } = require('sequelize');
// const dotenv = require("dotenv");

// dotenv.config();

// console.log('Dialect:', process.env.DB_DIALECT);

// const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
//   {
//     host: process.env.DB_HOST,
//     dialect: process.env.DB_DIALECT,
//     logging: true,
//   }
// );

// module.exports = sequelize;
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "railway",    // nom de la base
  "root",       // utilisateur
  "PxvrhZVtIbMxpXDQHNMNzpbVlYqvcqJs",  // mot de passe
  {
    host: "trolley.proxy.rlwy.net",
    dialect: "mysql",
    port: 49162,      // port fourni par Railway
    logging: false
  }
);

module.exports = sequelize;
