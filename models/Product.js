// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
  },
  {
    sequelize,
    timestamps: false,      // not adding time-stamp (createdAt and updatedAt)
    freezeTableName: true,  // Sequelize will infer the table name to be equal to the model name, without any modifications
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;

