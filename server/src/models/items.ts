import { Model } from "sequelize";
module.exports = (sequelize: any, DataTypes: any) => {
	class Items extends Model {
		static associate(models: any) {
			// define association here
		}
	}
	Items.init({
		idItem: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
			allowNull: false
		},
		productId: {
			type: DataTypes.INTEGER,
		},
		amount: {
			type: DataTypes.INTEGER,
		},
		total: {
			type: DataTypes.FLOAT
		}
	}, {
		sequelize,
		modelName: 'Items',
		timestamps: false
	});
	return Items;
};