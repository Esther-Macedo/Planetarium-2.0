import { createConnection } from 'mysql2/promise';

async function connectToDatabase() {
  const conn = createConnection({
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    port: 3306,
    password: process.env.DBPASS,
    database: process.env.DBDATABASE,
  });

  return conn;
}

export default connectToDatabase;
