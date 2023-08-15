import { Model } from "sequelize";
module.exports = (sequelize: any, DataTypes: any) => {
	class User extends Model {
		static associate(models: any) {
			// define association here
    	}
  	}
	User.init({
		idUser: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
			allowNull: false
		},
		firstName: {
			type: DataTypes.STRING,
			allowNull: false
		},
		lastName: {
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false
		},
		rol: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	}, {
		sequelize,
		modelName: 'User',
		timestamps: false
	});

	return User;
};