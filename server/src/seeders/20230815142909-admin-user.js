'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.bulkInsert('Users', [{
			firstName: 'FITCO',
			lastName: 'Test',
			email: 'fitco@gmail.com',
			password: '$2a$08$HcEwOehRZHz0/K8BKpn/A.O.RJDtDx77WnfJ85LilETBgNI542fIq',
			rol: 1
		}], {});
	},

	async down (queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Users', null, {});
	}
};
