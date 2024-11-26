const express= require('express')
const router=express.Router();
const mysql= require("mysql");

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "z10mz10m",
    database: "school",
});



router.post('/',(req, res)=>{
    const teacher=req.body;
    console.log('teacher: ', teacher);
    con.connect((err)=>{
        if(err) throw err
        con.query(`INSERT INTO teacher(name, password, email) VALUES ('${teacher.name}', '${teacher.password}', '${teacher.email}')`, (err, result)=>{
            if(err)throw err
            console.log(result);
            res.send('teacher added')
        })
        })
})

module.exports=router;