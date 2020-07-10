import express from 'express';
import routes from './routes';
import mongoose from 'mongoose';

require('./database');

const app = express();

//mongodb+srv://admin:NKjq7IzITfDw0IG@cluster0.fvie9.mongodb.net/<dbname>?retryWrites=true&w=majority

const url = 'mongodb://useradmin:silva1897@cluster0-shard-00-00.fvie9.mongodb.net:27017,cluster0-shard-00-01.fvie9.mongodb.net:27017,cluster0-shard-00-02.fvie9.mongodb.net:27017/<dbname>?ssl=true&replicaSet=atlas-u1e05o-shard-0&authSource=admin&retryWrites=true&w=majority'
const options = { reconnectTries: Number.MAX_VALUE, reconnectInterval: 500, poolSize: 5, useNewUrlParser: true };

mongoose.connect(url, options);
mongoose.set('useCreateIndex', true);


mongoose.connection.on('error', (err) => {
  console.log('Erro na conexão com o banco de dados: ' + err);
})

mongoose.connection.on('disconnected', () => {
  console.log('Aplicação desconectada do banco de dados!');
})

mongoose.connection.on('connected', () => {
  console.log('Aplicação conectada ao banco de dados!');
})


app.use(express.json());
app.use(routes);


app.listen(3333);

