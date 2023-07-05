const mysql = require('mysql2'); // or use import if you use TS
const util = require('util');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'internet',
    password: 'anhdai123'
});
const query = util.promisify(connection.query).bind(connection);
const lCountry = async (req,res,next)=>{
    try{
        const rows = await query('select * from country');
        res.json(rows)
        console.log(rows)
    }
    catch(error){
        res.json({error:error.message})
    }
}
const lResult = async (req,res,next) => {
    try{
        const rows = await query('select * from result order by year');
        res.json(rows)
    }
    catch(error){
        res.json({error:error.message})
    }
}
const maxValue = async (req,res,next) => {
    try{
        const rows = await query('select max(value) as max from result limit 1');
        res.json(rows[0])
    }
    catch(error){
        res.json({error:error.message})
    }
}
module.exports = {lCountry,lResult,maxValue}