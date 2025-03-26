import mysql from "mysql2/promise";

let connection;

export const createConnection = async () => {
// let  HOST = process.env.HOST
// let  PORT = process.env.PORT
// let  USER = process.env.USER
// let  PASSWORD = process.env.PASSWORD
// let  DATABASE = process.env.DATABASE
//   console.log(HOST,
//     PORT,
//     USER,
//     PASSWORD,
//     DATABASE)

  if (!connection) {
    connection = await mysql.createConnection({
      host: process.env.HOST,
      port:process.env.PORT,
      user: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
    });
  }
  return connection;
};
