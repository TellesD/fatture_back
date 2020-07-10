import {Model,  DataTypes } from "sequelize";

class Price extends Model {
  static init(sequelize) {
    super.init({
      value: DataTypes.FLOAT,
    }, {
      sequelize,
    });
  };
  static associate(models) {
    this.belongsTo(models.Service, { foreignKey: 'services_id', as: 'services' });
  }
};

module.exports = Price;