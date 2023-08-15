import { Model } from "sequelize";
module.exports = (sequelize: any, DataTypes: any) => {
	class Products extends Model {
		static associate(models: any) {
		// define association here
		}
	}
	Products.init({
		idProduct: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
			allowNull: false
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		price: {
			type: DataTypes.FLOAT,
			allowNull: false
		},
		amount: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		image: {
			type: DataTypes.STRING,
			allowNull: false
		}
	}, {
		sequelize,
		modelName: 'Products',
		timestamps: false
	});
	return Products;
};