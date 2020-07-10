import {Model,  DataTypes } from "sequelize";

class Service extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
    }, {
      sequelize,
    });
  };
  static associate(models) {
    this.belongsTo(models.Service_group, { foreignKey: 'service_groups_id', as: 'service_groups' });
    this.hasOne(models.Price, { foreignKey: 'services_id', as: 'prices' });
  }
};

module.exports = Service;