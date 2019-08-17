const mysql = require("mysql");

const mysqlConnection = mysql.createConnection({
    connector: "mysql",
    socketPath: "/cloudsql/prueba2-g2:us-east1:arqui2",    
    user: "root",
    password: "henry",
    database: "mensajes"
});

mysqlConnection.connect(function (err){
    if(err) {
        console.log(err);
        return;
    }else {
        console.log("La Base esta Conectada...");
    }
});

module.exports = mysqlConnection;
