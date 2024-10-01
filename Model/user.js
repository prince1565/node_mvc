const {Sequelize} = require('sequelize');
const sequelize = require("../Config/database");


const User=sequelize.define('user',{
    name:{
        type:Sequelize.DataTypes.STRING,
        allowNull:false,
    },
    emailaddress:{
        type:Sequelize.DataTypes.STRING,
        allowNull:false,
        unique: true,
    },
    contactno:{
        type:Sequelize.DataTypes.INTEGER,
        allowNull:false,
    },
});

module.exports=User;