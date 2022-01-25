import connectToDatabase from '../Configs/db';

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
      throw new Error('Algo deu errado');
    } finally {
      (await this.connect).end();
    }
  }

  async deleteOrder(id:number) {
    try {
      return (await this.connect).query('DELETE FROM orders WHERE order_id=?', [id]);
    } catch (e) {
      throw new Error('Algo deu errado');
    } finally {
      (await this.connect).end();
    }
  }

  async seeOrders() {
    try {
      return (await this.connect).query('SELECT * FROM orders');
    } catch (e) {
      throw new Error('Algo deu errado');
    } finally {
      (await this.connect).end();
    }
  }
}

export default OrderQueries;
