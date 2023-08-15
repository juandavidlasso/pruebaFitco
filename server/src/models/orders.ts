import { Model } from "sequelize";
module.exports = (sequelize: any, DataTypes: any) => {
	class Orders extends Model {
		static associate(models: any) {
			// define association here
		}
	}
	Orders.init({
		idOrder: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
			allowNull: false
		},
		itemIds: {
			type: DataTypes.JSON,
			allowNull: false
		},
		userId: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		total: {
			type: DataTypes.FLOAT,
			allowNull: false
		}
	}, {
		sequelize,
		modelName: 'Orders'
	});
	return Orders;
};