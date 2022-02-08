import { createConnection } from 'typeorm';
import Orders from './entity/Order';
import Products from './entity/Products';
import User from './entity/User';

createConnection({
  database: 'planetas',
  type: 'mysql',
  username: 'root',
  password: 'Delphini71',
  host: 'localhost',
  entities: [User, Products, Orders],
  synchronize: false,
  name: 'default',

});
