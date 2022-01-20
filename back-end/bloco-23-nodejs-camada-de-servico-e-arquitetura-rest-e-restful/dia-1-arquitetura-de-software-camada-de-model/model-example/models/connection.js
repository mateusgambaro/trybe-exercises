const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user:'mateusgambaro',
  password: '13122100',
  host: 'localhost',
  database:'model_example'
});

module.exports = connection;