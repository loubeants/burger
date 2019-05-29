var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else{
    connection = mysql.createConnection({
        host:"localhost",
        port:8080,
        user:"root",
        password: "root",
        database: "burgers_db"
    })
}

// var connection = mysql.createConnection(process.env.JAWSDB_URL);

connection.connect(function(err) {
    if (err) {
      console.error(err);
      return;
    }
    console.log("connect to " + connection.threadId);
  });
  
  // Export connection for our ORM to use.
  module.exports = connection;