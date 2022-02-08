"use strict";
/* import { createConnection } from 'typeorm';
import Orders from '../entity/Order';
import Products from '../entity/Products';
import User from '../entity/User';

async function connectToDatabase() {
  try {
    const conn = createConnection({
      name: 'default',
      type: 'mysql',
      host: process.env.DBHOST,
      username: process.env.DBUSER,
      port: 3306,
      password: process.env.DBPASS,
      database: process.env.DBDATABASE,
      entities: [User, Products, Orders],
    });
    return conn;
  } catch (e) {
    throw new Error('Algo deu errado');
  }
}

export default connectToDatabase;
 */
