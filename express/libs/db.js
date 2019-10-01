const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'mysql',
  user     : 'root',
  password : 'mysql',
  database : 'db'
});

function queryAsync(query, params) {
  return new Promise((resolve, reject) => {
    fmtQuery = mysql.format(query, params);
    connection.query(fmtQuery, function (err, rows) {
      if (err) {
        return reject(err);
      }
      return resolve(rows);
    });
  });
}

module.exports = {
  queryAsync
}