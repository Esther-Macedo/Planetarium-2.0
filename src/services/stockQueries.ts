import connectToDatabase from './db';

class SotckQueries {
  public static async createStock(
    name: string,
    pclass:string,
    lifeSuport:string,
    details:string,
    qtd:number,
  ) {
    const connect = await connectToDatabase();
    connect.query('INSERT INTO products(product_name, class ,life_suport, details, qtd) VALUES(?,?,?,?,?)', [name, pclass, lifeSuport, details, qtd]);
    connect.end();
  }
}

export default SotckQueries;
