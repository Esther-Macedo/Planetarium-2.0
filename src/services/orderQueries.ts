import connectToDatabase from './db';

class OrderQueries {
  public static async createOrder(
    costumerId:number,
    productId: number,
    qtd:string,

  ) {
    const connect = await connectToDatabase();
    connect.query('INSERT INTO USER VALUES(?,?,?)', [costumerId, productId, qtd]);
  }
}

export default OrderQueries;
