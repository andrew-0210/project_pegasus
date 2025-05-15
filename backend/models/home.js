const Sequelize = require("sequelize");

const sequelize = require("../utils/database");

const Home = sequelize.define("home", {
	heading: {
		type: Sequelize.STRING,
		allowNull: false,
	},
});

module.exports = Home;
