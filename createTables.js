const mysql=require("mysql");
const fs=require("fs/promises");
const { isUtf8 } = require("buffer");
const path= require("path");

const con= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"z10mz10m",
    database:"school"
})

con.connect(async err=>{
    if(err)throw err
    const filenames=await fs.readdir(path.normalize(`${__dirname}/entities`));
    console.log('filenames: ', filenames);
    for(let filename of filenames){
        const data=JSON.parse(await fs.readFile(path.normalize(`${__dirname}/entities/${filename}`,{encoding:"utf8"})))

        let columns = "";
        data[Object.keys(data)[0]].forEach((element, index)=> {
            columns += element
            if (index !== data[Object.keys(data)[0].length -1]) columns += ","
        });
        
        console.log('column: ', column);
        
        con.query(`CREATE TABLE ${Object.keys(data)[0]}(${columns})` ,(err, result) => {
            if (err) throw err;
            console.log(result);
        })
    }
}) 

