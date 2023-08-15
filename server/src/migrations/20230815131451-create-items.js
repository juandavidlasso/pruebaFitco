'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Items', {
			idItem: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			productId: {
				type: Sequelize.INTEGER,
				allowNull: false
			},
			amount: {
				type: Sequelize.INTEGER,
				allowNull: false
			},
			total: {
				type: Sequelize.FLOAT(10,2),
				allowNull: false
			}
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('Items');
	}
};