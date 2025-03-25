import mysql from "mysql2/promise";

let connection;

export const createConnection = async () => {
  if (!connection) {
    connection = await mysql.createConnection({
      host: process.env.HOST,
      user: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
    });
  }
  return connection;
};
