const mysql = require("mysql");

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "z10mz10m",
    database: "school",
});

con.connect((err) => {
    if (err) throw err;
    const query = "INSERT INTO admin (name, password, school_id) VALUES ?";
    const Values = [
        ["john", "abc", 2],
        ["peter", "asdf", 1],
    ];
    con.query(query, [Values], (err, result) => {
        if (err) throw err;
        console.log(result);
    });
});
