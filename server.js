const express = require('express')
var cors = require('cors')
var mysql = require('mysql');

const app = express()
app.use(cors())
app.use(express.json())
const port = 3100


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "userdata" //schema
});

function getUserData(cb) {
    con.connect(function (err) {
        con.query(`
        SELECT username, jsontext
        FROM profiles
        JOIN datastore
        ON profile_id = profiles.id;
`, cb);
    });
}
function setUserData(username, jsontext, cb) {
    con.connect(function (err) {
        let sql = `
        UPDATE datastore SET jsontext = '${jsontext}' 
        WHERE profile_id = (
            SELECT id FROM profiles 
            WHERE username = '${username}'
        );
`
        console.log(sql);
        con.query(sql, cb);
    });
}
function createUser(username, cb) {
    con.connect(function (err) {
        con.query(`INSERT INTO profiles (username) VALUES ('${username}');`, 
        (err, result, fields) => {
            con.query(`
            INSERT INTO datastore (jsontext, profile_id) 
            VALUES ('{}', '${result.insertId}');
            `, cb);
        });
    });
}

app.get('/', (req, res) => {
    res.send('Please use: /api/userdata')
})

app.get('/api/userdata', (req, res) => {
    getUserData((err, result, fields) => res.json(result))
})

app.post('/api/userdata', (req, res) => {
    console.log(req.body.color);

    setUserData(req.body.username, encodeURIComponent(JSON.stringify(req.body)), e => {
        res.send("SUCCESS")
    });
});


app.post('/api/user', (req, res) => {
    createUser(req.body.username, (err, result, fields) => {
        console.log(err, result, fields)
        res.send("SUCCESS")
    });
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});