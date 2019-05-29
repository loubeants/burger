var connection = require("./connection.js");


var orm = {
    selectAll: function(cb) {
        connection.query("SELECT * FROM burgers", function(err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    insertOne: function(burger_name, cb) {
        connection.query("INSERT INTO burgers SET ?",
        {
            burger_name: burger_name
        }, function(err, res) {
            if (err) throw err;
            cb(res)
        });
    },
    updateOne: function(id, cb) {
        connection.query("UPDATE burgers SET devoured = true WHERE ?",
        {
            id: id
        }, function(err,res) {
            if (err) throw err;
            cb(res)
        });
    }
};

module.exports = orm;