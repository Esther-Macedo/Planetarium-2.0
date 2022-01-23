import connectToDatabase from './db';

class OrderQueries {
  connect = connectToDatabase();

  async createOrder(
    productId:number,
    costumerId:number,
    qtd:number,

  ) {
    try {
      return (await this.connect).query('INSERT INTO orders (prod_id, cost_id, ask_qtd) VALUES(?,?,?)', [productId, costumerId, qtd]);
    } catch (e) {
      console.log(e);
      throw new Error('Algo deu errado');
    } finally {
      (await this.connect).end();
    }
  }

  async deleteOrder(id:number) {
    try {
      return (await this.connect).query('DELETE FROM orders WHERE order_id=?', [id]);
    } catch (e) {
      console.log(e);
      throw new Error('Algo deu errado');
    } finally {
      (await this.connect).end();
    }
  }
}

export default OrderQueries;
