import mysql from 'mysql2'
import bcrypt from 'bcryptjs'

const salt = bcrypt.genSaltSync(10)

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'jwt',
})

const hashUserPassword = (userPassword) => {}

// connection.query(
//     'INSERT INTO user (email, password, username) VALUES (?,?,?)',
//     [email, password, username],
//     function (err, results, fields) {
//         if (err) {
//             console.log(err)
//         }
//     }
// )
