const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('node_mvcdb','root','',{
    host:'localhost',
    dialect:'mysql',
});

module.exports =sequelize; 