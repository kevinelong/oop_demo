const express = require('express')
var cors = require('cors')
var mysql = require('mysql');

const app = express()
app.use(cors())
const port = 3100


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

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/api/userdata', (req, res) => {
    getUserData((err, result, fields) => res.json(result) )
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})