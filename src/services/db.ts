import { createConnection } from 'mysql2/promise';

async function connectToDatabase() {
  const conn = createConnection({
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: 'Delphini71',
    database: 'loja',
  });

  return conn;
}

export default connectToDatabase;
