require('dotenv').config(); // Cargar las variables de entorno de .env

const mongoose = require('mongoose');

// Obteniendo las variables de entorno desde process.env
const {
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_DB
} = process.env;

const options = {
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 500,
  connectTimeoutMS: 10000,
  // Otras opciones de configuración de MongoDB
};

const url = `mysql://${MYSQL_USER}:${MYSQL_PASSWORD}@${MYSQL_HOST}:${MYSQL_PORT}/${MYSQL_DB}`;

mongoose.connect(url, options)
  .then(() => {
    console.log('MySQL is connected');
  })
  .catch((err) => {
    console.error('MySQL connection error:', err);
  });
