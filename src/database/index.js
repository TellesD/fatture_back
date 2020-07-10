import Sequelize from 'sequelize';
import dbConfig from '../config/database';
import Place from '../models/Place';
import Service_group from '../models/Service_group';
import Service from '../models/Service';
import Price from '../models/Price';

const connection = new Sequelize(dbConfig);

Place.init(connection);
Service_group.init(connection);
Service.init(connection);
Price.init(connection);

Service_group.associate(connection.models);
Place.associate(connection.models);
Service.associate(connection.models);
Price.associate(connection.models);

module.exports = connection;