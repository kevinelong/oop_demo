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
        ON profile_id = profiles.id;`, cb);
    });
}
function setUserData(username, jsontext, cb) {
    con.connect(function (err) {
        let sql = `
        UPDATE datastore SET jsontext = '${jsontext}' 
        WHERE profile_id = (
            SELECT id FROM profiles 
            WHERE username = '${username}'
        );`
        console.log(sql);
        con.query(sql, cb);
    });
}
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/api/userdata', (req, res) => {
    getUserData((err, result, fields) => res.json(result))
})

app.post('/api/userdata', (req, res) => {
    console.log(req.body.color);

    setUserData(req.body.username, encodeURIComponent(JSON.stringify(req.body)), e=>{
        res.send("SUCCESS")
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});