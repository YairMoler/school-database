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
    const school = req.body;
    console.log("school: ", school);
    con.connect((err) => {
        if (err) return console.log(err);
        con.query(`SELECT password FROM admin WHERE name = '${req.body.admin}'`, (err, result) => {
            console.log("hi");
            console.log("result: ", result);
            if (err) return console.log(err);
            if (result[0].password !== req.body.password) return res.status(400).send("not authorized");
            con.query(`INSERT INTO school(name, school_code) VALUES ('${school.name}', '${school.school_code}')`, (err, result) => {
                if (err) return console.log(err);
                console.log(result);
                res.send("school added");
            });
        });
    });
});

module.exports = router;
