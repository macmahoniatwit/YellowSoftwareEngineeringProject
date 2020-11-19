var express = require('express');
var app = express();

app.get('/', function (req, res) {
   
    var sql = require("mysql");

    // config for your database
    var config = {
        user: 'sa',
        password: 'mypassword',
        server: 'localhost', 
        database: 'codeCamp' 
    };
    var dbConn = new sql.ConnectionPool(config);
    // connect to your database
    sql.connect(config).then(function(dbConn) {    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('select * from test', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        });
    });
});

var server = app.listen(5000, function () {
    console.log('Server is running..');
});