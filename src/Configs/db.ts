import { createConnection } from 'mysql2/promise';

async function connectToDatabase() {
  try {
    const conn = createConnection({
      host: process.env.DBHOST,
      user: process.env.DBUSER,
      port: 3306,
      password: process.env.DBPASS,
      database: process.env.DBDATABASE,

    });
    return conn;
  } catch (e) {
    throw new Error('Algo deu errado');
  }
}

export default connectToDatabase;
