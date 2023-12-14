var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "userdata" //schema
});


function getUserData(cb){
    con.connect(function (err) {
        con.query(`
        SELECT username, jsontext
        FROM profiles
        JOIN datastore
        ON profile_id = profiles.id;`, cb);
    });
}

getUserData((err, result, fields) => console.log(result[0].username))
