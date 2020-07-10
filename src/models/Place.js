import { Model, DataTypes } from "sequelize";

class Place extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      cpf: DataTypes.STRING,
      birthday: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      cep: DataTypes.STRING,
      address: DataTypes.STRING,
      address_numb: DataTypes.STRING,
      city: DataTypes.STRING,
      number: DataTypes.STRING,
    }, {
      sequelize,
    });
  };
  static associate(models) {
    this.hasMany(models.Service_group, { foreignKey: 'places_id', as: 'service_groups' });
  }
};

module.exports = Place;