import {Model,  DataTypes } from "sequelize";

class Service_group extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
    }, {
      sequelize,
    });
  };
  static associate(models) {
    this.belongsTo(models.Place, { foreignKey: 'places_id', as: 'place' });
    this.hasMany(models.Service, { foreignKey: 'service_groups_id', as: 'services' });
  }
};

module.exports = Service_group;