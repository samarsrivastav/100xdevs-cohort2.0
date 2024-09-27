import { Client } from 'pg'
const client = new Client({
    connectionString:"postgresql://postgres:mypassword@localhost/postgres"
})
// creating the table 
async function createUsersTable(){
    await client.connect()
    const result=await client.query(`
        CREATE TABLE users(
            id serial primary key,
            username varchar(20) UNIQUE NOT NULL,
            email varchar(20) UNIQUE NOT NULL,
            password varchar(20) NOT NULL
        );
    `)
    console.log(result)
}
// inserting datas into the table (vulnerable insertion query to sql injection)
async function insertDataUnsecure() {
    await client.connect()
    const result=await client.query(`
        INSERT INTO users (username, email, password) VALUES('samar2','samar2@gmail.com','123456');
    `)
    console.log('insertion success: ',result)
}
// secure insertion query
async function insertData() {
    await client.connect()
    const sqlQuery="INSERT INTO users (username, email, password) VALUES($1,$2,$3);"
    const values=['username','email','password'];
    const result=await client.query(sqlQuery,values)
    console.log('insertion success: ',result)
}
async function Data() {
    await client.connect()
    const sqlQuery=`SELECT * from users where username=$1;`
    const value=['samar2']
    const result=await client.query(sqlQuery,value)
    console.log(result.rows)
}
Data()