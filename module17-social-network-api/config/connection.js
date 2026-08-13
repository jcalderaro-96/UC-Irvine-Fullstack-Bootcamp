// config/connection.js — sets up Mongoose connection
require('dotenv').config();
const { connect, connection } = require('mongoose');

const mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialNetworkDB';

connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
