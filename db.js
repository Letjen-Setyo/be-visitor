const Pool = require("pg").Pool;
 
const pool = new Pool({
    user : "hhxjgczzftcauw",
    password : "38dd885d77baa9a7af835beef21155f41624d0a76b8d2fd07fe6bdbd2f6c0116",
    host : "ec2-52-0-93-3.compute-1.amazonaws.com",
    port : 5432,
    database : "d7hm49vehvmdgf"
});

module.exports = pool;