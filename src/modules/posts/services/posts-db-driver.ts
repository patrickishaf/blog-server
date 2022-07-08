const mysql = require('mysql');

const testDB = () => {
    let connection = mysql.createConnection({
        host:'localhost',
        user: 'username',
        password: 'password',
    });

    connection.connect((err: Error) => {
        if (err) throw err;
        console.log('CONNECTED TO THE DB SUCCESSFULLY');
    });
}

export default testDB;