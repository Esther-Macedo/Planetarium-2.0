import connectToDatabase from '../Configs/db';

class SotckQueries {
  public static async createStock(
    name: string,
    pclass:string,
    lifeSuport:string,
    details:string,
    qtd:number,
  ) {
    const connect = await connectToDatabase();
    try {
      connect.query('INSERT INTO products(product_name, class ,life_suport, details, qtd) VALUES(?,?,?,?,?)', [name, pclass, lifeSuport, details, qtd]);
    } catch (e) {
      throw new Error('Algo deu errado');
    } finally { connect.end(); }
  }

  public static async seeStock() {
    const connect = await connectToDatabase();
    try { return connect.query('SELECT * FROM products'); } catch (e) {
      throw new Error('Algo deu errado');
    } finally { connect.end(); }
  }
}

export default SotckQueries;
