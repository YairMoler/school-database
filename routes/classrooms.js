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
    const classroom = req.body;
    console.log("classroom: ", classroom);
    con.connect((err) => {
        if (err) return console.log(err);
        con.query(
            `INSERT INTO classroom(grade, classroom_index, teacher_id) VALUES ('${classroom.grade}', '${classroom.classroom_index}', '${classroom.teacher_id}')`,
            (err, result) => {
                if (err) return console.log(err);
                console.log(result);
                res.send("classroom added");
            }
        );
    });
});

module.exports = router;
