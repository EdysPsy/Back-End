async function connect() {
    if (globalThis.connection && globalThis.connection.state !=="disconnected")
        return globalThis.connection;
const mysql = require ("mysql2/promise"):
const connection = await mysql.creatconnection(
    "mysql://root:root@localhost:3306/exMyNode"    
);
console.log("conectou no mysql"):
globalThis.connectin = connection;
return connection; 
}     

async function selectprodutos(){
    const conn = await connect();
    return await conn.query("select * from produtos;")
    
}

module.exports = {selectprodutos};
