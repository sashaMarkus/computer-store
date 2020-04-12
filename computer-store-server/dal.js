const mysql = require('mysql');
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'computer_store'
})

connection.connect((err) => {
    if(err) throw err;
    console.log('Connected');
});

function readAll(query, callback) {
    connection.query(query, (err, results) => {
        if(err){
            callback(err);
        } else {
            callback(null, results);
        }
    })
}

function createOne(query, callback) {
    connection.query(query, (err) => {
        if(err) {
            callback(err);
        } else {
            callback(null);
        }
    })
}

module.exports = {
    readAll: readAll,
    createOne: createOne
}