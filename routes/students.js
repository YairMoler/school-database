const express = require("express");
const router = express.Router();
const mysql = require("mysql");

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "z10mz10m",
    database: "school",
});

router.post("/", (req, res) => {
    console.log("hi");
    const student = req.body;
    console.log("student: ", student);
    con.connect((err) => {
        if (err) return console.log(err);
        con.query(
            `INSERT INTO student(name, password, classroom_id) VALUES ('${student.name}', '${student.password}', '${student.classroom_id}')`,
            (err, result) => {
                if (err) return console.log(err);
                console.log(result);
                res.send("student added");
            }
        );
    });
});

module.exports = router;
