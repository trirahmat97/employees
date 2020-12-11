const db = require('../db');
const { DataTypes } = require('sequelize');
const Employees = db.define('employees', {
    id: {
        type: DataTypes.INTEGER(10),
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Please enter your Name!'
            }
        }
    },
    phone_number: {
        type: DataTypes.STRING(16),
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Please enter your Phone Number!'
            }
        }
    },
    jobtitle: {
        type: DataTypes.STRING(25),
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Please enter your Jobtitle!'
            }
        }
    }
});

module.exports = Employees;